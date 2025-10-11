import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hype = () => {
  useGSAP(() => {
    gsap.set(".hype-section", {
      marginTop: "-140vh"
    })
  })

  return (
    <section className='hype-section'>
      <div className='absolute size-full flex flex-col items-center pt-[5vw] text-white'>
        <h1 className='first-title'>ENDURE</h1>
        <h1 className='second-title'>EVOLVE</h1>
        <h1 className='third-title'>RISE</h1>
      </div>
    </section>
  );
};

export default Hype;
