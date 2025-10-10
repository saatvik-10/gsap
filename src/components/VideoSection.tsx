import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const VideoSection = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px',
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.vd-pin-section',
          start: '-15% top',
          end: '200% top',
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to('.video-box', {
        ease: 'power1.inOut',
        clipPath: 'circle(100% at 50% 50%)',
      });
    }
  });

  return (
    <section className='vd-pin-section'>
      <div
        style={{
          clipPath: isMobile
            ? 'circle(100% at 50% 50%)'
            : 'circle(7% at 50% 50%)',
        }}
        className='size-full video-box'
      >
        <video src='/vid/benefits.mp4' loop muted autoPlay playsInline />

        <div className='abs-center md:scale-100 scale-200'>
          <div className=' relative flex items-center justify-center spin-circle'>
            {Array.from({ length: 9 }, (_, i) => (
              <span
                key={i}
                className='absolute text-white font-bold text-md tracking-wider font-paragraph'
                style={{
                  transform: `rotate(${i * 40}deg) translateY(-103px)`,
                  transformOrigin: 'center center',
                }}
              >
                FIGHT
              </span>
            ))}
          </div>
          <div className='play-btn'>
            <img src='/img/play.svg' alt='' className='size-[3vw] ml-[0.5vw]' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
