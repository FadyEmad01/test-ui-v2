'use client';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VersionSelect } from './version-select';
import { Badge } from './ui/badge';

function copyLogoAsSVG(path: string) {
  fetch(path)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const svgContent = event.target?.result;
        navigator.clipboard.writeText(svgContent as string);
      };
      reader.readAsText(blob);
    });
}

function copyLogoAsPNG(path: string) {
  fetch(path)
    .then((response) => response.blob())
    .then((blob) => {
      const item = new ClipboardItem({ 'image/png': blob });
      navigator.clipboard.write([item]);
    });
}

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex'>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <Link href='/' className='relative mr-6 flex items-center space-x-2'>
            <span className='hidden font-bold md:inline-block'>
              siteConfig.name
            </span>
          </Link>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem
            className='flex items-center gap-2'
            onClick={() => copyLogoAsSVG('/icon.svg')}
          >
            <span>Copy Logo as SVG</span>
          </ContextMenuItem>
          <ContextMenuItem
            className='flex items-center gap-2'
            onClick={() => copyLogoAsPNG('/icon.png')}
          >
            <span>Copy Logo as PNG</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className='mr-4'>
        <VersionSelect />
      </div>
      <nav className='hidden items-center space-x-6 text-sm font-medium xl:flex'>
        <div>hello</div>
        <Badge
          variant='outline'
          className='leading-normal border bg-violet-100 text-violet-700 border-violet-200 dark:text-violet-600 dark:bg-violet-950/50 dark:border-violet-950'
        >
          Soon
        </Badge>
      </nav>
    </div>
  );
}
