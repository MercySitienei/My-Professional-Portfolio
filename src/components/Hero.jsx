import Photo_of_Me from '../../public/photo-of-me.png'
const Hero = () => {
  return (
    <div >
      <div className='flex justify-center'>
        <img className='bg-black w-[50vw]'  src={Photo_of_Me} alt="photo of me" />
      </div>
      <h2 className='text-3xl mt-5 font-bold p-4 text-center'>Nice to meet you! I’m <span className='border-b-green border-b-4'>Mercy Sitienei</span>.</h2>
      <p className='px-4 text-center text-lg'>I’m a front-end developer passionate about building accessible web apps that users love.</p>
      <div className='flex justify-center'>
        <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2 m-8'>CONTACT ME</button>
      </div>
    </div>
  )
}

export default Hero
