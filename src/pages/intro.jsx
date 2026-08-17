  import profilepic from '../assets/profilepic.JPG'
  import profilepic2 from '../assets/will-profile-background.jpg'
  import wppBGimage from '../assets/whatsapp.png'
  import star from '../assets/star-fulfilled.png'
  import { useBreakpoint } from '../hooks/useBreakpoint'
  import { motion } from 'framer-motion'

  const Intro = () => {
    const isMobile = !useBreakpoint().md;

    return (
      <section id="intro" className='relative flex items-center justify-center flex-shrink-0 w-full md:w-screen h-auto md:h-screen snap-center snap-always overflow-hidden'>

{isMobile && (
  <div className="relative w-full bg-black">
    <div className="relative w-full h-[40rem] overflow-hidden">

      {/* FOTO DE FUNDO */}
      <img
        src={profilepic}
        alt="Will"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          opacity-70
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* GRADIENTE */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/80
          via-transparent
          to-black
        "
      />

    </div>

    <div className="absolute top-[50%] text-white w-full px-3 flex flex-col gap-5 items-center">

      <motion.div
        className="flex justify-center gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.img
            key={i}
            src={star}
            alt="star"
            className="w-10"
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
                scale: 0.7,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="w-full mb-7"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: "easeOut",
        }}
      >

        <motion.h1
          className="
            font-audiowide
            uppercase
            text-center
            leading-[0.78]
            tracking-[-0.06em]
            text-[clamp(4rem,18vw,7rem)]
            text-white
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
          "
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          MENOR
        </motion.h1>

        <motion.h1
          className="
            font-audiowide
            uppercase
            text-center
            leading-[0.78]
            tracking-[-0.06em]
            text-[clamp(4.5rem,20vw,7.5rem)]
            text-primary
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
          "
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          WILL
        </motion.h1>

      </motion.div>

      <motion.div
        className="flex flex-col gap-5 w-full"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
          delay: 0.65,
          ease: "easeOut",
        }}
      >

        <motion.a
          href="https://wa.me/558197568257?text=Will%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            justify-center
            h-[58px]
            w-full
            rounded-full
            overflow-hidden
            bg-primary
            border
            border-primary
            shadow-[0_0_25px_rgba(37,211,102,0.25)]
            active:scale-[0.98]
            transition-transform
          "
          whileTap={{
            scale: 0.98,
          }}
        >
          <span
            className="
              text-black
              font-audiowide
              text-[clamp(1rem,5vw,1.5rem)]
              tracking-wide
            "
          >
            FALE COMIGO
          </span>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/menorwill_tatuador"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            justify-center
            h-[58px]
            w-full
            rounded-full
            border
            border-white/40
            bg-black/50
            backdrop-blur-md
            active:scale-[0.98]
            transition-transform
          "
          whileTap={{
            scale: 0.98,
          }}
        >
          <span
            className="
              text-white
              font-audiowide
              text-[clamp(1rem,5vw,1.5rem)]
              tracking-wide
            "
          >
            VER TRABALHOS
          </span>
        </motion.a>

      </motion.div>
    </div>

    <div className="w-full h-[20rem] bg-transparent" />
  </div>
)}

        <div className="absolute hidden md:block inset-0 md:w-1/2 h-full md:[clip-path:ellipse(90%_100%_at_0%_50%)]">
          <img
            src={profilepic2}
            alt="Will"
            className='hidden md:block w-full h-full object-cover [mask-image:radial-gradient(ellipse_99%_100%_at_0%_50%,black_88%,transparent_90%)]'
          /> 
          <div className="hidden md:block absolute inset-0 bg-black/15 [mask-image:radial-gradient(ellipse_99%_100%_at_0%_50%,black_89%,transparent_90%)]" />
        </div>

        <div className="relative hidden md:flex w-full h-full max-h-10/12 my-10 flex-col items-center gap-6">
          <span className='hidden md:block absolute top-25 right-0 font-audiowide md:text-sm lg:text-md text-white p-8'>ROLE A TELA ↑↓ OU USE AS TECLAS ←→</span>
          
          <div className='absolute bottom-0 right-0 hidden md:flex flex-col gap-4 font-audiowide uppercase md:text-5xl lg:text-7xl text-right text-white p-8'>
            <motion.a
              href="#gallery"
              className="group flex items-center justify-end gap-2 w-fit self-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className='text-[#aaa] group-hover:text-white [-webkit-text-stroke:2px_#fff] transition-colors'>
                GALERIA
              </span>
            </motion.a>

    {/*         <motion.a
              href="#experiences"
              className='group flex items-center justify-end gap-2 w-fit self-end'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className='text-[#aaa] group-hover:text-white [-webkit-text-stroke:2px_#fff] transition-colors'>
                EXPERIÊNCIAS
              </span>
            </motion.a> */}

            <motion.a
              href="#workshop"
              className='group flex items-center justify-end gap-2 w-fit self-end'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className='text-[#aaa] group-hover:text-white [-webkit-text-stroke:2px_#fff] transition-colors'>
                WORKSHOP
              </span>
            </motion.a>

            {/* <motion.a
              href="#testimonials"
              className='group flex items-center justify-end gap-2 w-fit self-end'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className='text-[#aaa] group-hover:text-white [-webkit-text-stroke:2px_#fff] transition-colors'>
                DEPOIMENTOS
              </span>
            </motion.a> */}

            <motion.a
              href="#about"
              className='group flex items-center justify-end gap-2 w-fit self-end'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className='text-[#aaa] group-hover:text-white [-webkit-text-stroke:2px_#fff] transition-colors'>
                SOBRE
              </span>
            </motion.a>
          </div>
          
        </div>
      </section>
    )
  }

  export default Intro