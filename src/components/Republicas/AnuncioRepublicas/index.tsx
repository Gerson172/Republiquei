import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiFillDelete, AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ModalDeletar, ModalEditar, ModalConfirmar } from '~/components/Funcionalidade/Modal';
import { Republica, api } from '~/service';
import { Imovel } from '~/types/Imovel';
import { imovelForm } from '~/validations/imovelForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BiBlock } from 'react-icons/bi';
import { FaBed, FaFemale, FaHandHolding, FaHandHoldingHeart, FaMale, FaMinus, FaPlus, FaUsers } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { USUARIO_ID } from '~/utils';


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

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		setError,
		getValues,
	} = useForm<Imovel>({ resolver: yupResolver(imovelForm) });


	const { data: obterImovelPorId } = useQuery<Imovel>(['buscarImovelPorId', idImovel], () =>
		Republica.ObterImovelPorId(idImovel),
	);


	function handleDelete() {
		deleteImovel.mutate();
	}

	useEffect(() => {
		setValue('capacidadePessoas', 0);
		setValue('quantidadeQuartos', 0);
		setValue('quantidadeBanheiros', 0);
	}, []);


	const [selectedTipoSexo, setSelectedTipoSexo] = useState(obterImovelPorId?.tipoSexo);
	const [selectedTipoQuarto, setSelectedTipoQuarto] = useState('');
	const capacidadePessoas = watch('capacidadePessoas', 0)
	const quantidadeQuartos = watch('quantidadeQuartos', 0)
	const quantidadeBanheiros = watch('quantidadeBanheiros', 0)




	const AddQuantidadeMoradoresChange = () => {
		setValue('capacidadePessoas', Math.min(capacidadePessoas + 1, 10));
	};

	const RemoveQuantidadeMoradoresChange = () => {
		setValue('capacidadePessoas', Math.max(capacidadePessoas - 1, 0));
	};

	const handleTipoQuartoChange = (value: string) => {
		setSelectedTipoQuarto(value);
	};

	const handleTipoSexo = (value: string) => {
		setSelectedTipoSexo(value);
	};

	const router = useRouter()


	const onSubmit = (data: Imovel) => {
		console.log('Nome do Imóvel:', data.nomeImovel);

		const midia1 = localStorage.getItem('selectedImages1');
		const midia2 = localStorage.getItem('selectedImages2');
		const midia3 = localStorage.getItem('selectedImages3');

		console.log(data.midia1, data.midia2, data.midia3);


		const editarImovel = {
			id: idImovel,
			midia: data.midia,
			nomeImovel: data.nomeImovel,
			capacidadePessoas: data.capacidadePessoas,
			valor: data.valor,
			descricao: data.descricao,
			possuiGaragem: data.possuiGaragem,
			possuiAcessibilidade: data.possuiAcessibilidade,
			possuiPiscina: data.possuiPiscina,
			possuiMobilia: data.possuiMobilia,
			quantidadeBanheiros: data.quantidadeBanheiros,
			quantidadeQuartos: data.quantidadeQuartos,
			fumante: data.fumante,
			animal: data.animal,
			alcool: data.alcool,
			visitas: data.visitas,
			crianca: data.crianca,
			drogas: data.drogas,
			tipoSexo: data.tipoSexo,
			tipoQuarto: data.tipoQuarto
		}

		setTimeout(() => {
			toast.success('Imovel cadastrado com sucesso!', {
				position: toast.POSITION.BOTTOM_LEFT,
			});

			router.push({ pathname: '/meusAnuncios' });
		}, 1000);

		console.log(editarImovel);

		api
			.post('/Imovel/AtualizarImovel', editarImovel)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

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
				<div className='text-center w-[500px] max-sm:mx-auto max-sm:w-full'>
					<BsCheckCircle size={56} className='mx-auto text-yellow-500' />
					<div className='my-4 w-full space-y-4'>
						<h3 className='text-lg font-bold text-gray-800'>República atualizada</h3>
						<form onSubmit={handleSubmit(onSubmit)}
							className='space-y-4 overflow-auto max-h-[500px] w-full scroll-auto'>
							<div className='flex flex-col items-start mt-8 gap-2'>
								<label>Título da República</label>
								<input
									{...register('nomeImovel')}
									type="text"
									className="bg-[#F8F9FA] w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
									id="nomeImovel"
									defaultValue={obterImovelPorId?.nomeImovel}
									placeholder='Digite o titulo do anuncio'
									onChange={(e) => setValue('nomeImovel', e.target.value)}
								/>
								{errors.nomeImovel && (
									<span className="text-sm text-red-500">
										{errors.nomeImovel.message}
									</span>
								)}
							</div>
							<div className='flex flex-col items-start gap-2'>
								Valor mensal do aluguel da república
								<input
									className="bg-[#F8F9FA] w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
									id="titulo"
									type='number'
									defaultValue={obterImovelPorId?.valor}
									placeholder="Digite o valor mensal desse imovel"
									{...register('valor')}
								/>
								{errors.valor && (
									<span className="text-sm text-red-500">
										{errors.valor.message}
									</span>
								)}
							</div>

							<div className='flex items-center text-start gap-4'>
								<h2>A republica possui</h2>
								<FaHandHoldingHeart size={24} className='text-green-500' />
							</div>
							<h2>Tipo de República</h2>
							<div className="grid grid-cols-2 gap-2">
								<div className="flex items-center space-x-4">

									<label
										htmlFor="feminino"
										className={`flex items-center p-4 space-x-2`}
									>
										<input
											type="radio"
											id="feminino"
											value="feminino"
											{...register('tipoSexo')}
											defaultChecked={selectedTipoSexo == 'feminino'}
											onChange={() => handleTipoSexo('feminino')}
										/>
										<FaFemale />
										<span>Feminino</span>
									</label>
									<label
										htmlFor="masculino"
										className={`flex items-center p-4 space-x-2`}
									>
										<input
											type="radio"
											id="masculino"
											value="masculino"
											{...register('tipoSexo')}
											defaultChecked={selectedTipoSexo == 'masculino'}
											onChange={() => handleTipoSexo('masculino')}
										/>
										<FaMale />
										<span>Masculino</span>
									</label>
									<label
										htmlFor="mista"
										className={`flex items-center p-4 space-x-2`}
									>
										<input
											type="radio"
											id="mista"
											value="mista"
											{...register('tipoSexo')}
											defaultChecked={selectedTipoSexo === 'mista'}
											onChange={() => handleTipoSexo('mista')}
										/>
										<FaUsers />
										<span>Mista</span>
									</label>
								</div>
							</div>
							<div>
								<h2>Tipo de Quarto</h2>
								<div>
									<div className="flex justify-center items-center space-x-4">

										<label
											htmlFor="individual"
											className={`flex items-center p-4 space-x-2`}
										>
											<input
												type="radio"
												id="individual"
												{...register('tipoQuarto')}
												checked={selectedTipoQuarto.toLowerCase() == 'individual'}
												onChange={() => handleTipoQuartoChange('individual')}
											/>
											<FaBed />
											<span>Individual</span>
										</label>
										<label
											htmlFor="compartilhado"
											className={`flex items-center p-4 space-x-2`}
										>
											<input
												type="radio"
												id="compartilhado"
												{...register('tipoQuarto')}
												value="compartilhado"
												checked={selectedTipoQuarto.toLowerCase() === 'compartilhado'}
												onChange={() => handleTipoQuartoChange('compartilhado')}
											/>
											<FaUsers />
											<span>Compartilhado</span>
										</label>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-2 w-full">
									<div>
										<h2>Quantidade de Moradores</h2>
										<div className="flex items-center">
											<button
												type="button"
												className="flex items-center bg-red-500 text-white w-6 h-6 btn-circle justify-center"
												onClick={RemoveQuantidadeMoradoresChange}
											>
												<FaMinus className="text-white" />
											</button>
											<input
												value={capacidadePessoas}
												className="text-center"
												defaultValue={obterImovelPorId?.capacidadePessoas}
												disabled
												{...register('capacidadePessoas')}
											/>
											<button
												type="button"
												className="flex items-center bg-green-500 text-white px-2 py-1 rounded"
												onClick={AddQuantidadeMoradoresChange}
											>
												<FaPlus className="text-white" />
											</button>
										</div>
									</div>
									<div>
										<h2>Quantidade de Quartos</h2>
										<div className="flex items-center">
											<button
												type="button"
												className="flex items-center bg-red-500 text-white w-6 h-6 btn-circle justify-center"
												onClick={() =>
													setValue('quantidadeQuartos', quantidadeQuartos > 0 ? Math.max(quantidadeQuartos - 1, 0) : 0)
												}>
												<FaMinus className="text-white" />
											</button>
											<input
												value={quantidadeQuartos}
												className="text-center"
												defaultValue={obterImovelPorId?.quantidadeQuartos}
												disabled
												{...register('quantidadeQuartos')}
											/>
											<button
												type="button"
												className="flex items-center bg-green-500 text-white px-2 py-1 rounded"
												onClick={() =>
													setValue('quantidadeQuartos', quantidadeQuartos < 10 ? Math.max(quantidadeQuartos + 1, 0) : 10)
												}>
												<FaPlus className="text-white" />
											</button>
										</div>
									</div>
									<div>
										<h2>Quantidade de Banheiros</h2>
										<div className="flex items-center">
											<button
												type="button"
												className="flex items-center bg-red-500 text-white w-6 h-6 btn-circle justify-center"
												onClick={() =>
													setValue('quantidadeBanheiros', quantidadeBanheiros > 0 ? Math.min(quantidadeBanheiros - 1, 10) : 0)
												}>
												<FaMinus className="text-white" />
											</button>
											<input
												value={quantidadeBanheiros}
												className="text-center"
												max={10}
												defaultValue={obterImovelPorId?.quantidadeBanheiros}
												min={0}
												disabled
												{...register('quantidadeBanheiros')}
											/>
											<button
												type="button"
												className="flex items-center bg-green-500 text-white px-2 py-1 rounded"
												onClick={() =>
													setValue('quantidadeBanheiros', quantidadeBanheiros < 10 ? Math.max(quantidadeBanheiros + 1, 0) : 10)
												}>
												<FaPlus className="text-white" />
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-2">
								<label
									htmlFor="possuiGaragem"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('possuiGaragem')}
										id="possuiGaragem"
										type="checkbox"
										defaultChecked={obterImovelPorId?.possuiGaragem}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Possui Garagem</span>
								</label>
								<label
									htmlFor="possuiAcessibilidade"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('possuiAcessibilidade')}
										id="possuiAcessibilidade"
										type="checkbox"
										defaultChecked={obterImovelPorId?.possuiAcessibilidade}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Possui Acessibilidade</span>
								</label>
								<label
									htmlFor="possuiPiscina"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('possuiPiscina')}
										id="possuiPiscina"
										type="checkbox"
										defaultChecked={obterImovelPorId?.possuiPiscina}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Possui Piscina</span>
								</label>
								<label
									htmlFor="possuiMobilia"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('possuiMobilia')}
										id="possuiMobilia"
										type="checkbox"
										defaultChecked={obterImovelPorId?.possuiMobilia}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Possui Mobilia</span>
								</label>
								<label
									htmlFor="possuiAreaLazer"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('possuiAreaLazer')}
										id="possuiAreaLazer"
										type="checkbox"
										defaultChecked={obterImovelPorId?.possuiAreaLazer}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Possui Area de Lazer</span>
								</label>
							</div>
							<div className='flex items-center text-start gap-4'>
								<h2>A republica proibe</h2>
								<BiBlock size={24} className='text-red-500' />
							</div>
							<div className="grid grid-cols-2 gap-2">
								<label
									htmlFor="fumante"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('fumante')}
										id="fumante"
										type="checkbox"
										defaultChecked={obterImovelPorId?.fumante}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Proibido fumar</span>
								</label>
								<label
									htmlFor="animal"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('animal')}
										id="animal"
										type="checkbox"
										defaultChecked={obterImovelPorId?.animal}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Proibido animal</span>
								</label>
								<label
									htmlFor="alcool"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('alcool')}
										id="alcool"
										type="checkbox"
										defaultChecked={obterImovelPorId?.alcool}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Proibido alcool</span>
								</label>

								<label
									htmlFor="visitas"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('visitas')}
										id="visitas"
										type="checkbox"
										defaultChecked={obterImovelPorId?.visitas}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Proibido visitas</span>
								</label>

								<label
									htmlFor="crianca"
									className="inline-flex items-center cursor-pointer"
								>
									<input
										{...register('crianca')}
										id="crianca"
										type="checkbox"
										defaultChecked={obterImovelPorId?.crianca}
										className="form-checkbox h-5 w-5 text-sky-600"
									/>
									<span className="ml-2 text-gray-700">Proibido crianças</span>
								</label>
							</div>


							<div className='flex flex-col items-start gap-2'>
								Descricao do Imóvel
								<textarea
									{...register('descricao')}
									className="border-none bg-gray-100 rounded-md shadow-md p-2 h-full font-normal"
									rows={8}
									cols={30}
									defaultValue={obterImovelPorId?.descricao}
									placeholder="Descrição do imóvel"
								></textarea>

								{errors.descricao && (
									<span className="text-sm text-red-500">
										{errors.descricao.message}
									</span>
								)}

							</div>
							<button
								type='submit'
								className='w-96 bg-yellow-400 rounded-md p-4 font-semibold text-white'>
								Finalizar Editar
							</button>
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
