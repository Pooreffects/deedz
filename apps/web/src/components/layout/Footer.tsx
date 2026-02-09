'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full px-6 pb-12 mt-32'>
      <div className='max-w-7xl mx-auto'>
        {/* REFINEMENT: 
            Removed relative z-10 and backdrop-blur. 
            Used a solid surface background for zero-lag scrolling.
        */}
        <div className='surface rounded-[40px] p-8 md:p-16 relative overflow-hidden'>
          {/* Subtle Branding - Static is better for performance */}
          <div className='absolute -bottom-6 -right-6 opacity-[0.03] select-none pointer-events-none hidden lg:block'>
            <span className='text-[14rem] font-heading font-bold tracking-tighter leading-none'>
              DEEDZ
            </span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div className='space-y-8'>
              <Link href='/' className='flex items-center gap-2'>
                <div className='h-4 w-4 bg-accent rounded-sm rotate-45' />
                <span className='font-heading font-bold tracking-tighter text-xl uppercase'>
                  DEEDZ
                </span>
              </Link>
              <p className='max-w-xs text-brand-muted text-sm leading-relaxed'>
                Engineering high-fidelity frontend systems and productized asset
                foundries for high-impact startups.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-8 md:justify-items-end'>
              <div className='space-y-6'>
                <h4 className='text-[10px] font-mono uppercase tracking-[0.3em] text-accent/80'>
                  Index
                </h4>
                <ul className='space-y-3'>
                  {['Services', 'Products', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className='text-xs text-brand-muted hover:text-brand-primary transition-colors'
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='space-y-6'>
                <h4 className='text-[10px] font-mono uppercase tracking-[0.3em] text-accent/80'>
                  Status
                </h4>
                <div className='space-y-3'>
                  <div className='flex items-center gap-2 text-[9px] font-mono text-emerald-500'>
                    <span className='h-1 w-1 rounded-full bg-emerald-500 animate-pulse' />
                    LIVE_RELIABILITY_100%
                  </div>
                  <div className='text-[9px] font-mono text-brand-muted uppercase tracking-tighter'>
                    Build_v1.0.42_Stable
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
            <p className='text-[9px] font-mono text-brand-muted tracking-[0.2em]'>
              © {currentYear} DEEDZ FOUNDRY // ARCHITECTING THE FUTURE.
            </p>
            <div className='flex gap-8 text-[9px] font-mono text-brand-muted tracking-[0.2em]'>
              <Link
                href='/privacy'
                className='hover:text-brand-primary transition-colors'
              >
                Privacy
              </Link>
              <Link
                href='/terms'
                className='hover:text-brand-primary transition-colors'
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
