import type { NextPage } from 'next'
import { RepublicasDestaques } from '../src/components/Republicas/RepublicasDestaques'
import Footer from '../src/components/Funcionalidade/Footer'
import NavBar from '../src/components/NavBar'
import { Universidades } from '../src/components/Universidades'
import Head from '../src/infra/components/Head'

import { IoIosChatbubbles } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

interface FormValues {
	cidade: string;
	bairro: string;
	aluguel: number;
	tipo: string;
	pessoas: number;
	universidade: string;
}

const Home: NextPage = () => {

	const [formValues, setFormValues] = useState<FormValues>({
		cidade: '',
		bairro: '',
		aluguel: 0,
		tipo: '',
		pessoas: 0,
		universidade: '',
	});

	const router = useRouter();

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { cidade, bairro, aluguel, tipo, pessoas, universidade } = formValues;
		router.push({
			pathname: '/buscarRepublica',
			query: { cidade, bairro, aluguel, tipo, pessoas, universidade },
		});
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<>
			<Head title="Republiquei - ENCONTRE A SUA REPÚBLICA IDEAL" />
			<NavBar />
			<section className="grid grid-cols-2 gap-4 p-20 text-slate-600">
				<div className="col-span-2 sm:col-span-1 my-14">
					<div>
						<h2 className="text-5xl font-bold mb-2">ENCONTRE A SUA
							REPÚBLICA IDEAL</h2>
						<p className="mb-4 line-clamp-4 w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<form className="grid grid-cols-2" onSubmit={handleFormSubmit}>
						<div className="col-span-2">
							<label className="block mb-2 font-bold" htmlFor="cidade">
								Cidade
							</label>
							<div className="relative flex w-full">
								<input
									className="w-full px-3 py-2 border rounded"
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
									className="w-full px-3 py-2 border rounded"
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
								Aluguel
							</label>
							<div className="relative flex w-full">
								<span className="absolute left-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
									R$
								</span>
								<input className="w-full pl-10 py-2 border rounded"
									type="number"
									id="aluguel"
									name="aluguel" placeholder='Escolha o valor'
									value={formValues.aluguel}
									onChange={handleInputChange}
									required />
							</div>
						</div>
						<div className="col-span-1">
							<label className="block mt-4 mb-2 font-bold" htmlFor="tipo">Tipo</label>
							<input
								className="w-full px-3 py-2 border rounded"
								type="text"
								id="tipo"
								name="tipo"
								placeholder='EX: Apartamento, Casa'
								value={formValues.tipo}
								onChange={handleInputChange}
								required />
						</div>
						<div className="col-span-1 mr-4">
							<label className="block mt-4 mb-2 font-bold" htmlFor="pessoas">Pessoas</label>
							<input
								className="w-full px-3 py-2 border rounded"
								type="text"
								id="pessoas"
								name="pessoas"
								placeholder='Escolha a quantidade'
								value={formValues.pessoas}
								onChange={handleInputChange}
								required />
						</div>
						<div className="col-span-1">
							<label className="block mt-4 mb-2 font-bold" htmlFor="universidade">Universidade</label>
							<input
								className="w-full px-3 py-2 border rounded"
								type="text"
								id="universidade"
								name="universidade"
								placeholder='Escolha a universidade'
								value={formValues.universidade}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col-span-2">
							<button type='submit' className='w-full block mt-5 px-4 py-4 text-center bg-[#FF3D6F] text-white rounded'>Buscar Repúblicas</button>
						</div>
					</form>

				</div>
			</section>
			<RepublicasDestaques />
			<Universidades />
			<section className="w-full flex  flex-wrap items-center justify-center bg-zinc-100 max-sm:p-0 p-20">
				<div>
					<div className="max-sm:p-0 py-8 flex flex-wrap items-center justify-center">
						<div className='max-sm:w-screen flex max-sm:flex-wrap max-sm:flex-col-reverse bg-[#212529] items-center'>
							<Image
								src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
								width={1700}
								height={1000}
								alt="Imagem da República"
								className="mr-8"
							/>
							<div className='px-8 text-white space-y-4'>
								<h2 className='font-semibold text-5xl'>Conheça a melhor república para você</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
									praesentium nam molestias tempore labore exercitationem aut vitae
									sint qui placeat eligendi velit blanditiis aliquam quia, fugiat
									obcaecati quisquam architecto. Modi.
								</p>
							</div>
						</div>
					</div>
					<div className='flex text-slate-900 flex-row max-sm:flex-wrap gap-8'>
						<div className="bg-pink-500 p-8 border-b-2 border-pink-600">
							<span className='flex flex-row gap-2'>
								<BsFillCreditCard2FrontFill className='text-4xl' />
								<h2 className="text-2xl font-bold border-b-2 border-pink-600 mb-4 pb-2">
									Alugar sem complicações
								</h2>
							</span>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
								magni, vel vero, placeat ipsam amet molestias exercitationem dolore quo
								iure deleniti dicta eos commodi, doloribus fugiat ullam? Sit, consequatur
								facilis.
							</p>
						</div>
						<div className="bg-blue-500 p-8 border-b-2 border-blue-600">
							<span className='flex flex-row gap-2'>
								<IoIosChatbubbles className='text-4xl' />
								<h2 className="text-2xl font-bold border-b-2 border-pink-600 mb-4 pb-2">
									Contato com o proprietário
								</h2>
							</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex, harum
								voluptatibus delectus quos perspiciatis cumque maxime ab dolorem ratione
								sunt dicta voluptas modi velit earum voluptatum accusamus illum fugit.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container px-6 py-12 mx-auto">
					<div className="grid items-center gap-4 xl:grid-cols-5">
						<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
							<h2 className="text-5xl font-bold text-sky-500">Estudantes que conseguiram moradia com a Republiquei</h2>
							<p>Diversos universitários passam pela nossa plataforma diariamente e nos recomendam para encontrar a sua república ideal.</p>
						</div>
						<div className="p-6 xl:col-span-3">
							<div className="grid gap-4 md:grid-cols-2">
								<div className="grid content-center gap-4">
									<div className="p-6 rounded shadow-md">
										<p>A Republiquei me ajudou a encontrar a república que mais combinava comigo. Com ela consegui encontrar um local onde só tem meninas.</p>
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
												<p className="text-sm">Estudante de Ciencia da Computação</p>
											</div>
										</div>
									</div>
									<div className="p-6 rounded shadow-md">
										<p>Com a Republiquei pude encontrar a minha república sem precisar ir até a cidade, dessa forma, quando me mudei já tinha o local me esperando.</p>
										<div className="flex items-center mt-4 space-x-4">
										<Image
												className="w-12 h-12 bg-center bg-cover rounded-full"
												src="https://source.unsplash.com/50x50/?portrait?2"
												alt="img"
												width={50}
												height={50}
											/>											<div>
												<p className="text-lg font-semibold">Bruno Arantes</p>
												<p className="text-sm">Estudante de Direito.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="grid content-center gap-4">
									<div className="p-6 rounded shadow-md">
										<p>A Republiquei facilitou a encontrar repúblicas mais próximas a minha universidade, além disso pude escolher uma república de acordo com o meu gosto.</p>
										<div className="flex items-center mt-4 space-x-4">
										<Image
												className="w-12 h-12 bg-center bg-cover rounded-full"
												src="https://source.unsplash.com/50x50/?portrait?3"
												alt="img"
												width={50}
												height={50}
											/>											<div>
												<p className="text-lg font-semibold">Gabrielly Spindola</p>
												<p className="text-sm">Estudante de Medicina.</p>
											</div>
										</div>
									</div>
									<div className="p-6 rounded shadow-md">
										<p>A Republiquei facilitou o meu contato com o proprietário da casa, não precisei ir até a cidade para ver república por república. Com poucos cliques pude encontrar uma república sensacional e próxima a minha universidade.</p>
										<div className="flex items-center mt-4 space-x-4">
										<Image
												className="w-12 h-12 bg-center bg-cover rounded-full"
												src="https://source.unsplash.com/50x50/?portrait?4"
												alt="img"
												width={50}
												height={50}
											/>											<div>
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
	)
}




export default Home
