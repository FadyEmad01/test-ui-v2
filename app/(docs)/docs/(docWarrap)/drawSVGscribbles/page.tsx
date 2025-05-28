import ComponentCodePreview from '@/components/component-code-preview';
import React from 'react';
import DrawSVGscribblesCode from './drawSVGscribbles-code';

const page = () => {
  return (
    <>
      <ComponentCodePreview
        classNameComponentContainer='min-h-0 py-24 lg:px-32 px-8'
        component={<DrawSVGscribblesCode />}
        filePath='app/(docs)/docs/(docWarrap)/drawSVGscribbles/drawSVGscribbles-code.tsx'
      />
    </>
  );
};

export default page;
