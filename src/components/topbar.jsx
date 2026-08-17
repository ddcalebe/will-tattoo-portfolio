import { useState } from "react";
import { motion } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'
import star from '../assets/star-fulfilled.png'
import menu from '../assets/menu.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import Sidebar from './sidebar'
import AnimatedStars from './animatedStars'

const Topbar = ({ active, galleryPage, setGalleryPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { md } = useBreakpoint()
  const isMobile = !md

  const stars = {
    width: 48,
    height: 48,
  }

  return (
    isMobile ? (
      <header>
        <div className="flex justify-center items-center px-4 fixed top-0 z-40 w-full h-18 bg-black border-b-6 border-b-primary">
          <div className="flex gap-2">
            <h1 className="font-audiowide tracking-wide text-3xl text-primary">
              MENOR WILL
            </h1>
          </div>

          <div className="ml-auto">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Abrir menu"
              aria-expanded={sidebarOpen}
              className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-md bg-black hover:opacity-90 transition-opacity"
            >
              <img src={menu} />
            </button>
          </div>
        </div>

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </header>
    ) : (
      <header className="pointer-events-none grid grid-cols-2 justify-center items-center sm:justify-between px-4 md:px-8 fixed top-0 z-40 w-full h-auto pt-1 bg-transparent">

        {/* ESTRELAS */}
        <div className="hidden sm:flex gap-4">
          {[...Array(5)].map((_, i) => (
            <AnimatedStars
              key={i}
              src={star}
              size={stars}
              delay={i * 0.08}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-auto flex items-center justify-end gap-4 bg-transparent rounded-b-lg"
        >

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/558197568257?text=Will%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-4 h-14 px-4 bg-white hover:bg-gray-300 border border-black rounded-full"
          >
            <span className="text-black font-audiowide uppercase whitespace-nowrap text-lg">
              Agende uma sessão
            </span>

            <img
              src={whatsapp}
              alt="whatsapp"
              className="filter brightness-0 shrink-0 hover:cursor-pointer w-9 h-9"
            />
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/menorwill_tatuador"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-black hover:bg-gray-500 border-2 border-primary rounded-full w-14 h-14"
          >
            <img
              src={instagram}
              alt="instagram"
              className="filter brightness-50 invert w-1/2 h-1/2 hover:cursor-pointer"
            />
          </motion.a>

        </motion.div>
      </header>
    )
  )
}

export default Topbar