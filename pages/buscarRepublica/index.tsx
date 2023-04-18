import AnnounceRepublic from "../../src/components/Republicas/CardRepublicas";
import Footer from "../../src/components/Funcionalidade/Footer";
import { IoIosOptions } from "react-icons/io";
import NavBar from "../../src/components/NavBar";
import Loading from "../../src/components/Funcionalidade/Loading";
import getRepublicas from "../../src/service/republicas/getRepublicas";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Imovel } from "../../types/Imovel";


function buscarRepublica() {

  const { data, isFetching } = getRepublicas();

  const [filtroDeCidade, setfiltroDeCidade] = useState('');
  const [filtroDeAluguel, setfiltroDeAluguel] = useState('');
  const [filtroQTDPessoas, setfiltroQTDPessoas] = useState('');
  const [filtroDeBairro, setfiltroDeBairro] = useState('');
  const [filtroDeTipoImovel, setfiltroDeTipoImovel] = useState('');
  const [filtroDeUniversidade, setfiltroDeUniversidade] = useState('');

  const [filteredData, setFilteredData] = useState<Imovel[]>([]);


  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9
  


  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };



  return (
    <>
      <NavBar />

      <input type="text" value={filtroDeCidade} onChange={(e) => setfiltroDeCidade(e.target.value)} placeholder="Cidade" />
      <input type="number" value={filtroDeAluguel} onChange={(e) => setfiltroDeAluguel(e.target.value)} placeholder="Valor até" />
      <input type="number" value={filtroQTDPessoas} onChange={(e) => setfiltroQTDPessoas(e.target.value)} placeholder="Quantidade de pessoas" />
      <input type="text" value={filtroDeBairro} onChange={(e) => setfiltroDeBairro(e.target.value)} placeholder="Bairro" />
      <input type="text" value={filtroDeTipoImovel} onChange={(e) => setfiltroDeTipoImovel(e.target.value)} placeholder="Tipo de imóvel" />
      <input type="text" value={filtroDeUniversidade} onChange={(e) => setfiltroDeUniversidade(e.target.value)} placeholder="Universidade" />

      <section className="w-screen h-full container mx-auto scrollbar-track-sky-300 ">
        <div className="result-info flex items-center justify-between mb-6 mx-5 md:mx-0">
          <h2 className="text-xl font-sans text-slate-800 font-bold">{data?.length} repúblicas para morar em </h2>
          <span className="p-4 bg-slate-800 text-white flex flex-row items-center gap-2 rounded-md">
            <IoIosOptions></IoIosOptions>Filtros
          </span>
        </div>

        <div className="grid justify-center grid-cols-1 md:px-40 gap-x-52 sm:gap-x-[300px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

        {
            data?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((props) => {
              return (
                <AnnounceRepublic
                  midia={props.midia}
                  quantidadeComodo={props.quantidadeComodo}
                  capacidadePessoas={props.capacidadePessoas}
                  valor={props.valor}
                  descricao={props.descricao}
                  possuiAcessibilidade={props.possuiAcessibilidade}
                  possuiGaragem={props.possuiGaragem}
                  possuiAcademia={props.possuiAcademia}
                  possuiMobilia={props.possuiMobilia}
                  possuiAreaLazer={props.possuiAreaLazer}
                  possuiPiscina={props.possuiPiscina}
                  quantidadeBanheiros={props.quantidadeBanheiros}
                  quantidadeQuartos={props.quantidadeQuartos}
                  nomeImovel={props.nomeImovel}
                  email={props.email}
                  telefone={props.telefone}
                  celular={props.celular}
                  fumante={props.fumante}
                  animal={props.animal}
                  alcool={props.alcool}
                  visitas={props.visitas}
                  crianca={props.crianca}
                  drogas={props.drogas}
                  tipoImovel={props.tipoImovel}
                  tipoQuarto={props.tipoQuarto}
                  tipoSexo={props.tipoSexo}
                  cep={props.cep}
                  cidade={props.cidade}
                  bairro={props.bairro}
                  estado={props.estado}
                  logradouro={props.logradouro}
                  numero={props.numero}
                  complemento={props.complemento}
                  idUsuario={props.idUsuario}
                  idImovel={props.idImovel}
                  localidade={""}
                  uf={""}
                  universidade={""}
                />
              );
            })}
        </div>

        {data?.length &&
          <ReactPaginate
            previousLabel={'← Previous'}
            nextLabel={'Next →'}
            pageCount={data.length / itemsPerPage}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            containerClassName={'flex justify-center mt-4'}
            pageClassName={'mr-1'}
            pageLinkClassName={'py-2 px-4 border border-slate-500 font-semibold rounded-md'}
            previousClassName={'mr-1'}
            previousLinkClassName={'py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-md'}
            nextClassName={'ml-1'}
            nextLinkClassName={'py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-md'}
            breakClassName={'mr-1'}
            breakLinkClassName={' bg-gray-200 text-gray-800 font-semibold rounded-md'}
            activeClassName={'active bg-sky-500 text-white font-semibold rounded-md'}
          />

        }

        <Footer />
      </section>
    </>
  )
}

export default buscarRepublica;