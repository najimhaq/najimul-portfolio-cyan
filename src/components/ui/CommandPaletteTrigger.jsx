'use client';

export default function CommandPaletteTrigger({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className='hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-400 hover:border-purple-500/40 transition-colors'
    >
      Search
      <kbd className='text-[10px] bg-white/5 px-1.5 py-0.5 rounded'>⌘K</kbd>
    </button>
  );
}
