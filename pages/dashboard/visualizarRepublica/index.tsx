import AnnounceRepublic from "../../../components/AnnounceRepublic"
import Sidebar from "../../../components/Sidebar"
import { useFetch } from "../../../hooks/useFetch"
import { Imovel } from "../../../types/Imovel";



function visualizarRepublica(){
    const { data: imovel } = useFetch<Imovel[]>('/Imovel/ObterImovel')

    return (<section className="flex">
    <Sidebar/>
    <div className="flex flex-row ml-4 my-16 flex-wrap gap-4 bg-white">
        {imovel?.map((props: Imovel) => {
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
                        cidade={props.cidade}
                        bairro={props.bairro}
                        estado={props.estado}
                        logradouro={props.logradouro}
                        numero={props.numero}
                        complemento={props.complemento}
                        idUsuario={props.idUsuario} 
                        idImovel={props.idImovel} />
                })}
        </div>
  </section>)
}

export default visualizarRepublica