import AnnounceRepublic from "../../../src/components/Republicas/CardRepublicas"
import Sidebar from "../../../src/components/Sidebar"
import { Imovel } from "../../../types/Imovel";
import { useQuery} from 'react-query'
import api from "../../../src/infra/api";


function visualizarRepublica(){
    
    const {data, isFetching} = useQuery<Imovel[]>('visualizarImovel', async () => {
        const response = await api.get('/Imovel/ObterImovel')

        return response.data.valor;
    }, {
        staleTime: 1000 + 60, // 1 minuto
    })

    console.log(data)

    return (
    <section className="flex">
    <Sidebar/>
    <div className="flex flex-row ml-4 my-16 flex-wrap gap-4 bg-white">
    { isFetching && <p>Carregando....</p>}
        {data?.map((props: Imovel) => {
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
                        idImovel={props.idImovel} estado={""} cidade={""} universidade={""} />
                })}
        </div>
  </section>)
}

export default visualizarRepublica