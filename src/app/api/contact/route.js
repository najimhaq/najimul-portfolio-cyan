import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function POST(request) {
  try {
    const { name, email, message, website } = await request.json();

    // Honeypot: actual visitors keep this empty. Bots commonly fill it.
    if (website) {
      return Response.json({ success: true }, { status: 200 });
    }

    const cleanName = name?.trim();
    const cleanEmail = email?.trim().toLowerCase();
    const cleanMessage = message?.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json(
        { error: 'Please complete your name, email, and message.' },
        { status: 400 }
      );
    }

    if (
      cleanName.length > 120 ||
      cleanEmail.length > 160 ||
      cleanMessage.length > 5000
    ) {
      return Response.json(
        { error: 'Your message is too long. Please shorten it and try again.' },
        { status: 400 }
      );
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!isValidEmail) {
      return Response.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: cleanEmail,
      subject: `Portfolio inquiry from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827">
          <h2>New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <hr />
          <p style="white-space: pre-wrap">${escapeHtml(cleanMessage)}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return Response.json(
        { error: 'Message could not be sent. Please try again shortly.' },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: 'Thanks! Your message has been sent.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
