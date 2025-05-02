'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Heading = {
  id: string;
  text: string;
  level: number;
  link: string;
};

function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: [0.1, 0.5, 1],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll('[data-heading]'));
  
      const newHeadings: Heading[] = [];
  
      for (const elem of elements) {
        const level = parseInt(elem.getAttribute('data-heading') || '2', 10);
        const text = elem.textContent?.trim() ?? '';
  
        if (level === 1) continue;
  
        newHeadings.push({
          id: elem.id,
          link: elem.id,
          text,
          level,
        });
  
        if (text === 'Component API') break; // Include it, then stop
      }
  
      setHeadings(newHeadings);
    };
  
    updateHeadings();
  
    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });
  
    return () => observer.disconnect();
  }, [pathname]);
  
  

  const ids = headings.map((h) => h.id);
  const activeId = useActiveHeading(ids);

  if (headings.length === 0) return null;

  return (
    <>
      <p className='mb-2 text-sm/6 font-[450] text-black dark:text-white'>On this page</p>
      <ul
        className='list-none space-y-2 text-sm/6 text-zinc-700 dark:text-zinc-400'
        role='list'
        key={pathname}
      >
        {headings.map((heading) => (
          <li
            key={`${heading.id}-${heading.level}-${pathname}`}
            className={cn(
              'transition-all duration-200',
              heading.level === 2 && 'pl-0',
              heading.level === 3 && 'pl-2',
              heading.level === 4 && 'pl-4'
            )}
          >
            <a
              href={`#${heading.link}`}
              className={cn(
                'hover:text-zinc-950 dark:hover:text-white transition-colors duration-200',
                activeId === heading.id && 'text-black dark:text-white font-semibold'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
