// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { InertiaPlugin } from 'gsap/InertiaPlugin';

// gsap.registerPlugin(InertiaPlugin);

// export default function Oops() {
//   const images = [
//     // {
//     //   src: '/images/O_18.png',
//     //   alt: 'O letter',
//     // },
//     {
//       src: '/images/O_03.png',
//       alt: 'O letter',
//     },
//     {
//       src: '/images/O_05.png',
//       alt: 'O letter',
//     },
//     {
//       src: '/images/P_11.png',
//       alt: 'P letter',
//     },
//     {
//       src: '/images/S_17.png',
//       alt: 'S letter',
//     },
//     {
//       src: '/images/Exclamation_Mark_07.png',
//       alt: '! character',
//     },
//   ];

//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     let oldX = 0,
//       oldY = 0,
//       deltaX = 0,
//       deltaY = 0;

//     const root = containerRef.current;

//     const handleMouseMove = (e: MouseEvent) => {
//       deltaX = e.clientX - oldX;
//       deltaY = e.clientY - oldY;
//       oldX = e.clientX;
//       oldY = e.clientY;
//     };

//     const handleMouseEnter = (el: HTMLElement) => {
//       const image = el.querySelector('img');
//       if (!image) return;

//       // Floating animation — slow vertical movement
//       gsap.to(image, {
//         y: '+=10',
//         duration: 4 + Math.random() * 2, // vary slightly per image
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         delay: Math.random(), // random delay per image
//       });

//       const tl = gsap.timeline({
//         onComplete: () => {
//           tl.kill();
//         },
//       });

//       tl.timeScale(1.2);

//       tl.to(image, {
//         inertia: {
//           x: { velocity: deltaX * 30, end: 0 },
//           y: { velocity: deltaY * 30, end: 0 },
//         },
//       });
//       tl.fromTo(
//         image,
//         { rotate: 0 },
//         {
//           duration: 0.4,
//           rotate: (Math.random() - 0.5) * 30,
//           yoyo: true,
//           repeat: 1,
//           ease: 'power1.inOut',
//         },
//         '<'
//       );
//     };

//     root.addEventListener('mousemove', handleMouseMove);

//     const mediaElements = root.querySelectorAll('.media');
//     mediaElements.forEach((el) => {
//       el.addEventListener('mouseenter', () =>
//         handleMouseEnter(el as HTMLElement)
//       );
//     });

//     return () => {
//       root.removeEventListener('mousemove', handleMouseMove);
//       mediaElements.forEach((el) => {
//         el.removeEventListener('mouseenter', () =>
//           handleMouseEnter(el as HTMLElement)
//         );
//       });
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className=''>
//       {/* <div className='flex flex-wrap items-center justify-center gap-3'> */}
//       <div className='grid grid-cols-5 gap-[1vw] max-md:gap-[2vw]'>
//         {images.map((img, i) => (
//           <div key={i} className='media'>
//             <img
//               src={typeof img === 'string' ? img : img.src}
//               alt={typeof img === 'string' ? `sample-${i + 1}` : img.alt}
//               className='pointer-events-none block size-32 rounded-2xl object-contain will-change-transform'
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////

// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { InertiaPlugin } from 'gsap/InertiaPlugin';

// gsap.registerPlugin(InertiaPlugin);

// export default function Oops() {
//   const images = [
//     { src: '/images/O_03.png', alt: 'O letter' },
//     { src: '/images/O_05.png', alt: 'O letter' },
//     { src: '/images/P_11.png', alt: 'P letter' },
//     { src: '/images/S_17.png', alt: 'S letter' },
//     { src: '/images/Exclamation_Mark_07.png', alt: '! character' },
//   ];

//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     let oldX = 0,
//       oldY = 0,
//       deltaX = 0,
//       deltaY = 0;

//     const root = containerRef.current;

//     const handleMouseMove = (e: MouseEvent) => {
//       deltaX = e.clientX - oldX;
//       deltaY = e.clientY - oldY;
//       oldX = e.clientX;
//       oldY = e.clientY;
//     };

//     root.addEventListener('mousemove', handleMouseMove);

//     const mediaElements = root.querySelectorAll('.media');

//     mediaElements.forEach((el) => {
//       const image = el.querySelector('img');
//       if (!image) return;

//       // Create independent floating animation timeline
//       const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true });
//       floatTimeline.to(image, {
//         x: `+=${(Math.random() - 0.5) * 20}`,
//         y: `+=${(Math.random() - 0.5) * 20}`,
//         duration: 3 + Math.random() * 2,
//         ease: 'sine.inOut',
//       });

//       const handleMouseEnter = () => {
//         // Hover effect — apply without killing the float animation
//         const tl = gsap.timeline({ defaults: { overwrite: false } });

//         tl.to(image, {
//           inertia: {
//             x: { velocity: deltaX * 30, end: 0 },
//             y: { velocity: deltaY * 30, end: 0 },
//           },
//         });

