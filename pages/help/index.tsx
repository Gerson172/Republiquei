import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Perguntas from "../../components/Perguntas";
import NavBar from "../../components/NavBar";


function Help() {
    return (
        <div>
            <NavBar />
            <section className="bg-white">
            <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto mt-10 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">Dúvidas frequentes:</h1>
            </div>
            <Perguntas />
            </div>
            </section>
            <div className="flex justify-center mb-12">
              <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://img.freepik.com/fotos-gratis/alegres-amigos-multietnicas-tomando-selfie-engracado-grupo_1262-21109.jpg?w=1380&t=st=1667522273~exp=1667522873~hmac=dd069b1781a0bcb7e31cbecf8fc0673719341f61302703525fe2b4230083e8a8" />
            </div>
            <Footer/>
        </div>
    )
}

export default Help;
