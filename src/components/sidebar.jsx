import React from 'react'
import close from '../assets/close.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import { motion } from 'framer-motion'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const sections = [
    { title: "Intro", href: "#intro" },
    { title: "Galeria", href: "#gallery" },
    { title: "Workshop", href: "#workshop" },
    /*  { title: "Experiências" },
    { title: "Depoimentos" },
    */  { title: "Sobre", href: "#about" }
    ]

    return (
    <>
        {sidebarOpen && (
            <div
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/50 z-40"
            />
        )}
        <aside
        className={`fixed top-0 right-0 h-full w-72 bg-black border-l-4 border-l-primary z-50 transform transition-transform duration-300 flex flex-col ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        >
            <button
            onClick={() => setSidebarOpen(false)}
            className="p-4 text-primary"
            >
                <img src={close} alt="Close" className="w-10" />
            </button>

            <ul>
                {sections.map((item, index) => (
                    <li
                    key={index}
                    className="border-b-4 border-b-primary"
                    >
                        <a
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className="block py-4 px-6 text-primary font-audiowide uppercase text-3xl hover:bg-gray-700"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex justify-end gap-4 p-6">
                <a
                href="https://wa.me/558197568257?text=Will%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-black hover:bg-gray-500 border-2 border-primary rounded-full"
                >
                    <img
                    src={whatsapp}
                    alt="whatsapp"
                    className="filter brightness-50 invert w-14 h-14 p-3 hover:cursor-pointer"
                    />
                </a>

                <a
                href="https://www.instagram.com/menorwill_tatuador"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-black hover:bg-gray-500 border-2 border-primary rounded-full"
                >
                    <img
                    src={instagram}
                    alt="instagram"
                    className="filter brightness-50 invert w-14 h-14 p-3 hover:cursor-pointer"
                    />
                </a>
            </div>
        </aside>
    </>
  )
}

export default Sidebar