import Image from "next/image";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Owner = () => {
    return (

        <><div>
            <NavBar />
            <div className="absolute top-52 left-8 h-96 w-4/12 shadow-2xl rounded-lg blur-2xl">
                <Image layout='responsive' width={10} height={10} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="img" />
            </div>
            <div className="absolute top-48 left-14 h-96 w-4/12 rounded-lg">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" layout="responsive" width={10} height={10} alt="img" />
            </div>
            <div className="w-full lg:w-10/12 px-4 flex flex-row-reverse">
                <p className="pt-12 mt-12 font-bold text-6xl w-1/2 mb-4">
                    VOCÊ QUE TEM UM IMÓVEL, FAÇA PARTE DE ALGO MAIOR!
                </p>
            </div>
            <div className="w-full lg:w-10/12 px-12 flex flex-row-reverse">
                <p className="pt-2 mb-32 text-xl w-1/2">
                    Ganhe uma renda extra, incentivando o estudo de milhares de jovens por todo o Brasil!
                </p>
            </div>
            <div className="w-full px-4 pb-36 bg-slate-800">

                <p className="mt-12 pt-24 pb-12 pl-32 font-bold text-6xl w-1/2 mb-4 text-white">
                    FAÇA A DIFERENÇA NA VIDA DE OUTRAS PESSOAS!
                </p>
                <button className="rounded-full text-xl w-1/2 bg-pink-600 text-white ml-40 w-60 h-12">
                    Clique e saiba mais!
                </button>
                <div className="absolute top-80 right-28 mt-96 h-96 w-4/12 shadow-2xl rounded-lg blur-2xl">
                    <Image src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" layout="responsive" width={10} height={10} alt="img" />
                </div>
                <div className="absolute top-80 mt-96 right-36 h-96 w-4/12 rounded-lg">
                    <Image src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" layout="responsive" width={10} height={10} alt="img" />
                </div>
            </div>
            <Footer />
        </div></>
    )
}

export default Owner;