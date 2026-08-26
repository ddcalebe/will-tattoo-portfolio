import doubleArrow from "../assets/double-arrow.png"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const OverlayIntro = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          exit={{
            opacity: 0,
            scale: 1.02
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
        >

          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          {/* OVERLAY CINZA */}
          <div className="absolute inset-0 bg-[#575757]/90">

            {/* CONTEÚDO */}
            <div className="relative flex h-full w-full flex-col items-center justify-center text-center text-white">

              {/* ICON */}
              <motion.div
                className="mb-4"
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(8px)"
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <img src={doubleArrow} alt="Double Arrow" className="w-16 h-16 mx-auto" />
              </motion.div>

              {/* TEXTO */}
              <motion.div
                className="w-full px-6"
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(8px)"
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
                }}
                transition={{
                  duration: 3,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >

                <p className="text-sm font-audiowide uppercase tracking-[0.3em] opacity-80">
                  Esse site é uma experiência horizontal
                </p>

                <h1 className="mt-4 text-4xl font-audiowide font-semibold uppercase leading-tight">
                  ENTRE E CONHEÇA A ARTE DO MENOR WILL
                </h1>

              </motion.div>

              {/* BOTÃO */}
              <motion.button
                onClick={() => setIsVisible(false)}
                className="
                  mt-12
                  border border-white/70
                  px-10 py-4
                  text-sm font-audiowide font-medium
                  uppercase tracking-[0.25em]
                  transition-colors duration-300
                  hover:bg-white
                  hover:text-[#575757]
                "
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(8px)"
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                NAVEGAR
              </motion.button>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OverlayIntro