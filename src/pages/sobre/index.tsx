import Footer from '../../components/Funcionalidade/Footer';
import { BsGraphUp } from 'react-icons/bs';
import { RiPercentFill } from 'react-icons/ri';
import Image from 'next/image';
import NavBar from '~/components/NavBar';

function Sobre() {
	return (
		<>
			<NavBar />
			<section>
				<div className="md:mx-auto md:container px-4 md:px-32">
					<div className="pt-10 ">
						<div className="container mx-auto">
							<div className="flex flex-wrap items-center pb-12">
								<div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
									<div className="py-2 text-color">
										<h1 className="text-xl md:text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
											A república estudantil com a cara do universitário
										</h1>
										<h2 className="text-sm md:text-md lg:text-lg lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
											A ideia de morar sozinho pode ser assustadora, mas com a
											preparação certa, você pode encontrar um lugar acessível e
											seguro para morar. É importante que o estudante encontre a
											casa certa para ele e não qualquer casa disponível. Você
											precisa pensar no que quer em sua casa, quanto de aluguel
											está disposto a pagar e que tipo de acomodação prefere.
										</h2>
										<div className="flex items-center cursor-pointer pb-4 md:pb-0">
											<button
												type="button"
												className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
											>
												<span>Entre como universitario</span>
												<svg
													aria-hidden="true"
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only"></span>
											</button>
										</div>
									</div>
								</div>
								<div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
									<Image
										alt=""
										width={100}
										height={100}
										className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
										src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png"
										loading="eager"
									/>
									<div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
										<div className="flex items-center justify-between w-full sm:w-full mb-8">
											<div className="flex items-center">
												<div className="p-4 bg-rose-500 rounded-md">
													<RiPercentFill color="white" />
												</div>
												<div className="ml-6">
													<h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
														2,330
													</h3>
													<p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
														Estudantes
													</p>
												</div>
											</div>
											<div>
												<div className="flex items-center pl-3 text-green-400">
													<BsGraphUp />
													<p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
														7.2%
													</p>
												</div>
												<p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
													Aumento
												</p>
											</div>
										</div>
										<div className="relative mb-3">
											<hr className="h-1 rounded-sm bg-gray-200" />
											<hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-rose-500" />
										</div>
										<h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
											Meta Anual
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pb-32 pt-16">
						<div className="mx-auto">
							<div className="flex flex-wrap flex-row-reverse items-center">
								<div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
									<div className="py-2 text-color">
										<h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
											Somos o porta-voz da pessoa que deseja anunciar um imóvel
										</h1>
										<h2 className="sm:text-sm md:text-md lg:text-lg leading-7 md:leading-10 f-f-r py-8">
											Fornecemos as informações mais importantes sobre sua
											propriedade e garantimos que seja fácil encontrá-la.
											Estamos aqui para ajudá-lo a criar um anúncio que fará com
											que as pessoas se interessem pelo seu imóvel.
										</h2>
										<div className="flex items-center cursor-pointer pb-4 md:pb-0">
											<button
												type="button"
												className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
											>
												<span className="">Entre como Proprietario</span>
												<svg
													aria-hidden="true"
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only"></span>
											</button>
										</div>
									</div>
								</div>
								<div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
									<Image
										alt=""
										className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
										src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
										width={100}
										height={100}
										loading="eager"
									/>
									<div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
										<div className="flex items-center justify-between w-full sm:w-full mb-8">
											<div className="flex items-center">
												<div className="p-4 bg-sky-500 rounded-md">
													<RiPercentFill color="white" />
												</div>
												<div className="ml-6">
													<h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
														1.330
													</h3>
													<p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
														Proprietarios
													</p>
												</div>
											</div>
											<div>
												<div className="flex items-center pl-3 text-green-400">
													<BsGraphUp />
													<p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
														5.2%
													</p>
												</div>
												<p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
													Aumento
												</p>
											</div>
										</div>
										<div className="relative mb-3">
											<hr className="h-1 rounded-sm bg-gray-200" />
											<hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-sky-500" />
										</div>
										<h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
											Meta Anual
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div>
				<div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
					<h1 className="text-2xl lg:text-6xl md:leading-snug text-center tracking-tighter f-f-l font-black">
						Somos o parceiro do proprietário <br className="md:block hidden" />e
						do estudante
					</h1>
					<div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
						<Image
							height={100}
							width={100}
							src="https://i.imgur.com/LgCdVqK.jpeg"
							alt="world map image"
							className="w-full xl:h-full h-96r object-fill z-0"
						/>
						<div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12 hover:">
							<p className="text-3xl font-semibold text-sky-800">20K+</p>
							<p className="text-base leading-4 xl:mt-4 mt-2 text-sky-600">
								Propriedades parceiras
							</p>
						</div>
						<div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
							<p className="text-3xl font-semibold text-sky-800">8K+</p>
							<p className="text-base leading-4 xl:mt-4 mt-2 text-sky-600">
								Estudantes ativos
							</p>
						</div>
						<div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
							<p className="text-3xl font-semibold text-sky-800">900K+</p>
							<p className="text-base leading-4 xl:mt-4 mt-2 text-sky-600">
								Acessos mensais
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Sobre;
