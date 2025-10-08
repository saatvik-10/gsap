import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const FightImp = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('.fight-title', {
      type: 'chars',
    });

    const paraSplit = SplitText.create('.fight-imp-section p', {
      type: 'words, lined',
      linesClass: 'paragraph-line',
    });

    const contentTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.fight-imp-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });

    contentTL
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: 'power2.out',
      })
      .from(paraSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: 'power1.inOut',
        duration: 1,
        stagger: 0.01,
      });

    const titleTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.fight-imp-section',
        start: 'top 30%',
        markers: true,
        toggleActions: 'play none none reverse',
      },
    });

    titleTL.to('.fight-imp-text-scroll', {
      duration: 1,
      opacity: 1,
      clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
      ease: 'power1.inOut',
    });
  });

  return (
    <section className='fight-imp-section'>
      <img src='/img/slider-dip.png' alt='' className='w-full object-cover' />

      <img src='/img/fc3.png' alt='' className='big-img' />

      <div className='flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0'>
        <div className='relative inline-block md:translate-y-20'>
          <div className='general-title relative flex flex-col justify-center items- gap-24'>
            <div className='overflow-hidden place-self-start'>
              <h1 className='text-white fight-title'>Violence fills the</h1>
            </div>

            <div
              style={{
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
              }}
              className='fight-imp-text-scroll place-self-start'
            >
              <div className='bg-white pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block'>
                <h2 className='text-red-900'>Silence</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='flex md:justify-center items-center translate-y-5'>
          <div className='md:max-w-lg max-w-md'>
            <p className='text-lg text-white md:text-right text-balance font-paragraph'>
              Every fight starts the same—with noise, anger, motion. But when it
              ends, all that remains is the silence everyone came here to
              escape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FightImp;
