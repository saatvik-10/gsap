import { useGSAP } from '@gsap/react';
import ClipPathTitle from '../components/ClipPathTitle';
import { benefits } from '../data/data';
import gsap from 'gsap';
import VideoSection from '../components/VideoSection';

const Benefits = () => {
  useGSAP(() => {
    const revealTL = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: '.benefit-section',
        start: 'top 60%',
        end: 'top top',
        scrub: 1.5,
      },
    });

    revealTL
      .to('.benefit-section .first-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'circ.out',
      })
      .to('.benefit-section .second-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'circ.out',
      })
      .to('.benefit-section .third-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'circ.out',
      })
      .to('.benefit-section .fourth-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'circ.out',
      });
  });

  return (
    <section className='benefit-section'>
      <div className='conatiner mx-auto pt-20'>
        <div className='col-center'>
          <p className='font-paragraph'>
            Every fight sharpens focus, tests limits, and <br />
            reveals strength hidden beneath the noise of life.
          </p>

          <div className='mt-20 col-center'>
            {benefits.map((benefit, idx) => (
              <ClipPathTitle
                key={idx}
                title={benefit.title}
                color={benefit.color}
                bg={benefit.bg}
                className={benefit.className}
                borderColor={benefit.borderColor}
              />
            ))}
          </div>

          <div className='md:mt-0 mt-10'>
            <p>Achieve More...</p>
          </div>
        </div>

        <div className="relative overlay-box">
            <VideoSection />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
