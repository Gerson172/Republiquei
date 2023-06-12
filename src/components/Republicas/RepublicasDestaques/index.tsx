import CardRepublicas from '../CardRepublicas';
import Link from 'next/link';
import Loading from '../../Funcionalidade/Loading';
import { useQuery } from 'react-query';
import { Republica } from '~/service';

export function RepublicasDestaques() {
	const { data, isFetching } = useQuery(
		'todasRepublicas',
		() => Republica.ObterImovel(),
	);
	return (
		<main
			className={`flex ${
				isFetching ? 'flex-col' : 'flex-row'
			}  md:flex-row w-full flex-wrap bg-gray-100 justify-center gap-4 text-center py-16`}
		>
			<div className="py-16">
				<h2 className="p-4 text-xl md:text-6xl text-gray-900">
					Repúblicas em
					<span className="p-4 text-5xl font-bold md:text-6xl text-sky-500">
						destaque
					</span>
				</h2>
			</div>

			<div
				className={`flex ${
					isFetching ? 'flex-col' : 'flex-row'
				} flex flex-col md:flex-row flex-wrap mb-8 justify-center`}
			>
				{isFetching ? (
					<Loading />
				) : (
					data?.slice(0, 6).map((props:any, index:any) => {
						return <CardRepublicas key={index} {...props} />;
					})
				)}
			</div>
			<div>
				<Link
					href="/buscarRepublica"
					className="px-28 max-sm:px-4 max-sm:text-sm py-4 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600"
				>
					Ver mais repúblicas
				</Link>
			</div>
		</main>
	);
}
