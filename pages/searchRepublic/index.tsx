import AnnounceRepublic from "../../components/AnnounceRepublic";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { Imovel } from "../../types/Imovel";
import { useQuery } from 'react-query'
import api from "../../services/api";

function SearchRepublic(){


    const {data, isFetching} = useQuery<Imovel[]>('searchImoveis', async () => {
        const response = await api.get('/Imovel/ObterImovel')
        return response.data.valor;
    })

    console.log(data)

    return (
        <>
            <NavBar />
            { isFetching && <p>Carregando....</p>}
            <section className="inline-flex flex-row justify-center my-16 flex-wrap gap-4 bg-white">
                {data?.map(props => {
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
            </section>
            <Footer />
        </>
    )
}

export default SearchRepublic;