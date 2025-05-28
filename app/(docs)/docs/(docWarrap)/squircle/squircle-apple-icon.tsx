import React from 'react';
import { Music4 } from 'lucide-react';
import Squircle from '@/components/core/squircle';

const SquircleAppleIcon = () => {
  return (
    
    // smooth value = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

    <Squircle radius='44px' smooth='0.9' outline='none' className='grab-cursor'>
      <div className='flex aspect-square w-[200px] items-center justify-center bg-linear-to-t from-[#FA233B] to-[#FB5C74]'>
        <Music4 className='h-[100px] w-[100px] text-white' />
      </div>
    </Squircle>
  );
};

export default SquircleAppleIcon;
