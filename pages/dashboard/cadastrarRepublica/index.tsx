import CrudRepublic from "../../../components/CrudRepublic";
import Sidebar from "../../../components/Sidebar";
import Head from "next/head";

export default function CadastrarRepublica() {
    return (
        <>
           <Head>
                <title>Cadastrar Republica</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <section className="flex md:flex-row flex-col-reverse">
            <Sidebar />
            <CrudRepublic />
            </section>
        </>
    )
}