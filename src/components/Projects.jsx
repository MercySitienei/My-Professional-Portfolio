
const Projects = () => {
  return (
    <div className="my-11 lg:mt-5 p-4 md:px-6 lg:px-[120px]">
      <div className="flex justify-between  my-11">
        <h2 className="font-semibold text-5xl">Projects</h2>
        <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'>CONTACT ME</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-7 gap-[60px]">
        <div>
          <div className="bg-countries_app bg-center bg-cover bg-no-repeat h-[300px]"></div>
          <h3 className="text-2xl md:text-xl font-semibold py-3">COUNTRIES WEB APP</h3>
          <div className="flex gap-5 text-lg pb-5 ">
            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>TAILWIND CSS</span>
            <span>HTML</span>
          </div>
          <div className="flex gap-11">
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://mercysitienei.github.io/countries-app/">VIEW PROJECT</a> </button>
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://github.com/MercySitienei/countries-app">VIEW CODE</a></button>
          </div>
        </div>
        <div>
          <div className="bg-audiophile bg-center bg-cover bg-no-repeat h-[300px]"></div>
          <h3 className="text-2xl md:text-xl font-semibold py-3">AUDIOPHILE E-COMMERCE WEBSITE</h3>
          <div className="flex gap-5 text-lg pb-5 ">
            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>TAILWIND CSS</span>
            <span>HTML</span>
          </div>
          <div className="flex gap-11">
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://mercysitienei.github.io/audiophile-ecommerce/">VIEW PROJECT</a> </button>
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://github.com/MercySitienei/audiophile-ecommerce">VIEW CODE</a></button>
          </div>
        </div>
        <div>
          <div className="bg-todo_project bg-center bg-cover bg-no-repeat h-[300px]"></div>
          <h3 className="text-2xl md:text-xl font-semibold py-3">TODO WEB APP</h3>
          <div className="flex gap-5 text-lg pb-5 ">
            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>TAILWIND CSS</span>
            <span>HTML</span>
          </div>
          <div className="flex gap-11">
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://mercysitienei.github.io/todoApp/">VIEW PROJECT</a> </button>
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://github.com/MercySitienei/todoApp">VIEW CODE</a></button>
          </div>
        </div>
        <div>
          <div className="bg-edusity bg-center bg-cover bg-no-repeat h-[300px]"></div>
          <h3 className="text-2xl md:text-xl font-semibold py-3">EDUSITY COLLEGE WEBSITE</h3>
          <div className="flex gap-5 text-lg pb-5 md:pb-11 ">
            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
          <div className="flex gap-11">
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://mercysitienei.github.io/Edusity/">VIEW PROJECT</a> </button>
            <button className='text-center font-medium tracking-widest text-lg pb-2 border-b-green border-b-2'><a href="https://github.com/MercySitienei/Edusity">VIEW CODE</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
