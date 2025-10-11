import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Msg from './sections/Msg';
import FightSection from './sections/FightSection';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import FightImp from './sections/FightImp';
import Benefits from './sections/Benefits';
import Hype from './sections/Hype';
import Footer from './sections/Footer';
import AutoplayPrompt from './components/AutoplayPrompt';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [hasPermission, setHasPermission] = useState(false);

  useGSAP(() => {
    if (hasPermission) {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return <AutoplayPrompt onPermissionGranted={() => setHasPermission(true)} />;
  }

  return (
    <>
      <main>
        <Navbar />
        <div id='smooth-wrapper'>
          <div id='smooth-content'>
            <Hero />
            <Msg />
            <FightSection />
            <FightImp />

            <div>
              <Benefits />
              <Hype />
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
