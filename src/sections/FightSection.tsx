import FightsSlider from '../components/FightsSlider';
import FightTitle from '../components/FightTitle';

const FightSection = () => {
  return (
    <section className='fight-section'>
      <div className='h-full flex lg:flex-row flex-col items-center relative'>
        <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 lg:mt-0'>
          <FightTitle />
        </div>

        <div className='h-full'>
            <FightsSlider />
        </div>
      </div>
    </section>
  );
};

export default FightSection;
