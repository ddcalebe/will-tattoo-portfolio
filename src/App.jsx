import background from './assets/background.webp'
import Intro from './pages/intro'
import Gallery from './pages/gallery'
import Workshop from './pages/workshop'
import Experiences from './pages/experiences'
import Testimonials from './pages/testimonials'
import About from './pages/about'
import Topbar from './components/topbar'
import Pagination from './components/pagination'
import { useState, useRef } from "react"
import { useHorizontalScroll } from './hooks/useHorizontalScroll'
import { useActiveSection } from './hooks/useActiveSection' 

function App() {
  const sections = [
  { title: "Intro" },
  { title: "Galeria" },
  { title: "Workshop" },
/*  { title: "Experiências" },
   { title: "Depoimentos" },
 */  { title: "Sobre" }
  ]
  
  const stageRef = useRef(null)
  const active = useActiveSection(stageRef)
  useHorizontalScroll(stageRef)
  const [galleryPage, setGalleryPage] = useState(0);
  
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <Topbar
        active={active}
        galleryPage={galleryPage}
        setGalleryPage={setGalleryPage}
      />

      <div className="hidden md:block">
        <Pagination containerRef={stageRef} active={active} sections={sections} />
      </div>

      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${background})`}}
      />

      <main
        ref={stageRef}
        id="stage"
        className="
          h-screen w-screen
          flex flex-col md:flex-row
          overflow-y-scroll md:overflow-x-scroll md:overflow-y-hidden
          scroll-smooth
          md:snap-x snap-mandatory
        "
      >
        <Intro />
        <Gallery
          galleryPage={galleryPage}
        />
        <Workshop />
{/*        <Experiences />
         <Testimonials />
 */}        <About />
      </main>
    </div>
  )
}


export default App
