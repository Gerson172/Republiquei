import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";


function Help() {
    return (
        <div>
            <NavBar />
            <h2 className="mt-4 mb-10 pb-10 font-bold text-6xl text-center">
                Precisa de um HELP? ;)
            </h2>
            <h2 className="mt-10 mb-10 font-bold text-xl text-center">
                Nos chame em alguma plataforma digital:
            </h2>

            <div className="absolute pb-30 ml-48 pt-12">
                <div className="ml-96 top-52 flex flex-col h-24 w-24 shadow-2xl rounded-lg">
                <Image layout="responsive" alt="discord" width={10} height={10} src="https://play-lh.googleusercontent.com/Wq15hCMPJW-eUz-c4DtnUxHkk2s-pVra14td-E4b05Eo-Cu8Koj6BqPUNULbh9HfjpkC" />
                </div>
                <div className="ml-96 mt-8 top-52 flex flex-col h-24 w-24 shadow-2xl rounded-lg">
                <Image layout="responsive" alt="twitter" width={10} height={10} src="https://play-lh.googleusercontent.com/cZRzJN9uqUQpPtZ4SfLZm_QVI07creZ9-My0K2j65FKYH34SmD9rJ3frvK0M1a6XmMk=s96-rw" />
                </div>
                <div className="ml-96 mt-8 top-52 flex flex-col h-24 w-24 shadow-2xl rounded-lg">
                <Image layout="responsive" alt="facebook" width={10} height={10} src="https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=w480-h960-rw" />
                </div>
                <div className="ml-96 mt-8 top-52 flex flex-col h-24 w-24 shadow-2xl rounded-lg">
                <Image layout="responsive" width={10} height={10} alt="ligue-me" src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w480-h960-rw" />
                </div>
            </div>

            <div className="pt-12 mt-12 bg-slate-800">
                <div className="ml-80">
                    <button className="ml-96 top-8 rounded-md text-xl text-white shadow-2xl w-80 h-20 bg-slate-500">
                        Servidor de Dúvidas no Discord
                    </button>
                </div>
                <div className="ml-80">
                    <button className="ml-96 mt-12 top-48 rounded-md text-xl text-white shadow-2xl w-80 h-20 bg-slate-500">
                        Twitter
                    </button>
                </div>
                <div className="ml-80">
                    <button className="ml-96 mt-12 top-44 rounded-md text-xl text-white shadow-2xl w-80 h-20 bg-slate-500">
                        Facebook
                    </button>
                </div>
                <div className="ml-80">
                    <button className="ml-96 mt-12 top-44 rounded-md text-xl text-white shadow-2xl w-80 h-20 bg-slate-500 mb-12">
                        Suporte
                    </button>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Help;
