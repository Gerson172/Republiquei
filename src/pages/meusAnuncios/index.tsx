import { Republica } from "~/service";
import { useMutation, useQuery } from "react-query";
import AnuncioRepublicas from "~/components/Republicas/AnuncioRepublicas";
import NavBar from "~/components/NavBar";
import Head from "~/infra/components/Head";
import { useEffect } from "react";

function MeusAnuncios() {
    const { data: minhasRepublicas, isLoading } = useQuery(
        "minhasRepublica",
        () => Republica.ObterImovelPorUsuarioId(),
        {
            cacheTime: 0,
        }
    ); 

        console.log(minhasRepublicas)

        return (
            <>
                <Head title="Meus Anuncios" />
                <NavBar />
                <main className="h-screen w-full">
                    <h2 className="text-4xl font-semibold py-8 px-16 text-[#212529]">Meus Anuncios</h2>
                    {isLoading ? (
                        <div>Carregando...</div>
                    ) : (
                        minhasRepublicas?.data.valor.map(({ midia, valor, nomeImovel }: any) => (
                            <AnuncioRepublicas
                                key={midia}
                                midia={midia}
                                valor={valor}
                                nomeImovel={nomeImovel}
                            />
                        ))
                    )}
                </main>
            </>
        );


        // Renderizar caso não haja dados ou ocorra um erro
        return <div>Nenhum anúncio encontrado.</div>;
    }

    export default MeusAnuncios;
