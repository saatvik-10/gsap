import { useGSAP } from '@gsap/react';
import { fights } from '../data/data';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const FightsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  useGSAP(() => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.fight-section',
          start: '2& top',
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to('.fight-section', {
        x: `-=${scrollAmount + 1500}px`,
        ease: 'power1.inOut',
      });
    }
    const titleTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.fight-section',
        start: 'top top',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    titleTL
      .to('.first-text-split', {
        xPercent: -30,
        ease: 'power1.inOut',
      })
      .to(
        '.fight-text-scroll',
        {
          xPercent: -22,
          ease: 'power1.inOut',
        },
        '<'
      )
      .to(
        '.second-text-split',
        {
          xPercent: -10,
          ease: 'power1.inOut',
        },
        '<'
      );
  });

  return (
    <div ref={sliderRef} className='slider-wrapper'>
      <div className='fights'>
        {fights.map((fight, idx) => (
          <div
            key={idx}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${fight.rotation}`}
          >
            <img
              src={fight.img}
              alt='Fight Club'
              className='absolute bottom-0 w-full h-full object-cover'
            />

            <h1 className='font-bold'>{fight.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FightsSlider;
