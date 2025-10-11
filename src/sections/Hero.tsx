import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      setTimeout(() => {
        video.muted = false;
      }, 500);
    }
  }, []);

  useGSAP(() => {
    const titleSplit = SplitText.create('.hero-title', { type: 'chars' });

    const tl = gsap.timeline({
      delay: 1.5,
    });

    tl.to('.hero-content', {
      opacity: 1,
      y: 0,
      ease: 'power1.inOut',
    })
      .to(
        '.hero-text-scroll',
        {
          duration: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'circ.out',
        },
        '-=0.3'
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: 'power2.out',
        },
        '-=0.3'
      );

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        start: '1% top',
        end: 'bottom top',
        scrub: true,
      },
    });
    heroTL.to('.hero-container', {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: 'power1.inOut',
    });
  });

  return (
    <section className='bg-main-bg'>
      <div className='hero-container'>
        {/* <img
          src='/img/industrial-scene.jpg'
          alt='hero-img'
          className='absolute bottom-0 left-1/2 -translate-1/2 object-auto scale-100 md:scale-150'
        /> */}
        <video
          src='/vid/rule.mp4'
          className='absolute bottom-0 top-14 object-auto scale-100 md:scale-200 w-full'
          autoPlay
          muted
          playsInline
        />
        <div className='hero-content opacity-0'>
          <div className='overflow-hidden'>
            <h1 className='hero-title'>FIGHT CLUB</h1>
          </div>

          <div
            style={{
              clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            }}
            className='hero-text-scroll'
          >
            <div className='hero-subtitle'>
              <h1>Never Talk About It!</h1>
            </div>
          </div>

          <h2>
            Under the lights, there&apos;s no past, no future—just you, your
            fists, and the truth.
          </h2>

          <div className='hero-button'>Lets's Fight!</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
