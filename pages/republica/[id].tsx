import NavBar from '../../src/components/NavBar'
import { Imovel } from '../../types/Imovel'
import api from '../../src/infra/api';
import { useQuery } from 'react-query'
import { useRouter } from 'next/router';
import { IoLocation, IoMaleFemaleSharp } from 'react-icons/io5'
import { GoVerified } from "react-icons/go"
import { User } from '../../types/User';
import getRepublicaPorId from '../../src/service/republicas/getRepublicaPorId';
import Footer from '../../src/components/Funcionalidade/Footer';
import Carrosel from '../../src/components/Funcionalidade/Carrosel';
import { MdApartment, MdEmojiPeople, MdFemale, MdHouse, MdMale, MdPeople } from 'react-icons/md';
import dynamic from "next/dynamic";
import Map from "../../src/components/Map";
import Coordenadas from '../../src/service/republicas/getCoordenadas';
import getCoordenadas from '../../src/service/republicas/getCoordenadas';
import { useEffect, useState } from 'react';

const DynamicMap = dynamic(() => import("../../src/components/Map"), {
  ssr: false,
});


export default function Republic() {
  const Regras = [
    'Proibido fumar',
    'Proibido visitas',
    'Proibido pets',
    'Proibido crianças'
  ];

  const Comodidades = [
    'Possui garagem',
    'Possui piscina',
    'Possui academia',
    'Possui 3 Quartos',
    'Possui acessibilidade',
    'Possui 2 Banheiros'
  ];

  const imagens: string[] = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/cc1fd71d-1a91-4026-99f8-c2cbffefd68f.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/e08d07a2-4eaa-4930-9c22-132072aee408.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/bbef1426-7816-409c-8fa2-1c7e7dd136ed.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720"

  ]



  const { id } = useRouter().query

  const { imovel, isFetching } = getRepublicaPorId(id);

  const { data: contato } = useQuery<User>(['contato', id], async () => {
    const response = await api.get(`/Usuario/ObterUsuarioPorId?IdUsuario=${imovel?.idUsuario}`)
    return response.data.valor
  })

  const [lat, setLat] = useState<number>();
  const [lon, setLon] = useState<number>();

 
  /*  const { data, isLoading, isError } = useQuery(
      ["coordenadas", 0,0],
      () => getCoordenadas(address),
      { enabled: !!address }
    );
    */




  console.log(contato)
  return (
    <>
      <NavBar />
      {isFetching && <p>Carregando...</p>}
      <section className="text-black">
        <div className="flex flex-col py-12 px-36">
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <div className="text-2xl font-[sans-serif] font-semibold">{imovel?.nomeImovel}</div>
              <div className='flex flex-row items-center'>
                <IoLocation className='text-2xl text-sky-500' />
                {imovel?.logradouro} - {imovel?.bairro} - {imovel?.cidade}-{imovel?.estado}  {imovel?.cep}
              </div>
              <div className='flex flex-row font-semibold mt-4 gap-2'>
                <div className='px-4 py-2 bg-[#F2F2F2] rounded-md text-[#646464]'>
                  {imovel?.tipoSexo.toUpperCase() === 'MISTO' ? (
                    <span className="flex items-center" title="Misto">
                      <IoMaleFemaleSharp className='text-2xl' />
                      Misto
                    </span>
                  ) : imovel?.tipoSexo.toUpperCase() === 'MASCULINO' ? (
                    <span className="flex items-center  " title="Masculino">
                      <MdMale className='text-2xl' />
                      Masculino
                    </span>
                  ) : (
                    <span className="flex items-center" title="Feminino">
                      <MdFemale className='text-2xl' />
                      Feminino
                    </span>
                  )}
                </div>
                <div className='px-4 py-2 bg-[#F2F2F2] rounded-md  text-[#646464]'>
                  {imovel?.tipoQuarto.toUpperCase() === 'COMPARTILHADO' ? (
                    <span className="flex items-center" title="Quarto Compartilhado">
                      <MdPeople className='text-2xl' />
                      Quarto Compartilhado
                    </span>
                  ) : (
                    <span className="flex items-center" title="Quarto Individual">
                      <MdEmojiPeople className='text-2xl' />
                      Quarto Individual
                    </span>
                  )}
                </div>
                <div className='px-4 py-2 bg-[#F2F2F2] rounded-md text-[#646464]'>
                  {imovel?.tipoImovel.toUpperCase() === 'APARTAMENTO' ? (
                    <span className="flex items-center" title="Apartamento">
                      <MdApartment className='text-2xl' />
                      Apartamento
                    </span>
                  ) : (
                    <span className="flex items-center" title="Casa">
                      <MdHouse className='text-2xl' />
                      Casa
                    </span>
                  )}
                </div>
                <div className='px-4 py-2 bg-[#F2F2F2] rounded-md text-[#646464]'>
                  <span className="flex items-center gap-2" title="Capacidade de Estudantes: 2">
                    <MdPeople />
                    {imovel?.capacidadePessoas} Estudantes
                  </span>
                </div>
              </div>

            </div>
            <div className="flex font-semibold flex-col items-center gap-2">
              <div className='py-4 px-20 text-xl bg-[#F2F2F2]'>R${imovel?.valor},00</div>
              <div className="px-11 py-2 bg-[#00A3D8] rounded-md flex flex-row items-center gap-2 text-white">
                <GoVerified />
                REPÚBLICA OFICIAL
              </div>
            </div>
          </div>
        </div>
        {/* carrossel */}
        <Carrosel imagens={imagens} />
        {/* descrição */}
        <div className="py-12 px-36">
          <div className='mb-8 flex flex-col gap-4'>
            <div className="font-bold text-xl w-28 border-b-4 border-b-sky-500">Descrição:</div>
            <p>
              {imovel?.descricao}
            </p>
          </div>
          <div className="mb-8 flex flex-col gap-4">
            <div className="font-bold text-xl w-20 border-b-4 border-b-sky-500">Regras:</div>
            <ul className="list-disc list-inside">
              {Regras.map((regra) => (
                <li key={regra}>{regra}</li>
              ))}
            </ul>
          </div>
          <div className='mb-8 flex flex-col gap-4'>
            <div className="font-bold text-xl w-36 border-b-4 border-b-sky-500">Comodidades:</div>
            <ul className="list-disc list-inside">
              {Comodidades.map((comodidade) => (
                <li key={comodidade}>{comodidade}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-bold text-gray-500">Loading...</p>
            {
              //<DynamicMap address={data} />)
            }
        </div>
        <Footer />
      </section>
    </>
  )
}
