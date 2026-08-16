import pin from '../assets/pin.png'
import studio from '../assets/studio.webp'
import arrow from '../assets/arrow-dropdown.png'
import wppBGimage from '../assets/whatsapp.png'
import instagramBGimage from '../assets/instagram.png'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { motion } from "framer-motion";
import DropdownButton from '../components/dropdown-button';
import { useState } from 'react';
import MapModal from '../components/map-modal';
import aboutBackground from '../assets/mobile-about-background.png'
import backgroundFooter from '../assets/background-footer.png'
import starFulfilled from '../assets/black-star-fulfilled.png'
import starOutlined from '../assets/black-star-outlined.png'

const About = () => {
  
  const isMobile = !useBreakpoint().md;
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id='about' className='scroll-mt-18 md:scroll-mt-0 flex flex-col items-center justify-center flex-shrink-0 md:gap-10 w-full md:w-screen min-h-screen md:h-screen snap-center snap-always overflow-hidden'>

    {isMobile && (
      <div className="flex justify-between items-center w-full p-4 border-b-4 text-black bg-primary">
        <h1 className="font-audiowide tracking-wide text-3xl">
          SOBRE
        </h1>

        <div className="flex items-center gap-2">
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
            src={starFulfilled}
            className="w-7 h-7"
            alt="Star"
          />
        </div>
      </div>
    )}
      {
        isMobile ? (
          <div className='flex flex-col justify-center w-full h-full bg-primary'>
            <div className="flex flex-col p-6 gap-10 overflow-hidden w-full h-auto">
              <div className="flex flex-col">

                <h3 className="text-black text-4xl text-end font-audiowide tracking-widest">QUEM É MENOR?</h3>
                <div className="text-justify mt-3"> 
                    <span className='text-lg text-black'>
                      Sou especialista em tatuagens de realismo preto e cinza, criando peças exclusivas que unem técnica, precisão e expressão artística em cada detalhe. Cada projeto é desenvolvido de forma totalmente personalizada, respeitando a anatomia do corpo para alcançar equilíbrio, profundidade e uma composição que valoriza a obra como um todo.

                      Mais do que reproduzir imagens, transformo histórias, memórias e sentimentos em tatuagens únicas, com alto nível de fidelidade aos traços e um acabamento refinado. Meu compromisso é entregar uma arte atemporal, marcante e executada com excelência, proporcionando um resultado que impressiona não apenas pela riqueza de detalhes, mas também pela sua identidade e presença.

                    </span>
                </div>

              </div>

              <div>
                <div className="grid grid-rows-2 w-full h-full rounded-tl-3xl rounded-3xl bg-black border border-primary overflow-hidden">
                  <img 
                    src={studio} 
                    alt="studio" 
                    className="w-full h-full object-cover opacity-90"
                  />

                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8284881028794!2d-34.946386499999996!3d-8.1189389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e76bdd84115%3A0x47bce86e42798adb!2sAv.%20Pernambuco%2C%20410%20-%20COHAB%2C%20Recife%20-%20PE%2C%2051280-000!5e0!3m2!1spt-BR!2sbr!4v1782011686996!5m2!1spt-BR!2sbr"
                      className="w-full h-full"
                      loading="lazy"
                      allowFullScreen
                  />
                </div>
              </div>
              <h1 className="text-center font-audiowide font-bold uppercase text-3xl">
                Transforme sua pele em arte!
              </h1>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full p-4 rounded-full border-2 border-primary/60 bg-black shadow-[inset_0_-3px_2px_0_#25D366]"
              >
                <div
                  className="absolute inset-0 bg-repeat bg-center bg-[length:30px_30px] opacity-15"
                  style={{ backgroundImage: `url(${wppBGimage})` }}
                />

                <span className="relative z-10 block text-center text-3xl font-audiowide text-primary">
                  FALE COMIGO
                </span>
              </a>
              <a
                href="https://www.instagram.com/menorwill_tatuador"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full p-4 rounded-full border-2 border-primary/60 bg-black shadow-[inset_0_-3px_2px_0_#ffc400]"
              >
                <div
                  className="absolute inset-0 bg-repeat bg-center bg-[length:30px_30px] opacity-15"
                  style={{ backgroundImage: `url(${instagramBGimage})` }}
                />

                <span className="relative z-10 block text-center text-3xl font-audiowide text-primary">
                  MAIS PROJETOS
                </span>
              </a>

            </div>
            <div className="">
              <div className="flex flex-col items-center xs:flex-row justify-between px-4">
                <span>
                  Todos os direitos reservados - 2026
                </span>
                <a
                href="github.com/ddcalebe"
                target="_blank">
                Powered by ddcalebe
                </a>
              </div>
              <img src={backgroundFooter} alt="backgroundFooter" className='w-full h-auto' />

            </div>

          </div>
        ) :
        (
          <div className="flex flex-col justify-center gap-10 xl:gap-0 xl:justify-evenly w-full h-10/12 xl:h-9/12 lg:-mt-10">
          
            <div className="grid md:grid-cols-2 items-stretch h-10/12 md:h-8/12 xl:h-9/12 px-8 gap-6">
              <div className="flex flex-col gap-2 h-full">
                <DropdownButton index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="QUEM É MENOR?">
                  <div className="text-justify">
                    <span className='text-sm text-white'>
                      O Menor Will é especialista em tatuagens de realismo preto e cinza, oferecendo trabalhos exclusivos com alto nível de detalhamento. Cada projeto é planejado de forma personalizada, respeitando a estrutura corporal e garantindo equilíbrio, profundidade e acabamento impecável.
                    </span>
                  </div>
                </DropdownButton>

                <DropdownButton index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="POR QUE REALISMO?">
                  <div className="text-justify">
                    <span className='text-sm text-white'>
                      É a escolha ideal para quem busca uma arte rica em detalhes, profundidade e impacto visual, capaz de transformar referências, memórias e sentimentos em obras únicas. Especializado em realismo preto e cinza, Menor Will desenvolve projetos personalizados com alto nível de técnica e acabamento, destacando a precisão e a fidelidade aos traços.
                    </span>
                  </div>
                </DropdownButton>

                <DropdownButton index={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title="COMO AGENDAR?">
                  <div className="text-justify">
                    <span className='text-sm text-white'>
                      Os agendamentos são confirmados mediante o pagamento de 50% do valor do procedimento, garantindo a reserva do horário escolhido. O atendimento é realizado por horário marcado, proporcionando pontualidade e uma experiência personalizada. As reservas podem ser feitas via WhatsApp ou pelo link de agendamento.
                    </span>
                  </div>
                </DropdownButton>
              </div>

              <div className="">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid grid-cols-2 w-full h-full rounded-tl-3xl rounded-3xl bg-black border border-primary/60 overflow-hidden"
                >
                  <img 
                    src={studio} 
                    alt="studio" 
                    className="w-full h-full object-cover opacity-90"
                  />

                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8284881028794!2d-34.946386499999996!3d-8.1189389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e76bdd84115%3A0x47bce86e42798adb!2sAv.%20Pernambuco%2C%20410%20-%20COHAB%2C%20Recife%20-%20PE%2C%2051280-000!5e0!3m2!1spt-BR!2sbr!4v1782011686996!5m2!1spt-BR!2sbr"
                      className="w-full h-full rounded-tr-md rounded-br-md"
                      loading="lazy"
                      allowFullScreen
                  />
                </motion.div>
              </div>
                            
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex justify-self-center place-self-center overflow-hidden md:w-5/6 lg:w-4/6 rounded-full"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-0 w-[100%] h-full 
                  bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  blur-sm shine rounded-full"
                />
              </div>

              <button className="w-full text-primary font-audiowide font-bold uppercase md:text-2xl lg:text-3xl rounded-full bg-black hover:bg-[#111] p-6 cursor-pointer inset-shadow-sm inset-shadow-primary">
                Transforme sua pele em arte!
              </button>
            </motion.div>
          </div>
        )
      }


    </section>
  )
}

export default About