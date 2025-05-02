import { DocsSidebarNav } from '@/components/sideBar';
import { NAVIGATION } from '@/constants/sidebar';
// import MainDocPage from './main-doc-page';
// import { ChevronRightIcon } from 'lucide-react';
// import GetDocTitle from './getDocTitle';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { TableOfContents } from '@/components/table-of-contents';
// import GoToBtn from '@/components/goToBtn';


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarNav = NAVIGATION;


  return (
    <div className='container-wrapper'>
      <div className='container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10'>
        <aside className='fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block'>
          <div className='no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8'>
            <DocsSidebarNav items={sidebarNav} />
          </div>
        </aside>
        {/* <main className='relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]'>
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
        </main> */}
        <div>{children}</div>
      </div>
    </div>
  );
}
