import Image from "next/image"

function Apresentacao({ midia, nomeImovel }: any) {
    return (
    <div className="cursor-pointer hover:scale-105 
    transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
            <Image src={midia} layout="fill" alt={nomeImovel}  className="rounded-xl "/>
        </div>
        <h3 className="text-2xl mt-3">{nomeImovel}</h3>
    </div>
    )
}

export default Apresentacao