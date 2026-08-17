import Masonry from 'react-masonry-css'
import GLightbox from 'glightbox'
import "glightbox/dist/css/glightbox.min.css"
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'
import starFulfilled from '../assets/black-star-fulfilled.png'
import starOutlined from '../assets/black-star-outlined.png'
import tattoo1 from "../assets/tattoo-videos/joker-harleyquinn.mp4"
import tattoo2 from "../assets/tattoo-videos/angel.mp4"
import tattoo3 from "../assets/tattoo-videos/lettering.mp4"
import tattoo4 from "../assets/tattoo-videos/heavens-door.mp4"
import tattoo5 from "../assets/tattoo-videos/Jesus-angel.mp4"
import tattoo6 from "../assets/tattoo-videos/gladiator.mp4"
import tattoo7 from "../assets/tattoo-videos/rockman.mp4"
import tattoo8 from "../assets/tattoo-videos/oriental.mp4"
import tattoo9 from "../assets/tattoo-videos/dragon.mp4"
import tattoo10 from "../assets/tattoo-videos/woman.mp4"

const Gallery = ({ galleryPage }) => {
  const videos = [
    tattoo1,
    tattoo2,
    tattoo3,
    tattoo4,
    tattoo5,
    tattoo6,
    tattoo7,
    tattoo8,
    tattoo9,
    tattoo10
  ]

  const [active, setActive] = useState(0)
  const refs = useRef([])

  const isMobile = !useBreakpoint().md

  useEffect(() => {
    if (!refs.current[active]) return

    refs.current.forEach((video, i) => {
      if (!video) return

      if (i === active) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [active])

  const handleEnded = () => {
    setActive((prev) => (prev + 1) % videos.length)
  }

  const visible = Array.from({ length: 5 }, (_, i) =>
    (active + i - 2 + videos.length) % videos.length
  )

  return (
    <section
      id="gallery"
      className="
        scroll-mt-18 md:scroll-mt-0
        flex flex-col items-center
        md:justify-center
        flex-shrink-0
        w-screen
        md:h-screen
        snap-center
        snap-always
        overflow-hidden
        md:pb-10
      "
    >

      {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-between items-center w-full p-4 text-black bg-primary"
        >
          <h1 className="font-audiowide tracking-wide text-3xl">
            GALERIA
          </h1>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={starFulfilled}
              className="w-7 h-7"
              alt="Star"
            />

            <img
              src={starOutlined}
              className="w-7 h-7"
              alt="Star"
            />

            <img
              src={starOutlined}
              className="w-7 h-7"
              alt="Star"
            />
          </motion.div>
        </motion.div>
      )}

      <div
        className="
          grid w-11/12 h-auto
          md:h-10/12
          md:overflow-hidden
          overflow-y-auto
          md:scrollbar
          md:scrollbar-thumb-primary
          md:scrollbar-thumb-rounded-full
          md:scrollbar-track-transparent
          rounded-lg
          p-2
        "
      >

        <div className="flex justify-center items-center gap-6 h-full overflow-hidden">

          {visible.map((index, position) => {

            const isCenter = position === 2
            const distance = Math.abs(position - 2)

            return (
              <motion.div
                key={index}
                layout

                initial={
                  isMobile
                    ? false
                    : {
                        opacity: 0,
                        x: 120,
                      }
                }

                whileInView={
                  isMobile
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }

                viewport={
                  isMobile
                    ? undefined
                    : {
                        once: false,
                        amount: 0.2,
                      }
                }

                transition={
                  isMobile
                    ? undefined
                    : {
                        duration: 1,
                        delay: position * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                        layout: {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }

                onClick={() => setActive(index)}

                className={`
                  relative
                  overflow-hidden
                  rounded-md
                  cursor-pointer
                  aspect-[305/600]
                  flex-shrink-0
                  my-14
                  md:my-0
                  ${
                    isCenter
                      ? "w-[clamp(200px,22vw,280px)] z-20 shadow-2xl"
                      : distance === 1
                      ? "w-[clamp(140px,19vw,240px)] z-10"
                      : "w-[clamp(100px,15vw,200px)] z-0"
                  }
                `}
              >

                <video
                  ref={(el) => {
                    refs.current[index] = el
                  }}
                  muted
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  onEnded={isCenter ? handleEnded : undefined}
                  className="w-full h-full object-cover"
                >
                  <source
                    src={videos[index]}
                    type="video/mp4"
                  />
                </video>

                {!isCenter && (
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: distance === 1 ? 0.4 : 0.7
                    }}
                    transition={{
                      duration: 0.7
                    }}
                    className="absolute inset-0 bg-black pointer-events-none"
                  />
                )}

                {isCenter && (
                  <motion.div
                    initial={isMobile ? false : { opacity: 0 }}
                    animate={isMobile ? undefined : { opacity: 1 }}
                    transition={isMobile ? undefined : { duration: 0.5 }}
                    className="absolute inset-0 pointer-events-none"
                  />
                )}

              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Gallery