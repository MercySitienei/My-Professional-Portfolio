import { useEffect, useRef, useState } from 'react'
import Photo_of_Me from '/photo-of-me.png'


const Hero = () => {
  const [result, setResult] = useState('');
const [emailError, setEmailError] = useState('');
const [messageError, setMessageError] = useState('');
const [nameError, setNameError] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);
  formData.append("access_key", "165e99b0-1094-4476-8277-09b32ab6a231");

  const email = formData.get('email');
  const message = formData.get('message');
  const name = formData.get('name');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!email) {
    setEmailError('Email is required');
    document.getElementById('email').style.borderBottomColor = 'red'
    valid = false;
  } else if (!emailRegex.test(email)) {
    setEmailError("Sorry, invalid format here");
    document.getElementById('email').style.borderBottomColor = 'red'
    valid = false;
  } else {
    setEmailError('');
    document.getElementById('email').style.borderBottomColor = 'green'
  }

  if (!message) {
    setMessageError('Message is required');
    document.getElementById('message').style.borderBottomColor = 'red'
    valid = false;
  } else {
    setMessageError('');
    document.getElementById('message').style.borderBottomColor = 'green'

  }
  if (!name) {
    setNameError('Name is required');
    document.getElementById('name').style.borderBottomColor = 'red'
    valid = false;
  } else {
    setNameError('');
    document.getElementById('name').style.borderBottomColor = 'green'

  }

  if (!valid) {
    setResult('');
    return;
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });
  const data = await response.json();
  if (data.success) {
    setResult("Message Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};

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
          <button onClick={handleButtonClick} className='text-center font-medium tracking-widest lg:text-sm text-lg pb-2 border-b-green hover:text-green border-b-2 md:ml-4 lg:mt-6 m-8'>CONTACT ME</button>
          {isContactFormOpen && (
            <div  id='contact' className='fixed flex justify-center items-center w-full top-20 right-0 bg-opacity-50 z-50'>
              <div ref={contactRef} className="p-4 md:px-[100px] lg:px-[70px] w-[70vw] bg-light-black  ">
                  <div className="border-b-white border-b-2 md:border-b-0 pb-[100px] lg:pb-0 pt-11 lg:pt-0 lg:grid  lg:grid-cols-2">
                      <h3 className="text-4xl lg:text-5xl lg:pt-5 md:text-6xl font-bold text-center  lg:text-left">Contact</h3>
                      <p className="text-lg lg:text-md md:text-center lg:mt-[-100px] lg:row-start-2 lg:text-left py-5 lg:pr-[100px] lg:py-0">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                      </p>
                      <form onSubmit={handleSubmit} className="lg:row-span-2 grid">
                        <input className="focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" name="name" type="text" id="name" placeholder="NAME" />
                        {nameError && <span className='text-[red] text-right'>{nameError}</span>}
                        <input className="focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" type="email" name="email" id="email" placeholder="EMAIL" />
                        {emailError && <span className='text-[red] text-right'>{emailError}</span>}
                        <textarea rows={4} className="focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" placeholder="MESSAGE" name="message" id="message"></textarea>
                        {messageError && <span className='text-[red] text-right'>{messageError}</span>}
                        <div className="w-full flex justify-end">
                          <button formNoValidate className='text-center font-medium tracking-widest text-lg py-2 border-b-green hover:text-green border-b-2' type="submit">SEND MESSAGE</button>
                        </div>
                      </form>
                      <span className="text-green lg:col-span-2 lg:text-center">{result}</span>
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
