import { Imovel } from "../../../../types/Imovel"

function AnuncioRepublicas({ midia, nomeImovel, valor }:any){
    return (
        <div className="flex w-1/3">
            <img className="w-full h-full object-cover rounded-l-md" src={midia} />
            <div className="border rounded-r-md px-2">
                <h2>{nomeImovel}</h2>
                <p>R$ ${valor}</p>
            </div>
        </div>
    );
}

export default AnuncioRepublicas