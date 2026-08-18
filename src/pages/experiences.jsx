import workshop from '../assets/blackwork-workshop.webp'
import tattooMachine from '../assets/tattoo-machine.png'
import gloves from '../assets/gloves.png'
import certificate from '../assets/certificate.webp'

const Experiences = () => {
  return (
    <section id='experiences' className='scroll-mt-18 md:scroll-mt-0 flex flex-col items-center justify-center flex-shrink-0 gap-10 w-full md:w-screen min-h-screen md:h-screen snap-center snap-always overflow-hidden'>
        <div className="w-full h-10/12 xl:h-9/12 lg:-mt-10">
            <div className="flex items-center justify-center gap-10 h-full px-8">
                <img
                    src={certificate}
                    className="w-80 lg:w-100 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]"
                    alt="certificate"
                />

                <img
                    src={certificate}
                    className="w-80 lg:w-100 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]"
                    alt="certificate"
                />
                <img
                    src={certificate}
                    className="w-80 lg:w-100 rounded-sm [box-shadow:0px_13px_29px_7px_#000000]"
                    alt="certificate"
                />
            </div>
        </div>
    </section>
  )
}

export default Experiences
