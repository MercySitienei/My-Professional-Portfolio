import { useRef } from "react"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  const contactRef = useRef(null);

  return (
      <div className="bg-black text-white">
        <Header/>
        <Hero contactRef={contactRef}/>
        <Skills/>
        <Projects contactRef={contactRef} />
        <Contact ref={contactRef} />
        <Footer/>
      </div>
  )
}

export default App
