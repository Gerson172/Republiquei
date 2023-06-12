import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { IoLocation, IoMaleFemaleSharp } from 'react-icons/io5';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { BiMessage, BiUser } from 'react-icons/bi';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import ReactMarkdown from 'react-markdown';
import { IoIosArrowForward } from 'react-icons/io';

import {
	MdApartment,
	MdEmojiPeople,
	MdFemale,
	MdHouse,
	MdMale,
	MdPeople,
} from 'react-icons/md';

import Footer from '../../components/Funcionalidade/Footer';
import Carrosel from '../../components/Funcionalidade/Carrosel';

import dynamic from 'next/dynamic';
import Head from '../../infra/components/Head';
import NavBar from '~/components/NavBar';
import { Republica, User } from '~/service';
import { useEffect, useState } from 'react';
import { Imovel } from '~/types/Imovel';
import { getCookie } from 'cookies-next';
import { REPUBLIQUEI_JWT } from '~/utils';
import { UserType } from '~/types/User';

const DynamicMap = dynamic(() => import('../../components/Map'), {
	ssr: false,
});

function Republic(props: any) {
	const imagens: string[] = [
		'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/cc1fd71d-1a91-4026-99f8-c2cbffefd68f.jpeg?im_w=960',
		'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/e08d07a2-4eaa-4930-9c22-132072aee408.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/bbef1426-7816-409c-8fa2-1c7e7dd136ed.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/b5cd9fe8-55c2-4b7c-b3fa-c49f87170460.jpeg?im_w=720',
	];

	const { id } = useRouter().query;

	const [isClient, setIsClient] = useState(false);

	const { data: imovel } = useQuery<Imovel>(['imovel', id], () =>
		Republica.ObterImovelPorId(id),
	);

	const { data: proprietario } = useQuery<UserType>('contatoProprietario', () =>
		User.getUser(57),
	);

	console.log(proprietario);

	const endereco = `${imovel?.logradouro} - ${imovel?.bairro} - ${imovel?.cidade}/${imovel?.estado}`;

	const Regras = [
		imovel?.fumante ? 'Proibido Fumante' : '',
		imovel?.visitas ? 'Proibido Visitas' : '',
		imovel?.animal ? 'Proibido Animais' : '',
		imovel?.crianca ? 'Proibido Crianças' : '',
		imovel?.drogas ? 'Proibido Drogas' : '',
	].filter(Boolean);

	const Comodidades = [
		imovel?.possuiGaragem ? 'Possui Garagem' : '',
		imovel?.possuiPiscina ? 'Possui Piscina' : '',
		imovel?.possuiAcademia ? 'Possui Academia' : '',
		imovel?.possuiAcessibilidade ? 'Possui Acessibilidade' : '',
		imovel?.possuiAreaLazer ? 'Possui Area de Lazar' : '',
		imovel?.possuiMobilia ? 'Possui Mobilia' : '',
		imovel?.quantidadeBanheiros
			? `Possui ${imovel.quantidadeBanheiros} banheiros`
			: '',
		imovel?.quantidadeQuartos
			? `Possui ${imovel.quantidadeQuartos} quartos`
			: '',
	].filter(Boolean);

	return (
		<>
			<Head title={imovel?.nomeImovel} />
			<NavBar />
			<section className="text-black">
				<div className="flex flex-col py-12 max-sm:px-2 px-36">
					<div className="flex flex-wrap justify-between items-center px-4 py-2">
						<div>
							<div className="text-2xl font-[sans-serif] font-semibold">
								{imovel?.nomeImovel}
							</div>
							<div className="flex flex-row flex-wrap items-center">
								<IoLocation className="text-2xl text-sky-500" />
								{imovel?.logradouro} - {imovel?.bairro} - {imovel?.cidade}-
								{imovel?.estado} {imovel?.cep}
							</div>
							<div className="flex flex-row flex-wrap font-semibold mt-4 gap-2">
								<div className="px-4 py-2 bg-[#F2F2F2] rounded-md text-[#646464]">
									{imovel?.tipoSexo.toUpperCase() === 'MISTO' ? (
										<span className="flex items-center" title="Misto">
											<IoMaleFemaleSharp className="text-2xl" />
											Misto
										</span>
									) : imovel?.tipoSexo.toUpperCase() === 'MASCULINO' ? (
										<span className="flex items-center  " title="Masculino">
											<MdMale className="text-2xl" />
											Masculino
										</span>
									) : (
										<span className="flex items-center" title="Feminino">
											<MdFemale className="text-2xl" />
											Feminino
										</span>
									)}
								</div>
								<div className="px-4 py-2 bg-[#F2F2F2] rounded-md  text-[#646464]">
									{imovel?.tipoQuarto.toUpperCase() === 'COMPARTILHADO' ? (
										<span
											className="flex items-center"
											title="Quarto Compartilhado"
										>
											<MdPeople className="text-2xl" />
											Quarto Compartilhado
										</span>
									) : (
										<span
											className="flex items-center"
											title="Quarto Individual"
										>
											<MdEmojiPeople className="text-2xl" />
											Quarto Individual
										</span>
									)}
								</div>
								<div className="px-4 py-2 bg-[#F2F2F2] rounded-md text-[#646464]">
									{imovel?.tipoImovel.toUpperCase() === 'APARTAMENTO' ? (
										<span className="flex items-center" title="Apartamento">
											<MdApartment className="text-2xl" />
											Apartamento
										</span>
									) : (
										<span className="flex items-center" title="Casa">
											<MdHouse className="text-2xl" />
											Casa
										</span>
									)}
								</div>
								<div className="px-4 py-2 bg-[#F2F2F2] rounded-md text-[#646464]">
									<span
										className="flex items-center gap-2"
										title="Capacidade de Estudantes: 2"
									>
										<MdPeople />
										{imovel?.capacidadePessoas} Estudantes
									</span>
								</div>
							</div>
						</div>
						<div className="flex max-sm:my-2 font-semibold flex-col items-center gap-2">
							<div className="py-4 px-20 text-xl bg-[#F2F2F2]">
								R${imovel?.valor},00
							</div>
							<div className="px-11 py-2 bg-[#00A3D8] rounded-md flex flex-row items-center gap-2 text-white">
								<GoVerified />
								REPÚBLICA OFICIAL
							</div>
						</div>
					</div>
				</div>
				{/* carrossel */}
				<Carrosel imagens={imagens} />
				{/* descrição */}
				<div className="py-12 max-sm:px-5 px-36 flex max-sm:flex-col">
					<div className="w-2/3">
						<div>
							<h2 className="font-semibold text-xl">Descrição:</h2>
							<div className="bg-sky-500 mt-2 h-2 w-12 rounded-md"></div>
						</div>
						<div className="w-5/6 max-sm:w-screen max-sm:pr-8 my-4">
							<ReactMarkdown
								className="w-full break-words whitespace-pre-line"
								children={`
Apartamento no Villaggio Del Mare, com 91m² privativos, 03 dormitórios (sendo 03 suítes), living 02 ambientes, lavabo, cozinha americana, área de serviço e churrasqueira.

O Villaggio Del Mare é um empreendimento com a grife Montebello Construtora, de alto padrão, em ótima localização no centro de Torres/RS. Conta com 4 apartamentos por andar nas opções de 3 suítes e 2 suítes com churrasqueira, exclusivo com 2 vagas de garagem. Infraestrutura de lazer que dispõe de um amplo salão de festas, espaço gourmet e fitness entregues mobiliadas.

A apenas 3 quadras do mar, possui uma arquitetura arrojada e moderna, pensado para que tivesse a melhor orientação solar em qualquer das suas unidades. Outro grande diferencial é o uso de energia fotovoltaica (pioneiro no litoral) nas áreas comuns para reduzir o consumo de energia elétrica do local, com esse sistema inovador, a energia elétrica é produzida a partir de luz solar, e pode ser produzida mesmo em dias nublados ou chuvosos.
`}
							/>
						</div>

						<div className="flex flex-col gap-4 my-8">
							<div>
								<h2 className="font-semibold text-xl">Regras:</h2>
								<div className="bg-sky-500 mt-2 h-2 w-16 rounded-md"></div>
							</div>
							<ul className="list-inside list-disc">
								{Regras.map((regra) => (
									<li key={regra} className="ml-4 flex items-center">
										<IoIosArrowForward className="mr-2" />
										{regra}
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-4 mb-8">
							<div>
								<h2 className="font-semibold text-xl">Comodidades:</h2>
								<div className="bg-sky-500 mt-2 h-2 w-32 rounded-md"></div>
							</div>
							<ul className="list-inside list-disc">
								{Comodidades.map((comodidade) => (
									<li key={comodidade} className="ml-4 flex items-center">
										<IoIosArrowForward className="mr-2" />
										{comodidade}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="w-1/3 max-sm:w-full">
						{getCookie(REPUBLIQUEI_JWT) ? (
							<div className="mb-8 flex flex-col gap-4 px-4 border rounded-md shadow-md bg-gray-100">
								<span className="mt-8 flex flex-row items-center gap-2 font-bold">
									<span className="text-2xl">
										<BiMessage />
									</span>
									<h2 className="text-xl">Fale com o proprietario</h2>
								</span>
								<div>
									<span className="flex flex-row items-center gap-2">
										<BiUser />
										<p>
											{imovel?.universidade ||
												proprietario?.nome.concat(' ', proprietario.sobrenome)}
										</p>
									</span>
									<span className="flex flex-row items-center gap-2">
										<BsTelephone />
										<p>{proprietario?.celular}</p>
									</span>
								</div>
								<a
									className="px-24 py-2 text-center
								 text-white font-semibold bg-green-500 rounded-md"
								>
									Whatsapp
								</a>
								<span className="flex flex-row items-center gap-2 font-bold">
									<span className="text-2xl">
										<MdOutlineMarkEmailUnread />
									</span>
									<p className="font-sans ">Envie uma mensagem</p>
								</span>

								<form className="flex flex-col p-4 rounded-md gap-4">
									<input
										className="px-2 py-4"
										type="text"
										name=""
										placeholder="Nome"
										id=""
									/>
									<input
										className="px-2 py-4"
										type="text"
										name=""
										id=""
										placeholder="Sobrenome"
									/>
									<input
										className="px-2 py-4"
										type="text"
										name=""
										id=""
										placeholder="Email"
									/>
									<textarea
										className="px-2 py-4"
										rows={5}
										placeholder="Mensagem"
									/>
									<a
										className="py-2 my-2 text-center
								 text-white font-semibold bg-sky-500 hover:bg-sky-600 rounded-md"
									>
										Enviar Mensagem
									</a>
								</form>
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<DynamicMap address={endereco} />
				<Footer />
			</section>
		</>
	);
}

export default dynamic(() => Promise.resolve(Republic), { ssr: false });
