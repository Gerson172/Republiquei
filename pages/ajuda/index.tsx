import Image from "next/image";
import Link from "next/link";
import Footer from "../../src/components/Funcionalidade/Footer";
import NavBar from "../../src/components/NavBar";
import { useState } from "react";


function Ajuda() {
    const [open, setOpen] = useState(false);
    
    const toggleDropdown = () => {
      setOpen(!open);
    };


    return (
        <div>
            <NavBar />
            <section className="bg-white">
            <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto mt-10 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">Dúvidas frequentes:</h1>
            </div>
            <div className="my-12">
        <div className="mb-4">
          <button className="text-xl font-bold" onClick={toggleDropdown}>
            O que é uma república?
          </button>
          {open && (
            <div className="text-gray-500 mt-2">
              <p className="leading-6">
                A república é uma casa ou apartamento compartilhado apenas por estudantes. O local, quase sempre, está situado bem próximo da instituição de ensino, o que facilita o cotidiano da vida acadêmica.
              </p>
            </div>
          )}
        </div>
  
        <div className="mb-4">
          <button className="text-xl font-bold" onClick={toggleDropdown}>
            Qual a missão do Republiquei?
          </button>
          {open && (
            <div className="text-gray-500 mt-2">
              <p className="leading-6">
                O Republiquei surge com a ideia de criar uma maneira simplificada para todos os universitários brasileiros encontrarem uma moradia digna para seguirem seus estudos.
              </p>
            </div>
          )}
        </div>
  
        <div className="mb-4">
          <button className="text-xl font-bold" onClick={toggleDropdown}>
            Onde eu posso entrar em contato?
          </button>
          {open && (
            <div className="text-gray-500 mt-2">
              <p className="leading-6">
                Você pode entrar em contato através do Discord, Twitter e Facebook. :)
              </p>
              <p className="mt-6 text-sm hover:cursor-pointer hover:underline underline-offset-2">
                Obter suporte!
              </p>
            </div>
          )}
        </div>
      </div>
            </div>
            </section>
            <div className="flex justify-center mb-12">
              <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://img.freepik.com/fotos-gratis/alegres-amigos-multietnicas-tomando-selfie-engracado-grupo_1262-21109.jpg?w=1380&t=st=1667522273~exp=1667522873~hmac=dd069b1781a0bcb7e31cbecf8fc0673719341f61302703525fe2b4230083e8a8" />
            </div>
            <Footer/>
        </div>
    )
}

export default Ajuda;
