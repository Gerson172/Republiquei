import Sidebar from "../../../components/Sidebar"
import Head from "next/head"

export default function VisualizarRepublica(){
    return (
        <>
            <Head>
                <title>Visualizar Republica</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
        <section className="w-full h-full flex flex-row">
        <Sidebar/>
        </section>
        </>
    )
}