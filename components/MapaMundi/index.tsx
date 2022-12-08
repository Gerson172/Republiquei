export default function MapaMundi(){
    return (
        <>
                <div className="bg-white">
            <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                <h1 className="text-2xl lg:text-6xl md:leading-snug text-center tracking-tighter f-f-l font-black">
                    Somos o parceiro do proprietário <br className="md:block hidden" />
                    e do estudante
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.imgur.com/LgCdVqK.jpeg" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.imgur.com/LgCdVqK.jpeg" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12 hover:">
                        <p className="text-3xl font-semibold text-sky-800">20K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-sky-600">Propriedades parceiras</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-sky-800">8K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-sky-600">Estudantes ativos</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-sky-800">900K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-sky-600">Acessos mensais</p>
                    </div>
                </div>
            </div>
            </div></>
    )
}
