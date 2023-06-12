import { GetServerSideProps, NextPage } from 'next';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import Footer from '../../components/Funcionalidade/Footer';
import { BsCheckLg } from 'react-icons/bs';
import Titulo from '../../patterns/Republica/Titulo';
import Fotos from '../../patterns/Republica/Fotos';
import Endereco from '../../patterns/Republica/Endereco';
import { useForm, FormProvider } from 'react-hook-form';
import Caracteristicas from '../../patterns/Republica/Caracteristicas';
import Descricao from '../../patterns/Republica/Descricao';
import Valor from '../../patterns/Republica/Valor';
import { toast } from 'react-toastify';
import router from 'next/router';
import { api } from '~/service';
import { Imovel } from '~/types/Imovel';
import RegrasComordidades from '../../patterns/Republica/Regras';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
	midiaImovel,
	descricaoRepublica,
	caracteristicasImovel,
	valor,
	nomeImovel,
	RegrasComordidadesYup,
	enderecoImovel,
} from '../../validations/imovelForm';
import { getCookie } from 'cookies-next';
import { REPUBLIQUEI_JWT, USUARIO_ID } from '~/utils';
import { parseCookies } from 'nookies';

type stepComponentType = {
	id: number;
	name: string;
	step: number;
	check: boolean[];
};

const StepComponent = ({ id, name, step, check }: stepComponentType) => {
	return (
		<div className="flex items-center font-sans">
			{check[id - 1] ? (
				<div
					className={`px-4 py-4 drop-shadow-xl shadow-md rounded-lg translate-y-4 bg-green-500 text-white`}
				>
					<span className="text-gray-200">
						<BsCheckLg />
					</span>
				</div>
			) : (
				<div
					className={`px-4 py-2 drop-shadow-xl shadow-md rounded-lg translate-y-4 ${
						step === id ? 'bg-sky-500 text-white' : 'bg-[#F8F9FA]'
					}`}
				>
					<h3 className="font-bold text-xl leading-6">{id}</h3>
				</div>
			)}
			<div className="px-4 py-2 translate-y-4">
				<h3
					className={`text-sky-500 py-2 font-semibold leading-tight ml-2 self-center ${
						step === id ? 'text-sky-500' : ''
					}`}
				>
					{name}
				</h3>
			</div>
		</div>
	);
};

