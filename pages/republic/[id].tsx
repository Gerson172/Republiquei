import NavBar from '../../components/NavBar'
import { Imovel } from '../../types/Imovel'
import api from '../../services/api';
import { useQuery } from 'react-query'
import { useRouter } from 'next/router';
import {IoClose, IoCheckmarkDoneSharp} from 'react-icons/io5'
import { User } from '../../types/User';

export default function Republic() {
  const { id } = useRouter().query

  const { data: imovel, isFetching } = useQuery<Imovel>(['imovel', id], async () => {
    const response = await api.get('/Imovel/ObterImovelPorId?IdImovel=' + id)
    return response.data.valor;
  })

  const { data: contato} = useQuery<User>(['contato', id], async () => {
    const response = await api.get(`/Usuario/ObterUsuarioPorId?IdUsuario=${imovel?.idUsuario}`)
    return response.data.valor
  })

  console.log(imovel)
  return (
    <>
      <NavBar />
      {isFetching && <p>Carregando...</p>}
      <div className='bg-white max-h-full'>

        <div className="max-h-full mx-auto max-w px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-4xl  ">

          <div className="max-h-full rounded overflow-hidden shadow-lg">
            <img className="w-full" alt='' src={imovel?.midia} />
            <div className="px-4 py-1">
              <div className="text-gray-700 font-bold text-4xl text-center mb-7">{imovel?.nomeImovel}
                <span className=" text-3xl font-semibold text-gray-700  ml-10">R$ {imovel?.valor}</span>
              </div>
              <div className="font-bold text-xl mb-2"></div>
              <p className="text-gray-700 text-lg mb-7">
                {imovel?.descricao}
              </p>
              <div className="text-gray-700 font-bold text-xl text-center"><b>+ Sobre o imóvel</b></div>
              <p className="text-gray-700 text-sm">
                <b>Tipo do Quarto:</b> {imovel?.tipoSexo}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Quantidade de cômodos:</b> {imovel?.quantidadeComodo}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <b>Capacidade de pessoas:</b> {imovel?.capacidadePessoas}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <b>Possui acessibilidade:</b> {imovel?.possuiAcessibilidade ? <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <b>Possui Garagem:</b> {imovel?.possuiGaragem ? <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <b>Possui Academia:</b> {imovel?.possuiAcademia ? <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <b>Possui Mobilia:</b> {imovel?.possuiMobilia ? <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <b>Possui Área de lazer:</b> {imovel?.possuiAreaLazer ? <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <b>Possui Piscina:</b> {imovel?.possuiPiscina ? <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Quantidade de Banheiros:</b> {imovel?.quantidadeBanheiros}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Quantidade de Quartos:</b> {imovel?.quantidadeQuartos}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Modelo do imovel:</b> {imovel?.tipoImovel}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Modelo de quarto:</b> {imovel?.tipoQuarto}
              </p>

              <div className="text-gray-700 font-bold text-xl text-center mt-3 mb-3"><b>Contatos do Proprietário</b></div>

              <p className="text-gray-700 text-sm">
                <b>Email:</b> {contato?.email}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Telefone:</b> {contato?.telefone}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Celular com Whatsapp:</b> {contato?.celular}
              </p>

              <div className="text-gray-700 font-bold text-xl text-center mt-3 mb-3"><b>Restrições do imóvel</b></div>

              <p className="text-gray-700 text-sm">
                <b>Permite o uso de tabaco no local:</b> {imovel?.fumante ? <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/> }
              </p>
              <p className="text-gray-700 text-sm">
                <b>Permite animais:</b> {imovel?.animal ?  <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Permite consumo de alcool no local:</b> {imovel?.alcool ?  <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Aceita visitas:</b> {imovel?.visitas ?  <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Aceita criancas no imóvel:</b> {imovel?.crianca ?  <IoCheckmarkDoneSharp className="text-xl text-green-600"/> : <IoClose className='text-xl text-red-600'/>}
              </p>


              <div className="text-gray-700 font-bold text-xl text-center mt-3 mb-3"><b>Endereço do imóvel</b></div>

              <p className="text-gray-700 text-sm">
                <b>CEP:</b> {imovel?.cep}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Cidade:</b> {imovel?.localidade}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Bairro:</b> {imovel?.bairro}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Estado:</b> {imovel?.uf}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Logradouro:</b> {imovel?.logradouro}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Numero:</b> {imovel?.numero}
              </p>
              <p className="text-gray-700 text-sm">
                <b>Complemento:</b> {imovel?.complemento}
              </p>
              {/* <button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold  mt-10   py-2 px-4 border border-gray-400 rounded shadow">
                Entrar em contato
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}