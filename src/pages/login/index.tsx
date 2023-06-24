import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { Login } from '../../types/User';
import LoginTypes from '../../validations/loginForm';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../../infra/components/Head';

import { User } from '~/service';

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Login>({
		mode: 'onBlur',
	});



	function handleSignIn(data: Login){
		try {
			User.signIn(data, {});
			setTimeout(() => {
				Router.push('/');
			}, 800);
		} catch (err) {
			console.log('Erro ao fazer login:', err);
		}
	};

	return (
		<>
			<Head title="Login" />
			<section className="flex flex-col md:flex-row h-screen items-center">
				<div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
					<Image
						src="/login.jpg"
						alt=""
						className="w-full h-screen object-cover"
						width={800}
						height={600}
					/>
				</div>

				<div
					className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
				>
					<div className="w-full h-100">
						<a className="flex flex-row items-center gap-x-2">
							<Image src="/favicon.png" width={70} height={70} alt="logo" />
							<h2 className="text-4xl font-bold text-sky-500 uppercase">
								Republiquei
							</h2>
						</a>

						<h1 className="text-xl text-slate-950 md:text-2xl font-bold leading-tight mt-12">
							Faça login na sua conta
						</h1>

						<form className="mt-6" onSubmitCapture={handleSubmit(handleSignIn)}>
							<div>
								<label className="block font-semibold text-gray-700">
									Email
								</label>
								<input
									{...register('email')}
									type="text"
									id="email"
									autoComplete="current-email"
									placeholder="Insira o email"
									className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
								/>
								{errors.email && (
									<span className="text-red-500 text-sm">
										{errors.email?.message}
									</span>
								)}
							</div>

							<div className="mt-4">
								<label className="block font-semibold text-gray-700">
									Senha
								</label>
								<input
									{...register('senha')}
									type="password"
									id="senha"
									autoComplete="current-password"
									placeholder="Insira a senha"
									className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
								/>
								{errors.senha && (
									<span className="text-red-500 text-sm">
										{errors.senha?.message}
									</span>
								)}
							</div>

							<div className="text-right mt-2">
								<Link
									className="text-sm font-semibold text-gray-900
									 hover:text-blue-700 focus:text-blue-700"
									href="/confirmarEmail"
								>
									Esqueceu a senha?
								</Link>
							</div>
							<button
								type="submit"
								className="w-full bg-sky-500 hover:bg-sky-600 
								text-white font-semibold text-lg
								shadow-xl drop-shadow-md rounded-lg p-4 mt-6 uppercase"
							>
								Entrar
							</button>
						</form>

						<p className="mt-8 text-center text-slate-950">
							Não possui conta?
							<Link
								href="/cadastrar"
								className="text-sky-500 hover:text-sky-600 ml-1 font-semibold"
							>
								Criar uma conta
							</Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;
