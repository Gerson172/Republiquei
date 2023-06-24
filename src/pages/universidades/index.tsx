import Image from 'next/image';
import Footer from '../../components/Funcionalidade/Footer';
import Head from '../../infra/components/Head';
import NavBar from '~/components/NavBar';
import { BsGraphUp } from 'react-icons/bs';
import { RiPercentFill } from 'react-icons/ri';

const ParaUniversidade = () => {
    return (
        <>
            <NavBar />
            <Head title="Para Universidade" />
            <section>
                <div className="md:mx-auto md:container px-4 md:px-32">
                    <div className="pt-10 ">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center pb-12">
                                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                    <div className="py-2 text-color">
                                        <h1 className="text-xl md:text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                                            Descubra uma parceria incrível com a Republiquei!
                                        </h1>
                                        <h2 className="text-sm md:text-md w-11/12 lg:text-lg lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                                            Seja uma universidade parceira e proporcione aos seus estudantes uma experiência única no processo de busca por moradia próxima à instituição. Na Republiquei, entendemos as necessidades dos universitários e oferecemos soluções personalizadas para facilitar o acesso à moradia estudantil.
                                        </h2>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <Image
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                                        src="https://i.imgur.com/su6Z8m1.jpeg"
                                        loading="eager"
                                    />
                                    <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                        <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                            <div className="flex items-center">
                                                <div className="p-4 bg-rose-500 rounded-md">
                                                    <RiPercentFill color="white" />
                                                </div>
                                                <div className="ml-6">
                                                    <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                                                        240
                                                    </h3>
                                                    <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                                                        Universidades
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center pl-3 text-green-400">
                                                    <BsGraphUp />
                                                    <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                                                        2.2%
                                                    </p>
                                                </div>
                                                <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                                                    Aumento
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative mb-3">
                                            <hr className="h-1 rounded-sm bg-gray-200" />
                                            <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-rose-500" />
                                        </div>
                                        <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                                            Meta Anual
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-32 pt-16">
                        <div className="mx-auto">
                            <div className="flex flex-wrap flex-row-reverse items-center">
                                <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                                            Benefícios de ser uma universidade parceira
                                        </h1>
                                        <h2 className="sm:text-sm md:text-md lg:text-lg leading-7 w-3/4 md:leading-10 f-f-r py-8">
                                            Ao se associar à Republiquei, sua universidade oferece aos estudantes acesso privilegiado a uma variedade de opções de moradia próximas ao campus. Isso permite que eles encontrem facilmente a acomodação ideal, promovendo uma transição suave para a vida universitária.
                                        </h2>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <Image
                                        alt=""
                                        className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                                        src="https://i.imgur.com/7JzEoRI.jpeg"
                                        width={100}
                                        height={100}
                                        loading="eager"
                                    />
                                    <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                                        <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                            <div className="flex items-center">
                                                <div className="p-4 bg-sky-500 rounded-md">
                                                    <RiPercentFill color="white" />
                                                </div>
                                                <div className="ml-6">
                                                    <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                                                        2.330
                                                    </h3>
                                                    <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                                                        Estudantes
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center pl-3 text-green-400">
                                                    <BsGraphUp />
                                                    <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                                                        5.2%
                                                    </p>
                                                </div>
                                                <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                                                    Aumento
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative mb-3">
                                            <hr className="h-1 rounded-sm bg-gray-200" />
                                            <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-sky-500" />
                                        </div>
                                        <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                                            Meta Anual
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="md:mx-auto md:container px-4 md:px-32">
                    <div className="pt-10 ">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center pb-12">
                                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                    <div className="py-2 text-color">
                                        <h1 className="text-xl md:text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                                            Facilite o processo de alojamento
                                        </h1>
                                        <h2 className="text-sm md:text-md w-3/4 lg:text-lg lg:leading-7 md:leading-10 f-f-r py-4 indent-8 md:py-8">
                                        Nossa plataforma intuitiva e de fácil navegação simplifica o processo de busca por moradia. Os estudantes podem pesquisar, selecionar e solicitar acomodações diretamente na plataforma, eliminando a burocracia e tornando o processo mais eficiente.                                        </h2>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <Image
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                                        src="https://images.unsplash.com/photo-1651932809880-bfd75fe113e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        loading="eager"
                                    />
                                    <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                        <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                            <div className="flex items-center">
                                                <div className="p-4 bg-rose-500 rounded-md">
                                                    <RiPercentFill color="white" />
                                                </div>
                                                <div className="ml-6">
                                                    <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                                                     5.560 
                                                    </h3>
                                                    <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                                                    Repúblicas
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center pl-3 text-green-400">
                                                    <BsGraphUp />
                                                    <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                                                        7.2%
                                                    </p>
                                                </div>
                                                <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                                                    Aumento
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative mb-3">
                                            <hr className="h-1 rounded-sm bg-gray-200" />
                                            <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-rose-500" />
                                        </div>
                                        <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                                            Meta Anual
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-32 pt-16">
                        <div className="mx-auto">
                            <div className="flex flex-wrap flex-row-reverse items-center">
                                <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                                        Construa uma parceria de sucesso                                        </h1>
                                        <h2 className="sm:text-sm md:text-md lg:text-lg leading-7 md:leading-10 f-f-r py-8">
                                        Ao se tornar uma universidade parceira da Republiquei, você estará se juntando a uma comunidade comprometida em fornecer soluções abrangentes para as necessidades de moradia dos estudantes. Juntos, podemos criar uma experiência excepcional para seus estudantes.                                        </h2>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <Image
                                        alt=""
                                        className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                                        src="https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        width={100}
                                        height={100}
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>

            </div>
            <Footer />
        </>
    );
};

export default ParaUniversidade;
