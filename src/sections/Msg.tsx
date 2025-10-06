import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const Msg = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create('.first-message', {
      type: 'words',
    });

    const secondMsgSplit = SplitText.create('.second-message', {
      type: 'words',
    });

    // const paragraphMsgSplit = SplitText.create('.message-content p', {
    //   type: 'words, lines',
    //   linesClass: 'paragraph-line',
    // });

    gsap.to(firstMsgSplit.words, {
      color: '#fff',
      ease: 'power1.in',
      stagger: 1,
      scrollTrigger: {
        trigger: '.message-content',
        start: 'top center',
        end: '30% center',
        scrub: true,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: '#fff',
      ease: 'power1.in',
      stagger: 1,
      scrollTrigger: {
        trigger: '.second-message',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    const revealTL = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: '.msg-text-scroll',
        start: 'top 60%',
      },
    });
    revealTL.to('.msg-text-scroll', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'circ.inOut',
    });

    const paragraphTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.message-content p',
        start: 'top 60%',
      },
    });
    paragraphTL.from('.message-content p', {
      yPercent: 300,
      rotate: -3,
      ease: 'power1.inOut',
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className='message-content'>
      <div className='container mx-auto flex-center py-28 relative'>
        <div className='w-full h-full'>
          <div className='msg-wrapper'>
            <h1 className='first-message'>You don&apos;t learn to fight by</h1>

            <div
              style={{
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
              }}
              className='msg-text-scroll md:translate-y-18 translate-y-0.5'
            >
              <div className='bg-white md:pb-5 pb-3 px-5'>
                <h2 className='text-red-900 '>WATCHING</h2>
              </div>
            </div>

            <h1 className='second-message'>You learn by bleeding</h1>
          </div>

          <div className='flex-center md:mt-20 mt-10'>
            <div className='max-w-md px-10 flex-center overflow-hidden'>
              <p>
                This isn&apos;t about winning or losing. It&apos;s about finding
                who you are when the gloves come off
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Msg;
