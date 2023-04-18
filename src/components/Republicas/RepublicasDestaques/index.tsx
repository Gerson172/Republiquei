import api from "../../../infra/api";
import CardRepublicas from "../CardRepublicas"
import { useQuery } from 'react-query'
import { Imovel } from "../../../../types/Imovel";
import Link from "next/link";
import Loading from "../../Funcionalidade/Loading";
import getRepublica from "../../../service/republicas/getRepublicas";

export function RepublicasDestaques() {

  const {data, isFetching} = getRepublica();

console.log(data)

    return (
      <main className={`flex ${isFetching ? "flex-col": "flex-row"} w-full flex-wrap bg-gray-100 justify-center gap-4 text-center mb-16`}>
        <div className="py-16">
          <h2 className="p-4 text-5xl md:text-6xl font-bold text-gray-600">
              Repúblicas em
          <span className="p-4 text-5xl md:text-6xl text-sky-500">
              destaque
          </span>
          </h2>
        </div>
      
        <div className={`flex ${isFetching ? "flex-col": "flex-row"} flex-wrap mb-8 justify-center`}>
               { isFetching ? <Loading/> : 
               data?.slice(0, 6).map(props => {
                    return <CardRepublicas 
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
                      localidade={props.localidade}
                      bairro={props.bairro}
                      uf={props.uf}
                      logradouro={props.logradouro}
                      numero={props.numero}
                      complemento={props.complemento}
                      idUsuario={props.idUsuario}
                      idImovel={props.idImovel} estado={props.estado} cidade={props.cidade} universidade={""} />
                })}
        </div>
          <div>
              <Link href="/buscarRepublica">
                <a className="px-12 py-4 bg-sky-500 text-white">Ver mais repúblicas</a>
              </Link>
          </div>
        </main>
    )
  }
