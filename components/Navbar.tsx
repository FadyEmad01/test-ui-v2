import Link from 'next/link';

import { cn } from '@/lib/utils';
import { MainNav } from './MainNav';
import { MobileNav } from './mobile-nav';
import { CommandMenu } from './command-menu';
import { ModeToggle } from './mode-toggle';

export async function Navbar() {
  return (
    <header
      className={cn(
        'supports-backdrop-blur:bg-background/90 border-border bg-background/40 sticky top-0 z-40 w-full border-b backdrop-blur-lg'
      )}
    >
      <div className='container flex h-16 items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <CommandMenu />
          </div>
          <nav className='flex items-center gap-1'>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <ModeToggle />
          </nav>
        </div>
      </div>
      {/* <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" /> */}
    </header>
  );
}
