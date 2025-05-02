// 'use client';

// import { codeToHtml } from '@/lib/shiki';
// import { LoaderCircle } from 'lucide-react';
// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';

// type CodeRenderer = {
//   code: string;
//   lang: string;
// };

// export default function CodeRenderer({ code, lang }: CodeRenderer) {
//   const [html, setHtml] = useState<string | null>(null);
//   const { theme } = useTheme();

//   useEffect(() => {
//     const renderCode = async () => {
//       const html = await codeToHtml({
//         code,
//         lang,
//         theme,
//       });
//       setHtml(html);
//     };

//     renderCode();
//   }, [code, lang, theme]);

//   if (!html) return <LoaderCircle className='animate-spin' />; // Or a loader/spinner if you want

//   return (
//     <div className='font-mono'>
//       <div dangerouslySetInnerHTML={{ __html: html }} />
//     </div>
//   );
// }

import { codeToHtml } from '@/lib/shiki';

type CodeRenderer = {
  code: string;
  lang: string;
};

export default async function CodeRenderer({ code, lang }: CodeRenderer) {
  const html = await codeToHtml({
    code,
    lang,
  });

  return (
    <div className='font-mono'>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
