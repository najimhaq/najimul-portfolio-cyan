import { Globe, Workflow, Cpu, Bot, Rocket } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Websites & Web Apps' },
  { icon: Workflow, title: 'Automation & Systems' },
  { icon: Cpu, title: 'Robotics' },
  { icon: Bot, title: 'AI Agents & Intelligent Systems' },
  { icon: Rocket, title: 'Custom Applications' },
];

export default function Services() {
  return (
    <section id='services' className='py-24 px-6 bg-gray-950'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-10'>Services</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className='flex items-center gap-3 p-5 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-cyan-500/40 transition-colors'
              >
                <div className='p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0'>
                  <Icon size={20} />
                </div>
                <span className='text-white font-medium'>{s.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
