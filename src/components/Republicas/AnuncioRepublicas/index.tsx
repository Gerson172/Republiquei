import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillDelete, AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi';
import { useMutation, useQueryClient } from 'react-query';
import { ModalDeletar, ModalEditar, ModalConfirmar } from '~/components/Funcionalidade/Modal';
import { Republica, api } from '~/service';

function AnuncioRepublicas({ idImovel, midia, nomeImovel, valor }: any) {
	const [modal, setModal] = useState(false);
	const [modalInserir, setModalInserir] = useState(false);
	const [modalConfirmar, setModalConfirmar] = useState(false);

	const queryClient = useQueryClient();

	const deleteImovel = useMutation(
		() => Republica.ExcluirMeusAnuncios(idImovel),
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
		<section>
			<div className="grid grid-cols-2 h-64 max-sm:h-full max-sm:w-full w-auto hover:scale-[1.009] text-slate-900 max-md:grid-cols-1 shadow-xl">
				<Link href={`republica/` + idImovel}>
					<div className="w-full h-full max-sm:h-60 relative">
						<Image
							alt={nomeImovel}
							layout="fill"
							objectFit="cover"
							className="w-full h-full object-cover rounded-l-md"
							src={midia}
						/>
					</div>
				</Link>
				<div className="border rounded-r-md flex flex-col justify-center px-2 py-4">
					<Link href={`republica/` + idImovel}>
						<h2 className="text-xl font-bold ">{nomeImovel}</h2>
						<p className="mt-2 text-xl font-semibold">R$ {valor}</p>
					</Link>

					<div className="flex mt-8 flex-row flex-wrap">
						<button
							className="btn bg-yellow-400 hover:bg-yellow-500 text-white border-none mr-8 rounded-md gap-2 flex items-center"
							onClick={() => setModalInserir(true)}
						>
							<span className="text-2xl">
								<FiEdit2 />
							</span>
							Editar
						</button>
						<button
							className="btn bg-red-600 hover:bg-red-500 text-white border-none rounded-md flex gap-2 items-center"
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

			<ModalDeletar open={modal} onClose={() => setModal(false)}>
				<div className='text-center w-96 m-8 max-sm:mx-auto max-sm:w-full'>
					<AiOutlineExclamationCircle size={56} className='mx-auto text-red-500' />
					<div className='mx-auto my-4 w-72 space-y-4'>
						<h3 className='text-lg font-bold text-gray-800'>Remover Republica</h3>
						<p className='text-sm break-words text-gray-500'>
							Ops! Parece que você está prestes a remover o anúncio da sua república! 😢🏠
						</p>
						<p className='text-sm break-words text-gray-500'>
							Queremos lembrar que essa ação é definitiva
							e o anúncio será removido permanentemente.
						</p>
					</div>
					<div className='flex gap-4 mt-16'>
						<button className='btn bg-red-500 hover:bg-red-700 
								border-none text-white w-1/2'
							onClick={() => handleDelete()}>
							Excluir
						</button>
						<button
							className='btn bg-sky-500 hover:bg-sky-600 w-1/2 text-white border-none'
							onClick={() => setModal(false)}
						>
							Cancelar
						</button>
					</div>
				</div>
			</ModalDeletar>

			<ModalEditar open={modalInserir} onClose={() => setModalInserir(false)}>
				<div className='text-center w-96 m-8 max-sm:mx-auto max-sm:w-full'>
					<BsCheckCircle size={56} className='mx-auto text-green-500' />
					<div className='mx-auto my-4 w-72 space-y-4'>
						<h3 className='text-lg font-bold text-gray-800'>República atualizada</h3>
						<form>

						</form>
					</div>
				</div>
			</ModalEditar>

			<ModalConfirmar open={modalConfirmar} onClose={() => setModalConfirmar(false)}>
				<div className='text-center w-96 m-8 max-sm:mx-auto max-sm:w-full'>
					<BsCheckCircle size={56} className='mx-auto text-green-500' />
					<div className='mx-auto my-4 w-72 space-y-4'>
						<h3 className='text-lg font-bold text-gray-800'>República atualizada</h3>
						<p className='text-sm break-words text-gray-500'>
							Sucesso! Sua república foi atualizada com êxito! 🎉🏠
						</p>
						<p className='text-sm break-words text-gray-500'>
							Agora sua república está atualizada e
							pronta para impressionar os universitários em
							busca de um novo lar.
						</p>
					</div>
					<div className='mx-auto my-8'>
						<button
							className='btn bg-sky-500 hover:bg-sky-600 w-1/2 text-white border-none'
							onClick={() => setModalConfirmar(false)}
						>
							Cancelar
						</button>
					</div>
				</div>
			</ModalConfirmar>
		</section>
	);
}

export default AnuncioRepublicas;
