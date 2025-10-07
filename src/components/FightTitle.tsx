import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const FightTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create('.first-text-split', {
      type: 'chars',
    });

    const secondTextSplit = SplitText.create('.second-text-split', {
      type: 'chars',
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.fight-section',
        start: 'top 30%',
      },
    });

    gsap.to('.fight-text-scroll', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '.fight-section',
        start: 'top 10%',
        markers: true,
        toggleActions: 'play none none reverse',
      },
    });
  });

  return (
    <div className='general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16'>
      <div className='overflow-hidden 2xl:py-0 py-3 first-text-split text-red-900'>
        Pain is
      </div>

      <div
        style={{
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        }}
        className='fight-text-scroll'
      >
        <div className='bg-red-900 pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3'>
          <h2 className='text-white'>Temporary</h2>
        </div>
      </div>

      <div className='overflow-hidden 2xl:py-0 py-3 second-text-split text-red-900'>
        <h1>The fire it leaves isn&apos;t.</h1>
      </div>
    </div>
  );
};

export default FightTitle;
