import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-light-black  pb-9'>
      <div className='md:border-t-white md:border-t-2 md:mx-6 lg:mx-[120px]'>
        <div className="md:flex md:justify-between ">
          <h1 className="font-semibold text-3xl text-center lg:text-2xl p-6 lg:pl-0 md:px-0">Mercy Sitienei</h1>
          <div className="md:self-center md:pr-10 lg:pr-0 md:pl-4">
            <ul className="flex justify-center  items-center gap-8 text-2xl pb-5 md:pb-0">
                <li><a className="hover:text-green" href="https://github.com/MercySitienei"><FaGithub/></a></li>
                <li><a className="hover:text-green" href="https://www.linkedin.com/in/mercysitienei/"><FaLinkedin/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