//         tl.fromTo(
//           image,
//           { rotate: 0 },
//           {
//             duration: 0.4,
//             rotate: (Math.random() - 0.5) * 30,
//             yoyo: true,
//             repeat: 1,
//             ease: 'power1.inOut',
//           },
//           '<'
//         );
//       };

//       el.addEventListener('mouseenter', handleMouseEnter);

//       // Store cleanup function
//       (el as any)._gsapHandler = handleMouseEnter;
//       (el as any)._floatTimeline = floatTimeline;
//     });

//     return () => {
//       root.removeEventListener('mousemove', handleMouseMove);
//       mediaElements.forEach((el) => {
//         const image = el.querySelector('img');
//         if (image) {
//           const floatTl = (el as any)._floatTimeline;
//           if (floatTl) floatTl.kill();
//           gsap.killTweensOf(image);
//         }
//         el.removeEventListener('mouseenter', (el as any)._gsapHandler);
//       });
//     };
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <div className='grid grid-cols-5 gap-[1vw] max-md:gap-[2vw]'>
//         {images.map((img, i) => (
//           <div key={i} className='media'>
//             <img
//               src={img.src}
//               alt={img.alt}
//               className='pointer-events-none block size-32 rounded-2xl object-contain will-change-transform'
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////

'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin);

export default function Oops() {
  const letterVariants = {
    O: [
      '/images/O_03.png',
      '/images/0_10.png',
      '/images/0_11.png',
      '/images/O_05.png',
      '/images/O_08.png',
      '/images/O_26.png',
    ],
    P: [
      '/images/P_03.png',
      '/images/P_04.png',
      '/images/P_05.png',
      '/images/P_07.png',
      '/images/P_10.png',
      '/images/P_11.png',
      '/images/P_12.png',
      '/images/P_13.png',
      '/images/P_19.png',
      '/images/P_20.png',
      '/images/P_21.png',
    ],
    S: [
      '/images/S_02.png',
      '/images/S_04.png',
      '/images/S_15.png',
      '/images/S_17.png',
      '/images/S_26.png',
      '/images/S_29.png',
      '/images/S_33.png',
      '/images/S_36.png',
      '/images/S_46.png',
    ],
    '!': [
      '/images/Exclamation_Mark_01.png',
      '/images/Exclamation_Mark_02.png',
      '/images/Exclamation_Mark_03.png',
      '/images/Exclamation_Mark_04.png',
      '/images/Exclamation_Mark_05.png',
      '/images/Exclamation_Mark_06.png',
      '/images/Exclamation_Mark_07.png',
    ],
  };

   // Function to get random image for a letter
  const getRandomImage = (letter: keyof typeof letterVariants) => {
    const variants = letterVariants[letter]
    const randomIndex = Math.floor(Math.random() * variants.length)
    return variants[randomIndex]
  }

  // Generate images array with random variants but maintaining OOPS! sequence
  const generateImages = () => {
    const sequence = ["O", "O", "P", "S", "!"] as const
    return sequence.map((letter) => ({
      src: getRandomImage(letter),
      alt: letter === "!" ? "! character" : `${letter} letter`,
    }))
  }

  const [images] = useState(() => generateImages())

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let oldX = 0,
      oldY = 0,
      deltaX = 0,
      deltaY = 0;

    const root = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      deltaX = e.clientX - oldX;
      deltaY = e.clientY - oldY;
      oldX = e.clientX;
      oldY = e.clientY;
    };

    root.addEventListener('mousemove', handleMouseMove);

    const mediaElements = root.querySelectorAll('.media');

    mediaElements.forEach((el) => {
      const image = el.querySelector('img');
      if (!image) return;

      // Create independent floating animation timeline
      const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      floatTimeline.to(image, {
        x: `+=${(Math.random() - 0.5) * 20}`,
        y: `+=${(Math.random() - 0.5) * 20}`,
        duration: 3 + Math.random() * 2,
        ease: 'sine.inOut',
      });

      const handleMouseEnter = () => {
        // Hover effect — apply without killing the float animation
        const tl = gsap.timeline({ defaults: { overwrite: false } });

        tl.to(image, {
          inertia: {
            x: { velocity: deltaX * 30, end: 0 },
            y: { velocity: deltaY * 30, end: 0 },
          },
        });

        tl.fromTo(
          image,
          { rotate: 0 },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut',
          },
          '<'
        );
      };

      el.addEventListener('mouseenter', handleMouseEnter);

      // Store cleanup function
      (el as any)._gsapHandler = handleMouseEnter;
      (el as any)._floatTimeline = floatTimeline;
    });

    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      mediaElements.forEach((el) => {
        const image = el.querySelector('img');
        if (image) {
          const floatTl = (el as any)._floatTimeline;
          if (floatTl) floatTl.kill();
          gsap.killTweensOf(image);
        }
        el.removeEventListener('mouseenter', (el as any)._gsapHandler);
      });
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className='grid grid-cols-5 gap-[1vw] max-md:gap-[2vw]'>
        {images.map((img, i) => (
          <div key={i} className='media'>
            <img
              src={img.src}
              alt={img.alt}
              className='pointer-events-none block size-32 rounded-2xl object-contain will-change-transform'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
