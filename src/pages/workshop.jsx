import { motion } from 'framer-motion'
import workshop from '../assets/blackwork-workshop.webp'
import tattooMachine from '../assets/tattoo-machine.png'
import gloves from '../assets/gloves.png'
import stencil from '../assets/stencil.png'
import aftercare from '../assets/aftercare.png'
import { useBreakpoint } from '../hooks/useBreakpoint'
import starFulfilled from '../assets/black-star-fulfilled.png'
import starOutlined from '../assets/black-star-outlined.png'
import FeatureCard from '../components/featureCards'

const cards = [
  {
    icon: gloves,
    title: 'BIOSEGURANÇA',
    text: 'Voltado para a capacitação de tatuadores em práticas essenciais de higiene, esterilização e prevenção de contaminações.',
    desktopPosition: 'col-start-1 row-start-1 justify-self-start',
  },
  {
    icon: tattooMachine,
    title: 'APLICAÇÃO',
    text: 'Focado no aperfeiçoamento das técnicas de execução, proporcionando mais precisão, consistência e qualidade em cada etapa do procedimento.',
    desktopPosition: 'col-start-1 row-start-2 justify-self-start',
  },
  {
    icon: stencil,
    title: 'DECALQUE',
    text: 'Aperfeiçoar a aplicação e o posicionamento dos desenhos no corpo, proporcionando mais harmonia, precisão e valorização da anatomia em cada projeto.',
    desktopPosition: 'col-start-3 row-start-1 justify-self-end',
  },
  {
    icon: aftercare,
    title: 'CUIDADOS',
    text: 'Orientações essenciais para a cicatrização e manutenção da tatuagem, garantindo uma recuperação adequada e preservando sua qualidade.',
    desktopPosition: 'col-start-3 row-start-2 justify-self-end',
  },
]

const Workshop = () => {
  const isMobile = !useBreakpoint().md;

  return (
    <section
      id="workshop"
      className="scroll-mt-18 md:scroll-mt-0 flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen min-h-screen md:h-screen snap-center snap-always overflow-hidden"
    >
      {isMobile ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-between items-center w-full p-4 text-black bg-primary"
          >
            <h1 className="font-audiowide tracking-wide text-3xl">
              WORKSHOP
            </h1>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <img
                src={starFulfilled}
                className="w-7 h-7"
                alt="Star"
              />

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
            </motion.div>
          </motion.div>

          <motion.legend
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl text-center font-audiowide font-bold brightness-50 invert text-primary"
          >
            WORKSHOP PRETO E CINZA
          </motion.legend>

          <div className="flex flex-col gap-8 p-8 pt-0 text-primary">

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full flex justify-center"
            >
              <img
                src={workshop}
                className="rounded-lg w-full max-h-[500px] object-cover [box-shadow:0px_13px_29px_7px_#000000]"
                alt="workshop"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <FeatureCard
                    {...card}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </>
      ) : (
        <div className="w-full h-9/12 lg:h-9/12 -mt-10 px-0 lg:px-8">
          <legend className="text-3xl text-center font-audiowide font-bold brightness-50 invert text-primary">
            WORKSHOP PRETO E CINZA
          </legend>

          <div className="grid grid-cols-[1fr_1.8fr_1fr] grid-rows-2 p-8 pt-0 gap-6 h-full text-primary">

            {cards.map((card) => (
              <FeatureCard
                key={card.title}
                {...card}
                className={`max-w-xxs ${card.desktopPosition}`}
              />
            ))}

            <div className="col-start-2 row-start-1 row-span-2 flex flex-col items-center justify-center gap-3">

              <motion.img
                src={workshop}
                alt="workshop"
                className="rounded-lg w-full h-full object-cover [box-shadow:0px_13px_29px_7px_#000000]"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  amount: 0.4,
                }}
                transition={{
                  duration: 3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Workshop