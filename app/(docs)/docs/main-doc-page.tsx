'use client';
import { ChevronRightIcon } from 'lucide-react';
import React from 'react';
import GetDocTitle from './getDocTitle';
import GoToBtn from '@/components/goToBtn';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TableOfContents } from '@/components/table-of-contents';
import { NAVIGATION } from '@/constants/sidebar';
import { notFound, usePathname } from 'next/navigation';

const MainDocPage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const sidebarNav = NAVIGATION;

  // Check if the current path exists in the navigation
  const pathExists = sidebarNav.some((group) =>
    group.children.some((item) => item.href === pathname)
  );

  // If path doesn't exist in navigation, show the docs-specific not-found page
  if (!pathExists) {
    notFound();
  } else {
    return (
      <main className='relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]'>
        <div className='mx-auto w-full max-w-3xl min-w-0 py-6 lg:py-8'>
          <div className='text-muted-foreground mb-4 flex items-center space-x-1 text-sm'>
            <div className='truncate'>Docs</div>
            <ChevronRightIcon className='size-4' />
            <GetDocTitle />
          </div>
          <div className='prose prose-zinc dark:prose-invert prose-h1:scroll-m-20 prose-h1:text-2xl prose-h1:font-semibold prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-xl prose-h2:font-medium prose-h3:scroll-m-20 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-20 prose-h5:scroll-m-20 prose-h6:scroll-m-20 prose-strong:font-medium prose-table:block prose-table:overflow-y-auto mr-0 max-w-full min-w-0 flex-1 lg:pt-3 xl:max-w-2xl'>
            {children}
            <GoToBtn />
          </div>
        </div>
        <div className='sticky top-13 hidden h-[calc(100dvh-(--spacing(16)))] w-[220px] shrink-0 border-l pt-6 pl-4 lg:pt-8 xl:block'>
          <ScrollArea className='h-full w-full'>
            <TableOfContents />
          </ScrollArea>
        </div>
      </main>
    );
  }
};

export default MainDocPage;
