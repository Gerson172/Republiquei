import Footer from "../../components/Footer";
import { BsGraphUp } from "react-icons/bs";
import { RiPercentFill } from "react-icons/ri";
import NavBar from "../../components/NavBar";
import MapaMundi from "../../components/MapaMundi";


const OwnerLP = () => {
    return (
        <>
            <section className="bg-white">
                <div className="md:mx-auto md:container px-4">
                    <div className="pb-32 pt-16">
                        <div className="mx-auto">
                            <div className="flex flex-wrap flex-row-reverse items-center">
                                <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Anuncie grátis para mais de 8 mil usuários</h1>
                                        <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">Existem milhares de potenciais inquilinos na sua área à procura de um imóvel para chamar de lar. Com a Republiquei você pode atingir o universitário que mais combina com o seu imóvel.</h2>                               
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <img alt="" className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://img.freepik.com/fotos-gratis/composicao-de-negocios-com-estilo-moderno_23-2147900183.jpg?w=1480&t=st=1667520153~exp=1667520753~hmac=a0598574b61ae73528417fd61d55a4f68ec0569b47a3618b88bf80c519b11204" />
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
                                        <div className="flex items-center cursor-pointer pb-4 md:pb-0 mt-8">
                                            <button type="button" className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
                                                <span>Clique e saiba mais</span>
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <img alt="" className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://img.freepik.com/fotos-gratis/foto-aproximada-de-uma-pessoa-pensando-em-comprar-ou-vender-uma-casa_181624-24928.jpg?w=1380&t=st=1667520339~exp=1667520939~hmac=262113300eab6a842f0e4ae6eb209493b1c77635500b2cf31d78807025a62f2e" />                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}

export default OwnerLP;




{/* <div className="flex">

<div className="absolute top-48 left-8 h-96 w-4/12 shadow-2xl rounded-lg blur-2xl">
    <img className="rounded-lg" src="https://images.unsplash.com/photo-1507209575474-fa61e9d3086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
</div>
<div className="absolute top-40 left-14 h-96 w-4/12 rounded-lg">
    <img className="rounded-lg" src="https://images.unsplash.com/photo-1507209575474-fa61e9d3086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
</div>
<div className="w-full lg:w-10/12 px-4 flex flex-row-reverse">
    <p className="pt-20 mt-12 font-bold text-6xl w-1/2 mb-4">
        VOCÊ QUE TEM UM IMÓVEL, FAÇA PARTE DE ALGO MAIOR!
    </p>
</div>
<div className="w-full lg:w-10/12 px-12 flex flex-row-reverse">
    <p className="pt-2 mb-32 text-xl w-1/2">
        Ganhe uma renda extra, incentivando o estudo de milhares de jovens por todo o Brasil!
    </p>
</div>
<div className="w-full px-4 pb-36 bg-slate-800">
    <p className="mt-2 pt-20 pb-12 pl-32 font-bold text-6xl w-1/2 mb-4 text-white">
        FAÇA A DIFERENÇA NA VIDA DE OUTRAS PESSOAS!
    </p>
    <button className="rounded-full text-xl w-1/2 bg-pink-600 text-white ml-40 w-60 h-12">
        Clique e saiba mais!
    </button>
<div className="pb-12">
<div className="absolute top-80 mt-96 right-20 h-96 w-5/12 shadow-2xl rounded-lg blur-2xl">
    <img className="rounded-lg" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
</div>
</div>
<div className="absolute top-80 mt-96 right-20 h-96 w-5/12 ">
<img className="rounded-lg w-full aspect-video" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
</div>
</div>
</div> */}
