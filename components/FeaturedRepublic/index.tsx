import api from "../../services/api";
import AnnounceRepublic from "../AnnounceRepublic"
import { useQuery } from 'react-query'
import { Imovel } from "../../types/Imovel";

export function FeaturedRepublic() {

  const {data, isFetching} = useQuery<Imovel[]>('imovel', async () => {
    const response = await api.get('/Imovel/ObterImovel')

    return response.data.valor;
})

console.log(data)

    return (
      <main className="flex flex-row w-full flex-wrap bg-gray-100 justify-center gap-4 text-center">
        <div className="py-16">
          <h2 className="p-4 text-5xl md:text-6xl font-bold text-gray-600">
              Repúblicas em
          <span className="p-4 text-5xl md:text-6xl text-sky-500">
              destaque
          </span>
          </h2>
        </div>
        <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
                {data?.slice(0, 3).map(props => {
                    return <AnnounceRepublic 
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
                        idImovel={props.idImovel} />
                })}
        </div>
        </main>
    )
  }
