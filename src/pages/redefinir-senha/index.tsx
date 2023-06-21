import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import Head from '~/infra/components/Head';
import LoginTypes from '~/validations/loginForm';
import { User } from '~/service';
import { Login } from '~/types/User';
import { useRouter } from 'next/router';

function RedefinirSenha() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Login>({
		mode: 'onBlur',
	});


    const router = useRouter()
    const email = router.query?.email


const handleRedifinirSenha = async (data: Login) => {
    const tokenDecoded = router.asPath.replace(/.*token=/, '')
    const tokenEncoded = encodeURIComponent(tokenDecoded);
    if(tokenEncoded){
    
	console.log(tokenEncoded);
	try {
		await User.redefinirSenha(email, data.novasenha, tokenEncoded);
	} catch (err) {
		console.log('Erro ao fazer solicitar alteracao de senha', err);
	}
}
};


	return (
		<section className="flex flex-col md:flex-row h-screen items-center">
			<Head title="Login" />
			<ToastContainer />
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

					<h1 className="text-xl text-slate-950 md:text-2xl font-bold leading-tight mt-12 mb-2">
                    Cadastrar nova senha
					</h1>
					<form
						className="mt-6"
						onSubmitCapture={handleSubmit(handleRedifinirSenha)}
					>
						<div>
							<label className="block font-semibold text-gray-700">Nova senha</label>
							<input
								{...register('senha')}
								type="password"
								id="senha"
								placeholder="Insira uma nova senha"
								className="w-full px-4 py-3 rounded-md bg-gray-100 mt-2 "
							/>
							{errors.senha && (
								<span className="text-red-500 text-sm">
									{errors.senha?.message}
								</span>
							)}
						</div>
						<div>
							<label className="block font-semibold text-gray-700">Repetir nova senha</label>
							<input
								{...register('novasenha')}
								type="password"
								id="novasenha"
								placeholder="Repita a senha"
								className="w-full px-4 py-3 rounded-md bg-gray-100 mt-2 "
							/>
							{errors.novasenha && (
								<span className="text-red-500 text-sm">
									{errors.novasenha?.message}
								</span>
							)}
						</div>
						<button
							type="submit"
							className="w-full bg-sky-500 hover:bg-sky-600 
								text-white font-semibold text-lg
								shadow-xl drop-shadow-md rounded-lg p-4 mt-6 uppercase"
						>
							Alterar senha
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
	);
}

export default RedefinirSenha;
