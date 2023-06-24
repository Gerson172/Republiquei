import { Republica } from '~/service';
import { useQuery } from 'react-query';
import AnuncioRepublicas from '~/components/Republicas/AnuncioRepublicas';
import NavBar from '~/components/NavBar';
import Head from '~/infra/components/Head';
import { REPUBLIQUEI_JWT } from '~/utils';
import Footer from '~/components/Funcionalidade/Footer';

function MeusAnuncios() {
	const { data: minhasRepublicas, isLoading } = useQuery(
		'minhasRepublica',
		() => Republica.MeusAnuncios(),
		{
			cacheTime: 0,
		},
	);

	return (
		<>
			<Head title="Meus Anuncios" />
			<NavBar />
			<main className="h-full max-sm:h-full mb-8">
				<h2 className="text-4xl font-bold p-16 text-[#212529]">
					Meus Anuncios
				</h2>
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 px-16 py-8 gap-8 max-sm:p-2">
					{minhasRepublicas?.data.valor.length === 0 ? (
						<div>Nenhuma republica foi encontrada.</div>
					) : (
						minhasRepublicas?.data.valor.map(
							({ idImovel, midia, valor, nomeImovel }: any, index: number) => (
								<AnuncioRepublicas
									key={index}
									idImovel={idImovel}
									midia={midia}
									valor={valor}
									nomeImovel={nomeImovel}
								/>
							),
						)
					)}
				</section>
			</main>
			<Footer/>
		</>
	);
}

export default MeusAnuncios;

