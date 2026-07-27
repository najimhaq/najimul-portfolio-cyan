import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiStripe,
  SiFramer,
  SiDaisyui,
} from 'react-icons/si';

const iconMap = {
  'Next.js': SiNextdotjs,
  React: SiReact,
  Tailwind: SiTailwindcss,
  'Tailwind CSS': SiTailwindcss,
  MongoDB: SiMongodb,
  Stripe: SiStripe,
  'Framer Motion': SiFramer,
  'Daisy UI': SiDaisyui,
};

export default function TechIcon({ name, size = 14 }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}
