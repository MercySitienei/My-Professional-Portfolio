import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center  p-6">Mercy Sitienei</h1>
      <div>
        <ul className="flex justify-center items-center gap-8 text-2xl pb-5">
            <li><a href="https://github.com/MercySitienei"><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/mercysitienei/"><FaLinkedin/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
