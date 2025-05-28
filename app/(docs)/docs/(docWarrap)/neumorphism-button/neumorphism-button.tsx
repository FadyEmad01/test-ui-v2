import React from 'react';

const NeumorphismButton = () => {
  return (
    <>
      {/* <div className='from-primary-200/60 relative rounded-3xl bg-gradient-to-b to-white p-3'>
        <button className='group to-primary-200 after:from-primary-100 after:to-primary-50 active:after:from-primary-200 active:after:to-primary-100 relative rounded-2xl bg-gradient-to-b from-white px-10 py-8 drop-shadow-lg after:absolute after:inset-2.5 after:rounded-xl after:bg-gradient-to-b active:drop-shadow-sm active:after:inset-1'>
          <div className='text-primary-900 group-active:text-primary-700 relative z-1 flex items-center gap-4'>
            <span className='font-sans text-4xl font-medium'>Add media</span>
          </div>
        </button>
      </div> */}
      <div className='flex flex-col items-center justify-center'>
        <button className='mt-5 w-full rounded-2xl bg-gradient-to-b from-blue-400 to-blue-800 px-6 py-3 text-center font-semibold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,_0_1px_1.5px_1px_rgba(255,255,255,0.4)_inset,_0_-1px_1.5px_1px_rgba(0,0,0,0.4)_inset,_0_2px_2px_0_rgba(0,0,0)] transition-transform duration-150 hover:bg-gradient-to-b hover:from-blue-800 hover:to-blue-800 active:scale-98'>
          Continue
        </button>
        <button className='text-shadow-[0_1px_2px_rgba(0,0,0,0.32)] shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,_0_1px_1.5px_1px_rgba(255,255,255,0.4)_inset,_0_-1px_1.5px_1px_rgba(0,0,0,0.1)_inset,_0_2px_2px_0_rgba(0,0,0,0.05)] relative mt-5 w-full rounded-2xl bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] px-6 py-3 text-center font-semibold text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]'>
          Continue
        </button>
      </div>
    </>
  );
};

export default NeumorphismButton;
