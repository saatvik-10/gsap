const Footer = () => {
  return (
    <section className='footer-section'>
      <img
        src='/img/footer-dip.png'
        alt=''
        className='w-full object-cover -translate-y-1'
      />
      <div className='2xl:h-[110dvh] relative md:pt-[20vh] pt-10vh'>
        <div className='overflow-hidden z-10'>
          <h1 className='general-title text-center text-white py-5'>
            #FIGHTCLUB
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
