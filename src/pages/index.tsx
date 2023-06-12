import type { NextPage } from 'next';
import { RepublicasDestaques } from '../components/Republicas/RepublicasDestaques';
import Footer from '../components/Funcionalidade/Footer';
import NavBar from '../components/NavBar';
import { Universidades } from '../components/Universidades';
import Head from '../infra/components/Head';

import { IoIosChatbubbles } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Filter from '../components/Funcionalidade/Filter';

interface FormValues {
	cidade: string;
	bairro: string;
	tipo: string;
	universidade: string;
}

const Home: NextPage = () => {
	const [formValues, setFormValues] = useState<FormValues>({
		cidade: '',
		bairro: '',
		tipo: '',
		universidade: '',
	});

	const [aluguel, setAluguel] = useState<number | undefined>(0);
	const [qtPessoas, setQtPessoas] = useState<number | undefined>(0);

	const router = useRouter();

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { cidade, bairro, tipo, universidade } = formValues;
		router.push({
			pathname: '/buscarRepublica',
			query: { cidade, bairro, aluguel, tipo, qtPessoas, universidade },
		});
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleRangeChangeAluguel = (value: number) => {
		setAluguel(value);
	};

	const handleRangeChangePessoas = (value: number) => {
		setQtPessoas(value);
	};

	return (
		<>
			<Head title="Republiquei - ENCONTRE A SUA REPÚBLICA IDEAL" />
			<NavBar />
			<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 sm:p-20 text-slate-600">
				<div
					className="flex items-center justify-center"
					id="textocentralizado"
				>
					<div className="flex flex-col gap-8">
						<h2 className="text-4xl text-[#212529] sm:text-5xl font-semibold mb-2 font-sans uppercase">
							Encontre A <span className="font-bold">república</span> QUE É A
							SUA CARA
						</h2>
						<p className="mb-4 tracking-[.04rem] text-xl sm:w-96 md:w-5/6">
							A plataforma perfeita para tornar sua busca rápida, fácil e
							eficiente. Explore as opções, encontre seu lar ideal e comece a
							viver a experiência universitária dos seus sonhos.
						</p>
					</div>
				</div>
				<div>
					<form
						className="grid grid-cols-2 gap-2 border rounded-md p-8"
						onSubmit={handleFormSubmit}
					>
						<div className="col-span-2">
							<label className="block mb-2 font-bold" htmlFor="cidade">
								Cidade
							</label>
							<div className="relative flex w-full">
								<input
									className="w-full px-3 py-4 border rounded bg-[#F5F5F5]"
									placeholder="Busque por cidade"
									type="text"
									name="cidade"
									value={formValues.cidade}
									onChange={handleInputChange}
								/>
								<span className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
									<BiSearch />
								</span>
							</div>
						</div>
						<div className="col-span-2">
							<label className="block mb-2 font-bold" htmlFor="bairro">
								Bairro
							</label>
							<div className="relative flex w-full">
								<input
									className="w-full px-3 py-4 border rounded bg-[#F5F5F5]"
									placeholder="Busque por bairro"
									type="text"
									name="bairro"
									value={formValues.bairro}
									onChange={handleInputChange}
								/>
								<span className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
									<BiSearch />
								</span>
							</div>
						</div>
						<div className="col-span-1 mr-4">
							<label className="block mt-4 mb-2 font-bold" htmlFor="aluguel">
								Aluguel até
							</label>
							<Filter
								title="Aluguel até"
								id="aluguel"
								placeholder="Escolha o valor"
								min={1}
								max={10000}
								onRangeChange={handleRangeChangeAluguel}
							/>
						</div>
						<div className="col-span-1">
							<label className="block mt-4 mb-2 font-bold" htmlFor="tipo">
								Tipo
							</label>
							<input
								className="w-full px-3 py-4 border rounded bg-[#F5F5F5]"
								type="text"
								id="tipo"
								name="tipo"
								placeholder="EX: Apartamento, Casa"
								value={formValues.tipo}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col-span-1 mr-4">
							<label className="block mt-4 mb-2 font-bold" htmlFor="pessoas">
								Pessoas
							</label>
							<Filter
								title="Escolha a quantidade de Pessoas"
								id="pessoas"
								placeholder="Escolha a quantidade"
								min={1}
								max={100}
								onRangeChange={handleRangeChangePessoas}
							/>
						</div>
						<div className="col-span-1">
							<label
								className="block mt-4 mb-2 font-bold"
								htmlFor="universidade"
							>
								Universidade
							</label>
							<input
								className="w-full px-3 py-4 border rounded bg-[#F5F5F5]"
								type="text"
								id="universidade"
								name="universidade"
								placeholder="Escolha a universidade"
								value={formValues.universidade}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col-span-2">
							<button
								type="submit"
								className="w-full block mt-5 uppercase font-bold text-xl px-4 py-4 shadow-xl hover:bg-rose-500 text-center bg-[#FF3D6F] text-white rounded"
							>
								Buscar Repúblicas
							</button>
						</div>
					</form>
				</div>
			</section>
			<RepublicasDestaques />
			<Universidades />
			<section className="w-full flex flex-wrap items-center justify-center bg-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
				<div className="py-4 sm:py-8 flex gap-4 sm:gap-8 flex-wrap items-center justify-center">
					<div className="flex flex-col-reverse sm:flex-row bg-[#212529] items-center">
						<Image
							src="https://i.imgur.com/SIZyJV6.jpeg"
							width={560}
							height={1000}
							alt="Imagem da República"
							className="sm:mr-8"
						/>
						<div className="p-4 sm:px-8 md:px-12 lg:px-16 text-white space-y-4">
							<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
								Conheça a melhor <span className="font-bold">república</span>{' '}
								para você
							</h2>
							<p className="text-sm sm:text-base md:text-lg">
								Junte-se a nossa comunidade vibrante e crie memórias
								inesquecíveis. Na Republiquei, seu lar vai além do endereço, é
								um lugar onde você se sentirá verdadeiramente em casa, rodeado
								por pessoas com os mesmos objetivos e sonhos.
							</p>
						</div>
					</div>
					<div className="flex text-slate-900 flex-row max-sm:flex-wrap gap-8">
						<div className="bg-[#FF3D6F] border-b-2 border-pink-600 p-4 sm:p-8 md:p-12">
							<span className="flex flex-row gap-2">
								<BsFillCreditCard2FrontFill className="text-2xl sm:text-3xl md:text-4xl" />
								<h2 className="text-xl sm:text-2xl font-bold border-b-2 border-pink-600 mb-4 pb-2">
									Alugar sem complicações
								</h2>
							</span>
							<p className="text-sm sm:text-base md:text-lg">
								Simplificamos o processo para tornar a busca pela sua república
								perfeita uma experiência tranquila e sem estresse.
							</p>
						</div>
						<div className="bg-blue-500 border-b-2 border-blue-600 p-4 sm:p-8 md:p-12">
							<span className="flex flex-row gap-2">
								<IoIosChatbubbles className="text-2xl sm:text-3xl md:text-4xl" />
								<h2 className="text-xl sm:text-2xl font-bold border-b-2 border-pink-600 mb-4 pb-2">
									Contato com o proprietário
								</h2>
							</span>
							<p className="text-sm sm:text-base md:text-lg">
								Conectamos você diretamente com os responsáveis pelas
								repúblicas, proporcionando uma comunicação direta e ágil.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gray-50">
				<div className="container px-6 py-12 mx-auto text-slate-600">
					<div className="grid items-center gap-4 xl:grid-cols-5">
						<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
							<h2 className="text-4xl font-bold text-sky-500">
								Estudantes que conseguiram moradia com a Republiquei
							</h2>
							<p>
								Diversos universitários passam pela nossa plataforma diariamente
								e nos recomendam para encontrar a sua república ideal.
							</p>
						</div>
						<div className="p-6 xl:col-span-3">
							<div className="grid gap-4 md:grid-cols-2">
								<div className="grid content-center gap-4">
									<div className="p-6 rounded shadow-md bg-white">
										<p>
											A Republiquei me ajudou a encontrar a república que mais
											combinava comigo. Com ela consegui encontrar um local onde
											só tem meninas.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<Image
												className="w-12 h-12 bg-center bg-cover rounded-full"
												src="https://source.unsplash.com/50x50/?portrait?1"
												alt="img"
												width={50}
												height={50}
											/>
											<div>
												<p className="text-lg font-semibold">Nathaly Silva</p>
												<p className="text-sm">
													Estudante de Ciencia da Computação
												</p>
											</div>
										</div>
									</div>
									<div className="p-6 rounded shadow-md bg-white">
										<p>
											Com a Republiquei pude encontrar a minha república sem
											precisar ir até a cidade, dessa forma, quando me mudei já
											tinha o local me esperando.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<Image
												className="w-12 h-12 bg-center bg-cover rounded-full"
												src="https://source.unsplash.com/50x50/?portrait?2"
												alt="img"
												width={50}
												height={50}
											/>{' '}
											<div>
												<p className="text-lg font-semibold">Bruno Arantes</p>
												<p className="text-sm">Estudante de Direito.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="grid content-center gap-4">
									<div className="p-6 rounded shadow-md bg-white">
										<p>
											A Republiquei facilitou a encontrar repúblicas mais
											próximas a minha universidade, além disso pude escolher
											uma república de acordo com o meu gosto.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<Image
												className="w-12 h-12 bg-center bg-cover rounded-full"
												src="https://source.unsplash.com/50x50/?portrait?3"
												alt="img"
												width={50}
												height={50}
											/>{' '}
											<div>
												<p className="text-lg font-semibold">
													Gabrielly Spindola
												</p>
												<p className="text-sm">Estudante de Medicina.</p>
											</div>
										</div>
									</div>
									<div className="p-6 rounded shadow-md bg-white">
										<p>
											A Republiquei facilitou o meu contato com o proprietário
											da casa, não precisei ir até a cidade para ver república
											por república. Com poucos cliques pude encontrar uma
											república sensacional e próxima a minha universidade.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<Image
												className="w-12 h-12 bg-center bg-cover rounded-full"
												src="https://source.unsplash.com/50x50/?portrait?4"
												alt="img"
												width={50}
												height={50}
											/>{' '}
											<div>
												<p className="text-lg font-semibold">Renato Hilbert</p>
												<p className="text-sm">Estudante de Engenharia Civil</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;
