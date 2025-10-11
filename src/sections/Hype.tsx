import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hype = () => {
  useGSAP(() => {
    gsap.set('.hype-section', {
      marginTop: '-140vh',
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hype-section',
      start: '80% bottom',
      end: '200% top',
      scrub: true,
    },
  });

  tl.to('.hype-section .first-title', {
    xPercent: 70,
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
        xPercent: -50,
      },
      '<'
    );

  return (
    <section className='hype-section'>
      <div className='absolute size-full flex flex-col items-center pt-[5vw]  text-white'>
        <h1 className='first-title'>ENDURE</h1>
        <h1 className='second-title'>EVOLVE</h1>
        <h1 className='third-title'>RISE</h1>
      </div>
    </section>
  );
};

export default Hype;
