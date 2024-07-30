import Photo_of_Me from '/photo-of-me.png'
const Hero = ({contactRef}) => {

  const handleButtonClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
};
  return (
    <div className='md:flex flex-row-reverse lg:px-[120px]' >
      <div className='flex justify-center md:relative lg:w-[300px] lg:h-[300px]'>
        <img className='bg-black w-[50vw] md:w-[65vw]  '  src={Photo_of_Me} alt="photo of me" />
      </div>
      <div className='md:pl-2 lg:w-[70%]'>
        <h2 className='text-3xl  mt-5 font-bold md:text-5xl lg:text-4xl lg:w-[500px] md:text-left p-4 text-center'>Nice to meet you! I’m <span className='border-b-green border-b-4'>Mercy Sitienei</span>.</h2>
        <p className='px-4 md:pt-8 lg:pt-2 lg:text-sm lg:w-[400px] text-center md:text-left text-lg'>I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <div className='flex justify-center md:justify-start'>
            <button onClick={handleButtonClick} className='text-center font-medium tracking-widest lg:text-sm text-lg pb-2 border-b-green border-b-2 md:ml-4 lg:mt-6 m-8'>CONTACT ME</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
