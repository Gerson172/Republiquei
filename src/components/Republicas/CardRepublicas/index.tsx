import { MapPinIcon } from "@heroicons/react/24/solid";
import { MdApartment, MdHouse, MdPeople, MdEmojiPeople, MdMale, MdFemale } from 'react-icons/md';
import { IoMaleFemaleSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

import { Imovel } from "../../../types/Imovel";
import { api } from "~/service";


function CardRepublicas(props: Imovel) {

  const { id } = useRouter().query
  const router = useRouter()

  

  function handleDelete() {
    api.delete(`/Imovel/DeletarImovelPorId?IdImovel=${props.idImovel}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setTimeout(() => {
      router.reload()
    })
  }

  return (
    <div className="md:flex md:justify-center my-4">
      <div className="w-full md:w-[24rem] px-4">
        <Link href={`republica/${props.idImovel}`}>
          <div className="border-2 rounded-lg drop-shadow-md bg-white">
            <div className="carousel pb-4 rounded-t-lg">
              <div className="carousel-item w-full h-56 rounded-t-lg">
                <img className="w-full h-full object-cover" src={props.midia} alt={props.descricao} />
              </div>
            </div>
            <div>
              <h5 className={`text-xl text-center truncate px-4 font-semibold tracking-tight text-gray-900`}>{props.nomeImovel}</h5>
              <div className="flex text-center items-center gap-2 justify-center my-2 font-semibold">
                <MapPinIcon className="h-6 w-6 text-[#00A3D8]" />
                <h2 className="text-[#00A3D8]">{props.cidade}-{props.estado}</h2>
              </div>

              <div className="bg-[#F2F2F2] py-4 text-center">
                <span className="text-2xl font-bold text-gray-900">R${props.valor},00</span>
              </div>
              <div className="flex text-3xl text-slate-500 gap-2 justify-center items-center p-8">

                <div className="md:p-4 flex items-center bg-gray-50 border-solid border rounded">
                  {props.tipoImovel === 'Apartamento' ? (
                    <span className="flex flex-col items-center" title="Apartamento">
                      <MdApartment />
                    </span>
                  ) : (
                    <span className="flex flex-col items-center" title="Casa">
                      <MdHouse />
                    </span>
                  )}
                </div>
                <div className="md:p-4 bg-gray-50 border-solid border rounded">
                  {props.tipoQuarto === 'Compartilhado' ? (
                    <span className="flex flex-col items-center" title="Quarto Compartilhado">
                      <MdPeople />
                    </span>
                  ) : (
                    <span className="flex flex-col items-center" title="Quarto Individual">
                      <MdEmojiPeople />
                    </span>
                  )}
                </div>
                <div className="md:p-4 bg-gray-50 border-solid border rounded">
                  {props.tipoSexo === 'Misto' ? (
                    <span className="flex flex-col items-center" title="Misto">
                      <IoMaleFemaleSharp />
                    </span>
                  ) : props.tipoSexo === 'Masculino' ? (
                    <span className="flex flex-col items-center" title="Masculino">
                      <MdMale />
                    </span>
                  ) : (
                    <span className="flex flex-col items-center" title="Feminino">
                      <MdFemale />
                    </span>
                  )}
                </div>
                <div className="md:p-4 bg-gray-50 border-solid border rounded">
                  <span className="flex flex-col items-center" title="Capacidade de Estudantes: 2">
                    <MdPeople />
                  </span>
                </div>
              </div>



            </div>
          </div>
        </Link>
        {id ? <div className="absolute top-0 right-0">
          <button onClick={handleDelete} className=" m-4 px-2 py-4 bg-red-500 text-white rounded">Remover</button>
        </div> : ''}

      </div>
    </div>
  )
}

export default CardRepublicas;