// import { bundledLanguages, createHighlighter } from 'shiki/bundle/web';

// export const codeToHtml = async ({
//   code,
//   lang,
//   theme = 'light-plus',
// }: {
//   code: string;
//   lang: string;
//   theme?: string;
// }) => {
//   const highlighter = await createHighlighter({
//     themes: ['dark-plus', 'light-plus'],
//     langs: [...Object.keys(bundledLanguages)],
//   });

//   return highlighter.codeToHtml(code, {
//     lang: lang,
//     theme: theme === 'dark' ? 'dark-plus' : 'dark-plus',
//   });
// };

import { bundledLanguages, createHighlighter } from 'shiki/bundle/web';

export const codeToHtml = async ({
  code,
  lang,
  theme = 'dark-plus',
}: {
  code: string;
  lang: string;
  theme?: string;
}) => {
  const highlighter = await createHighlighter({
    themes: ['dark-plus'],
    langs: [...Object.keys(bundledLanguages)],
  });

  return highlighter.codeToHtml(code, {
    lang: lang,
    theme: theme,
  });
};
