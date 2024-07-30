import { useEffect, useRef, useState } from 'react'
import Photo_of_Me from '/photo-of-me.png'
const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const contactRef = useRef(null)
  const handleButtonClick =()=>{
    setIsContactFormOpen(true)
  }
  useEffect(()=>{
    const handleClickOutside =(event)=>{
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactFormOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contactRef])
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
          {isContactFormOpen && (
            <div  id='contact' className='fixed flex justify-center items-center w-full top-20 right-0 bg-opacity-50 z-50'>
              <div ref={contactRef} className="p-4 md:px-[100px] lg:px-[70px] w-[70vw] bg-light-black  ">
                  <div className="border-b-white border-b-2 md:border-b-0 pb-[100px] lg:pb-0 pt-11 lg:pt-0 lg:grid  lg:grid-cols-2">
                      <h3 className="text-4xl lg:text-5xl lg:pt-5 md:text-6xl font-bold text-center  lg:text-left">Contact</h3>
                      <p className="text-lg lg:text-md md:text-center lg:mt-[-100px] lg:row-start-2 lg:text-left py-5 lg:pr-[100px] lg:py-0">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                      </p>
                      <form className="lg:row-span-2" action="">
                          <input className=" focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" name="name" type="text" placeholder="NAME" />
                          <input className=" focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" type="email" name="email" placeholder="EMAIL" />
                          <textarea rows={4} className=" focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" placeholder="MESSAGE" name="message" id="message"></textarea>
                          <div className="w-full flex justify-end">
                              <button className='text-center font-medium tracking-widest text-lg py-2 border-b-green border-b-2' type="submit">SEND MESSAGE</button>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
