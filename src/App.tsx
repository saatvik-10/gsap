import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Msg from './sections/Msg';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Msg />
        <div className="h-dvh" ></div>
      </main>
    </>
  );
}

export default App;
