import Image from 'next/image';
import { Imovel } from '../../../../types/Imovel';

function CardAnuncios({ midia, nomeImovel, valor }: any) {
	return (
		<div
			className="flex items-center m-2 mt-5 space-x-4 rounded-xl
        cursor-pointer hover:bg-gray-100 hover:scale-105 transition 
        transform duration-200 ease-out"
		>
			<div className="relative h-36 w-36">
				<Image
					src={midia}
					alt={nomeImovel}
					layout="fill"
					className="rounded-lg"
				/>
			</div>

			<div>
				<h2>{nomeImovel}</h2>
				<h3>{valor}</h3>
			</div>
		</div>
	);
}

export default CardAnuncios;
