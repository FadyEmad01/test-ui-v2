'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NAVIGATION, NavigationItem } from '@/constants/sidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GoToBtn = () => {
  const pathname = usePathname();

  // Step 1: Flatten all children from NAVIGATION
  const flatPages: NavigationItem[] = NAVIGATION.flatMap(
    (group) => group.children
  );

  // Step 2: Find the current index
  const currentIndex = flatPages.findIndex((item) => item.href === pathname);

  if (currentIndex === -1) return null;

  const prev = flatPages[currentIndex - 1];
  const next = flatPages[currentIndex + 1];

  return (
    <div className='my-10 w-full'>
      <div className='flex items-center justify-between'>
        {prev ? (
          <Link className='no-underline group' href={prev.href}>
            <button className='dark:bg-[#18181B] text-accent-foreground cursor-pointer rounded-lg border px-3 py-0.5 shadow flex items-center'>
              <ChevronLeft className='size-4 transition-transform group-hover:-translate-x-1' /> {prev.name}
            </button>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link className='no-underline group' href={next.href}>
            <button className='dark:bg-[#18181B] text-accent-foreground cursor-pointer rounded-lg border px-3 py-0.5 shadow flex items-center'>
              {next.name} <ChevronRight className='size-4 transition-transform group-hover:translate-x-1' />
            </button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default GoToBtn;
