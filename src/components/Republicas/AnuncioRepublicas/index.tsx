import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { useMutation, useQueryClient } from 'react-query';
import Modal from '~/components/Funcionalidade/Modal';
import { Republica, api } from '~/service';
import { REPUBLIQUEI_JWT } from '~/utils';

function AnuncioRepublicas({ idImovel, midia, nomeImovel, valor }: any) {
	const [modal, setModal] = useState(false);

	const queryClient = useQueryClient();

	const deleteImovel = useMutation(
		() => Republica.ExcluirMeusAnuncios(idImovel)
		,
		{
			onSuccess: () => {
				queryClient.invalidateQueries('minhasRepublica');

				setModal(false);
			},
			onError: (error) => {
				console.log(error);
			},
		},
	);

	function handleDelete() {
		deleteImovel.mutate();
	}

	return (
		<>
			{!modal ? (
				<div className="grid grid-cols-2 h-64 w-auto text-slate-900 shadow-xl">
					<div className="w-full h-full relative">
						<Image
							alt=""
							layout="fill"
							objectFit="cover"
							className="w-full h-full object-cover rounded-l-md"
							src={midia}
						/>
					</div>
					<div className="border rounded-r-md flex flex-col justify-center px-2 py-4">
						<h2 className="text-xl font-bold ">{nomeImovel}</h2>
						<p className="mt-2 text-xl font-semibold">R$ {valor}</p>
						<div className="flex mt-8 flex-row">
							<button className="mr-8 rounded-md flex items-center">
								<span className="text-2xl">
									<FiEdit2 />
								</span>
								Editar
							</button>
							<button
								className="text-red-500 py-2 rounded-md flex items-center"
								onClick={() => setModal(true)}
							>
								<span className="text-2xl">
									<AiFillDelete />
								</span>
								Delete
							</button>
						</div>
					</div>
				</div>
			) : (
				<Modal modal={true} setModal={setModal} handleDelete={handleDelete} />
			)}
		</>
	);
}

export default AnuncioRepublicas;
