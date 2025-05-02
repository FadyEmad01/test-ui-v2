'use client';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type CodePreviewProps = {
  code: string;
  children: React.ReactNode;
};

export default function CodePreview({ code, children }: CodePreviewProps) {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className='relative'>
      <div
        className='absolute top-4 right-4 cursor-pointer bg-transparent p-2'
        onClick={onCopy}
      >
        <div
          className={`absolute inset-0 transform transition-all duration-300 ${
            hasCheckIcon ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <Copy className='h-4 w-4 dark:text-zinc-50 text-zinc-950' />
        </div>
        <div
          className={`absolute inset-0 transform transition-all duration-300 ${
            hasCheckIcon ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <Check className='h-4 w-4 text-green-500 ' />
        </div>
      </div>
      {/* <div className='max-h-[550px] overflow-auto rounded-md dark:bg-[#1E1E1E] bg-[#FFFFFF]'> */}
      <div className='max-h-[550px] overflow-auto rounded-md bg-[#1E1E1E]'>
        <div className='inline-block overflow-x-auto p-4 text-sm'>
          {children}
        </div>
      </div>
    </div>
  );
}
