import { Imovel } from "../../types/Imovel";
import getRepublica from "../../src/service/republicas/getRepublicas";
import NavBar from "../../src/components/NavBar";
import AnuncioRepublicas from "../../src/components/Republicas/MeusAnuncios/CardAnuncios";
import Head from "../../src/infra/components/Head";
import Apresentacao from "../../src/components/Republicas/MeusAnuncios/Apresentacao";
import { useQuery } from "react-query";
import api from "../../src/infra/api";

function meusAnuncios({data, isFetching}:any) {


    //const { data, isFetching } = getRepublica()

    return (
        <>
            <Head title="Meus Anuncios" />
            <NavBar />
            {/* <section className="space-x-12">
                <div className="flex space-x-3 overflow-scroll
                scrollbar-hide will-change-scroll p-3 -ml-3">
                    {data?.slice(0, 9).map(({ midia, nomeImovel }:any) => {
                        return <Apresentacao
                            key={midia}
                            midia={midia}
                            nomeImovel={nomeImovel}
                        />
                    })}
                </div>
            </section> */}
            <section>
                <h2 className="text-4xl font-semibold py-8 px-16">Meus Anuncios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-3 xl:grid-cols-3 p-16">
                    {isFetching && <p>Carregando....</p>}
                    {data?.slice(0, 6).map(({ midia, valor, nomeImovel }:any) => {
                        return <AnuncioRepublicas
                            key={midia}
                            midia={midia}
                            valor={valor}
                            nomeImovel={nomeImovel}
                        />
                    })}
                </div>
            </section>
        </>
    )
}

export async function getStaticProps() {
    const response = await api.get('/Imovel/ObterImovel');
    const data = response.data.valor;
  
    return {
      props: {
        data
      }
    };
  }

export default meusAnuncios