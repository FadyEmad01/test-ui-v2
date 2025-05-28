import ComponentCodePreview from '@/components/component-code-preview';
import React from 'react';
import NeumorphismButton from './neumorphism-button';

const page = () => {
  return (
    <>
      <ComponentCodePreview
        classNameComponentContainer='min-h-0 py-24 lg:px-32 px-8'
        component={<NeumorphismButton />}
        filePath='app/(docs)/docs/(docWarrap)/neumorphism-button/neumorphism-button.tsx'
      />
    </>
  );
};

export default page;
