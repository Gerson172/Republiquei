import Sidebar from "../../../../components/Sidebar"
import Head from "next/head"
import AnnounceRepublic from "../../../../components/AnnounceRepublic"
import { useRouter } from "next/router"
import api from "../../../../services/api"
import { useEffect, useState } from "react"

export default function VisualizarRepublica(){

    const { query } = useRouter()

    const [imovel, setImovel] = useState()

    useEffect(() => {
        api.get('/Imovel/ObterImovel')
        .then(res => {
            setImovel(res.data.valor)
            console.log(imovel)
        })
        
    }, [])

    return (
        <>
            <Head>
                <title>Visualizar Republica</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
        <section className="w-full h-full flex flex-row">
        <Sidebar/>
        <AnnounceRepublic idImovel={""} id={0} titulo="" midia={"https://avatars.githubusercontent.com/u/88075263?v=4"} quantidadeComodo={0} capacidadePessoas={0} valor={0} descricao={""} possuiAcessibilidade={false} possuiGaragem={false} possuiAcademia={false} possuiMobilia={false} possuiAreaLazer={false} possuiPiscina={false} quantidadeBanheiros={0} quantidadeQuartos={0} myProperty={0} fumante={false} animal={false} alcool={false} visitas={false} crianca={false} drogas={false} tipoImovel={""} tipoQuarto={""} tipoSexo={""} cep={0} localidade={""} bairro={""} uf={""} logradouro={""} numero={""} complemento={""} idUsuario={0} />
        </section>
        </>
    )
}