const AnunciarRepublica: NextPage = () => {
	useEffect(() => {
		if (getCookie(REPUBLIQUEI_JWT) == null) {
			router.push('/');
		}
	}, []);

	const validationSchema = yup.object().shape({
		...nomeImovel.fields,
		...midiaImovel.fields,
		...enderecoImovel.fields,
		...caracteristicasImovel.fields,
		...descricaoRepublica.fields,
		...RegrasComordidadesYup.fields,
		...valor.fields,
	});

	const formMethods = useForm<Imovel>({
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
		defaultValues: {
			tipoSexo: '',
			tipoImovel: '',
			tipoQuarto: '',
			capacidadePessoas: 0,
			quantidadeBanheiros: 0,
			quantidadeQuartos: 0,
		},
	});
	const formComponents = [
		<Titulo />,
		<Fotos />,
		<Endereco />,
		<Caracteristicas />,
		<Descricao />,
		<RegrasComordidades />,
		<Valor />,
	];
	const [step, setStep] = useState<number>(0);
	const [check, setCheck] = useState<boolean[]>(
		new Array(formComponents.length).fill(false),
	);

	function previousStep() {
		if (step === 0) return;
		setStep(step - 1);
	}

	function nextStep() {
		if (step === formComponents.length) return;
		setCheck((oldChecks) => {
			const newChecks = [...oldChecks];
			for (let i = 0; i <= step; i++) {
				newChecks[i] = true;
			}
			return newChecks;
		});
		setStep(step + 1);
	}

	const onSubmit = (data: Imovel) => {
		console.log('Nome do Imóvel:', data.nomeImovel);
		console.log(data);

		const criarImovel = {
			midia:
				'https://images.unsplash.com/photo-1651932809880-bfd75fe113e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
			capacidadePessoas: data.capacidadePessoas,
			valor: data.valor,
			descricao: data.descricao,
			possuiAcessibilidade: data.possuiAcessibilidade,
			possuiGaragem: data.possuiGaragem,
			possuiAcademia: data.possuiAcademia,
			possuiMobilia: data.possuiMobilia,
			possuiAreaLazer: data.possuiAreaLazer,
			possuiPiscina: data.possuiPiscina,
			quantidadeBanheiros: data.quantidadeBanheiros,
			quantidadeQuartos: data.quantidadeQuartos,
			nomeImovel: data.nomeImovel,
			regraImovel: {
				fumante: data.fumante,
				animal: data.animal,
				alcool: data.alcool,
				visitas: data.visitas,
				crianca: data.crianca,
				drogas: data.drogas,
			},
			caracteristicaImovel: {
				tipoImovel: data.tipoImovel,
				tipoQuarto: data.tipoQuarto,
				tipoSexo: data.tipoSexo,
			},
			enderecoImovel: {
				cep: data.cep.replace(/[^0-9]/g, ''),
				estado: data.uf,
				cidade: data.cidade,
				bairro: data.bairro,
				logradouro: data.logradouro,
				numero: data.numero,
				complemento: data.complemento,
			},
			idUsuario: Number(getCookie(USUARIO_ID)),
			verificado: false,
			universidadeProxima: 'USP',
		};

		setTimeout(() => {
			toast.success('Imovel cadastrado com sucesso!', {
				position: toast.POSITION.BOTTOM_LEFT,
			});

			router.push({ pathname: '/meusAnuncios' });
		}, 1000);

		console.log(criarImovel);

		api
			.post('/Imovel/InserirImovel', criarImovel)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<FormProvider {...formMethods}>
			<NavBar />
			<main className="flex flex-row m-16 items-center justify-center">
				<section className="bg-[#F8F9FA] py-8 rounded-lg shadow-md border w-2/6 flex flex-col gap-2 pl-8">
					<h2 className="text-[#212529] font-bold text-2xl leading-7 text-left align-top">
						Anunciar Republica
					</h2>
					<div className="px-4 py-2">
						<StepComponent id={1} name="Titulo" step={step} check={check} />
						<StepComponent id={2} name="Fotos" step={step} check={check} />
						<StepComponent id={3} name="Endereço" step={step} check={check} />
						<StepComponent
							id={4}
							name="Características"
							step={step}
							check={check}
						/>
						<StepComponent id={5} name="Descrição" step={step} check={check} />
						<StepComponent id={6} name="Regras" step={step} check={check} />
						<StepComponent id={7} name="Valor" step={step} check={check} />
					</div>
				</section>
				<form
					onSubmit={formMethods.handleSubmit(onSubmit)}
					className="flex flex-col gap-4  items-center justify-center w-full"
				>
					{formComponents[step]}
					<div className="flex flex-row justify-around space-x-56 w-full">
						<span
							className={`w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 
                text-white font-semibold rounded-lg px-4 py-3 mt-6 
                cursor-pointer ${step !== 0 ? 'visible' : 'invisible'}`}
							onClick={previousStep}
						>
							Voltar
						</span>
						{step === formComponents.length - 1 ? (
							<button
								type="submit"
								className="w-30 block bg-green-500 hover:bg-green-400 focus:bg-green-400
                  text-white font-semibold rounded-lg px-4 py-3 mt-6"
							>
								Finalizar
							</button>
						) : (
							<a
								className={`w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 
                  text-white font-semibold rounded-lg px-4 py-3 mt-6 cursor-pointer  
                  ${
										step !== formComponents.length - 1 ? 'visible' : 'invisible'
									}`}
								onClick={nextStep}
							>
								Avançar
							</a>
						)}
					</div>
				</form>
			</main>

			<Footer />
		</FormProvider>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const cookies = parseCookies(context);

	if (!cookies[REPUBLIQUEI_JWT])
		return {
			redirect: {
				permanent: false,
				destination: '/',
			},
		};
	return {
		props: {},
	};
};

export default AnunciarRepublica;
