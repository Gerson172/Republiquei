import { Imovel } from "../../../types/Imovel"

function AnuncioRepublicas({ midia, nomeImovel, valor }: any) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-16 gap-8 ">
        <div className="flex w-4/8">
          <img className="w-full h-full object-cover rounded-l-md" src={midia} />
          <div className="border rounded-r-md flex flex-col justify-center px-6 py-4">
            <h2 className="text-xl font-semibold">{nomeImovel}</h2>
            <p className="text-gray-700 mt-2">R$ {valor}</p>
          </div>
        </div>
      </section>
    );
}


export default AnuncioRepublicas