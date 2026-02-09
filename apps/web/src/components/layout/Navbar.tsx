'use client';

import Link from 'next/link';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
];

export function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none'>
      {/* OPTIMIZATION: 
          1. Removed high-radius blur. 
          2. Added 'will-change' for GPU optimization.
          3. Added 'pointer-events-auto' to the inner bar so it doesn't block the screen.
      */}
      <div className='glass pointer-events-auto flex items-center justify-between w-full max-w-5xl px-5 py-2.5 rounded-full will-change-transform'>
        {/* Logo */}
        <Link href='/' className='group flex items-center gap-2.5'>
          <div className='h-5 w-5 bg-brand-primary rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-fluid' />
          <span className='font-heading font-bold tracking-tighter text-lg'>
            DEEDZ
          </span>
        </Link>

        {/* Links */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted hover:text-brand-primary transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action - Simple and Sharp */}
        <button className='px-5 py-2 bg-brand-primary text-midnight text-[10px] font-mono uppercase tracking-widest font-bold rounded-full hover:bg-white transition-all active:scale-95'>
          Contact
        </button>
      </div>
    </nav>
  );
}
