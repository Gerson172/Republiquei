import Image from "next/image";
import Footer from "../../src/components/Funcionalidade/Footer";
import NavBar from "../../src/components/NavBar";
import Head from "../../src/infra/components/Head";

const Proprietario = () => {
    return (
        <>
            <Head title="Seja um proprietario" />
            <NavBar />
            <section className="bg-white">
                <div className="md:mx-auto md:container px-4 sm:px-16">
                    <div className="pb-25 pt-16">
                        <div className="mx-auto">
                            <div className="flex flex-wrap flex-row-reverse items-center">
                                <div className="md:w-1/2 lg:w-2/3 lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Anuncie grátis para mais de 8 mil usuários</h1>
                                        <h2 className="text-sm lg:text-2xl leading-7 md:leading-10 f-f-r py-8">Existem milhares de potenciais inquilinos na sua área à procura de um imóvel para chamar de lar. Com a Republiquei você pode atingir o universitário que mais combina com o seu imóvel.</h2>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative flex items-end justify-center">
                                    <Image alt="Adulto de meia idade comemorando uma venda, ele é um homem branco e está com um braço pra cima e com o punho cerrado"
                                        className="rounded-md"
                                        layout="responsive"
                                        width={1200}
                                        height={1000}
                                        src="../../homem-adulto-comemorando.webp"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="pt-10 md:pt-20 ">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center pb-12">
                                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Alugue seu imóvel sem burocracias</h1>
                                        <h2 className="text-sm lg:text-2xl leading-7 md:leading-10 f-f-r py-8">Republiquei resolve as principais dores de cabeça de possuir uma propriedade: anunciar o imóvel e encontrar inquilinos. Entregamos um produto que vai transformar a experiência de alugar seu imóvel.</h2>
                                        <div className="flex items-center cursor-pointer pb-4 md:pb-0 mt-8">
                                            <button type="button" className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
                                                <span>Clique e saiba mais</span>
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative flex items-end justify-center">
                                    <Image
                                        alt=""
                                        className="rounded-md"
                                        width={1200}
                                        height={1000}
                                        src="https://img.freepik.com/fotos-gratis/foto-aproximada-de-uma-pessoa-pensando-em-comprar-ou-vender-uma-casa_181624-24928.jpg?w=1380&t=st=1667520339~exp=1667520939~hmac=262113300eab6a842f0e4ae6eb209493b1c77635500b2cf31d78807025a62f2e" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default Proprietario;
