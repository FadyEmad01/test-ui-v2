'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { NAVIGATION } from '@/constants/sidebar';
import BadgeStatus from './badge-status';
import { CircleIcon, FileIcon } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <svg
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='size-5'
          >
            <path
              d='M3 5H11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 12H16'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 19H21'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='gap-0 space-y-0'>
        <Link
          href='/'
          onClick={() => {
            setIsOpen(false);
          }}
          className='border-border flex h-16 items-center border-b px-4'
        >
          <span className='font-bold'>siteConfig.name</span>
        </Link>
        <ScrollArea className='h-[calc(100vh-4rem)] p-4'>
          <div className='flex flex-col space-y-1.5'>item</div>
          <div className='flex flex-col gap-y-2'>
            {NAVIGATION.map((group, groupIndex) => (
              <div key={groupIndex} className='flex flex-col gap-y-1.5 pt-6'>
                <h4 className='font-medium'>{group.name}</h4>

                {group.children.map((item) =>
                  item.href ? (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      className='text-muted-foreground flex items-center justify-between'
                    >
                      <div className='flex items-center'>
                        {/* Show CircleIcon if Core Components */}
                        {group.name === 'Core Components' ? (
                          <div className='mr-2 flex size-4 items-center justify-center'>
                            <CircleIcon className='size-3' />
                          </div>
                        ) : (
                          <FileIcon className='mr-2 size-4' />
                        )}
                        {item.name}
                      </div>

                      <div className='flex items-center gap-1'>
                        {item.isNew && <BadgeStatus variant='new' />}
                        {item.isUpdated && <BadgeStatus variant='updated' />}
                        {item.isComingSoon && (
                          <BadgeStatus variant='comingsoon' />
                        )}
                      </div>
                    </MobileLink>
                  ) : (
                    <span
                      key={item.name}
                      className='text-muted-foreground flex items-center'
                    >
                      {item.name}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={() => {
          router.push(href.toString());
          onOpenChange?.(false);
        }}
        className={cn(
          className,
          'p-1 pl-2.5 text-[15px]',
          isActive
            ? 'border-primary/70 bg-secondary text-primary rounded-r-md border-l-2 font-medium'
            : ''
        )}
        {...props}
      >
        {children}
      </Link>
    </SheetClose>
  );
}
