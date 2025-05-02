'use client';

import { NAVIGATION } from '@/constants/sidebar';
import { usePathname } from 'next/navigation';
import React from 'react';

const GetDocTitle = () => {
  const pathname = usePathname();
  const sidebarNav = NAVIGATION;

  // Flatten the nav to easily search through all items
  const flattenedNavItems = sidebarNav.flatMap((section) => section.children);

  // Find the active item based on pathname
  const activeItem = flattenedNavItems.find((item) => pathname === item.href);
  return (
    <div className='text-foreground font-medium'>
      {activeItem?.name || 'Documentation'}
    </div>
  );
};

export default GetDocTitle;
