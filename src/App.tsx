import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Msg from './sections/Msg';
import FightSection from './sections/FightSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Msg />
        <FightSection />
        <div className="h-dvh" ></div>
      </main>
    </>
  );
}

export default App;
