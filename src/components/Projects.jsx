import { useEffect, useRef, useState } from 'react'
const Projects = () => {

  const projects = [
    {
      id: 1,
      bgClass: 'bg-countries_app',
      title: 'COUNTRIES WEB APP',
      tech: ['REACT', 'JAVASCRIPT', 'TAILWIND CSS', 'HTML'],
      viewProject: 'https://mercysitienei.github.io/countries-app/',
      codeLink: 'https://github.com/MercySitienei/countries-app'
    },
    {
      id: 2,
      bgClass: 'bg-audiophile',
      title: 'AUDIOPHILE E-COMMERCE WEBSITE',
      tech: ['REACT', 'JAVASCRIPT', 'TAILWIND CSS', 'HTML'],
      viewProject: 'https://mercysitienei.github.io/audiophile-ecommerce/',
      codeLink: 'https://github.com/MercySitienei/audiophile-ecommerce'
    },
    {
      id: 3,
      bgClass: 'bg-todo_project',
      title: 'TODO WEB APP',
      tech: ['REACT', 'JAVASCRIPT', 'TAILWIND CSS', 'HTML'],
      viewProject: 'https://mercysitienei.github.io/todoApp/',
      codeLink: 'https://github.com/MercySitienei/todoAPP'
    },
    {
      id: 4,
      bgClass: 'bg-edusity',
      title: 'EDUSITY COLLEGE WEBSITE',
      tech: ['REACT', 'JAVASCRIPT', 'CSS', 'HTML'],
      viewProject: 'https://mercysitienei.github.io/Edusity/',
      codeLink: 'https://github.com/MercySitienei/Edusity'
    },
  ];


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
    <div className="my-11 lg:mt-5 p-4 md:px-6 lg:px-[120px]">
      <div className="flex justify-between  my-11">
        <h2 className="font-semibold text-5xl">Projects</h2>
        <button onClick={handleButtonClick} className='text-center font-medium tracking-widest text-lg pb-2 hover:text-green border-b-green border-b-2'>CONTACT ME</button>
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
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-7 gap-[60px]">
        {projects.map(project => (
          <div className='lg:relative  lg:group' key={project.id}>
            <div className={`${project.bgClass} bg-center transition-transform duration-300 lg:group-hover:scale-110 bg-cover bg-no-repeat h-[300px]`}></div>
            <h3 className="text-2xl md:text-xl font-semibold py-3">{project.title}</h3>
            <div className="flex gap-5 text-lg pb-5 ">
              {project.tech.map(tech => <span key={tech}>{tech}</span> )}
            </div>
            <div className="flex lg:top-0 lg:right-0 lg:left-0 lg:bottom-[98px] lg:justify-center lg:flex-col lg:gap-8 lg:items-center lg:opacity-0 lg:absolute lg:hover:bg-light-black lg:hover:bg-opacity-70 lg:hover:opacity-100 lg:transition-opacity duration-300 gap-11">
              <button className='text-center font-medium lg:hover:text-opacity-100 lg:hover:z-50 tracking-widest text-lg pb-2 border-b-green border-b-2 hover:text-green'><a target='blank' href={project.viewProject}>VIEW PROJECT</a> </button>
              <button className='text-center font-medium lg:hover:text-opacity-100 lg:hover:z-50 tracking-widest text-lg pb-2 border-b-green border-b-2 hover:text-green'><a target='blank' href={project.codeLink}>VIEW CODE</a></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
