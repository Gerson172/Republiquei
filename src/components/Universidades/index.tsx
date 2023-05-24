import Image from "next/image";
import Link from "next/link";

export const universidadesData = [
    {
        image: "https://www.praiagrande.sp.gov.br/arquivos/foto/44324.jpg",
        acessibility: "Imagem de Republica",
        title: "FATEC - Faculdade de  Tecnologia de Praia Grande",
    },
    {
        image: "https://3.bp.blogspot.com/-a2BNCNOwnTk/W921KVVcMHI/AAAAAAAAPio/JuYNofDv-kwQFrscfNjnNzIoju8CiQWQgCEwYBhgL/s1600/Faculdade%2Bde%2BMedicina%2B-%2BUSP.jpg",
        acessibility: "Imagem de Republica",
        title: "USP  Universidade de São Paulo",
        location: "São Paulo - SP",
    },
    {
        image: "https://alumni.unesp.br/images/1073743845/2-unesp_1630452342406.jpg",
        acessibility: "Imagem de Republica",
        title: "Unesp - Universidade Estadual Paulista",
        location: "Bauru- SP",
    }
]


export const Universidades = () => {
    return (
        <>
            <section className="flex font flex-row w-full flex-wrap bg-[#212529] justify-center gap-4 text-center">
                <div className="py-16">
                    <h2 className="p-4 text-5xl md:text-6xl font-bold text-white">
                        Universidades mais
                        <span className="p-4 text-5xl md:text-6xl text-[#DB2777]">
                            procuradas
                        </span>
                    </h2>
                </div>
                <div className="mb-12 flex flex-row flex-wrap gap-8 justify-center">
                    {universidadesData.slice(0, 3).map((data) =>
                        <div className="w-full max-w-sm bg-white my-4 rounded-md drop-shadow-md text-center">
                            <Image className="pb-4 rounded-t-lg" src={data.image} width="500" height={300} alt={data.acessibility} />
                            <div className="p-4 flex flex-col items-center">
                                <h5 className="tracking-wide font-bold font-sans text-2xl text-gray-900">{data.title}</h5>
                                <div className="flex justify-between mt-5 items-center text-center">
                                    <Link href="/buscarRepublica"
                                        className="bg-[#FF3D6F] text-white rounded-lg py-5 px-28">Ver repúblicas
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}