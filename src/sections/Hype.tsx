import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hype = () => {
  useGSAP(() => {
    gsap.set('.hype-section', {
      marginTop: '-140vh',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hype-section',
        start: 'top bottom',
        end: '200% top',
        scrub: true,
      },
    });

    tl.to('.hype-section .first-title', {
      xPercent: 90,
    })
      .to(
        '.hype-section .second-title',
        {
          xPercent: 25,
        },
        '<'
      )
      .to(
        '.hype-section .third-title',
        {
          xPercent: -70,
        },
        '<'
      );
  });

  return (
    <section className='hype-section'>
      <div className='absolute size-full flex flex-col items-center pt-[5vw]  text-white'>
        <h1 className='first-title'>RISE</h1>
        <h1 className='second-title'>ABOVE</h1>
        <h1 className='third-title'>OTHERS</h1>
      </div>
    </section>
  );
};

export default Hype;
