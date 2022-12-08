import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Imovel } from "../../types/Imovel";


function AnnounceRepublic(props: Imovel) {

    return (
        <>
        <Link href={'republic/'+props.idImovel}>
        <div className="transition ease-in-out delay-200 w-full max-w-sm bg-white border-2 mb-8 rounded-lg drop-shadow-md hover:scale-105">
            <div className="carousel pb-4 rounded-t-lg">
                <div className="carousel-item w-full h-64 rounded-t-lg">
                    <Image className="object-cover object-center" width={400} src={props.midia}  height={400} alt={props.descricao} />
                </div>
            </div>
            <div className="px-7 pb-5 text-center">
                <a>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{props.nomeImovel}</h5>
                </a>
                <div className="flex justify-between gap-2 items-center mt-2.5 mb-5">
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">   
                        {props.tipoImovel}  
                    </div>
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {props.tipoQuarto}
                    </div>
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {props.tipoSexo}
                    </div>
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {props.capacidadePessoas}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                <div className="flex items-center font-bold">
                    <MapPinIcon className="h-6 w-6 text-blue-500" />
                    <h2 className="text-blue-500">{props.localidade}-{props.uf}</h2>
                </div>
                    <span className="text-2xl font-bold text-gray-900">{props.valor}</span>
                </div>
        </div>
        </div>
        </Link>
    </>
    )
}

export default AnnounceRepublic;