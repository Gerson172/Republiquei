export default function CriarUsuario({ errors, register }: any) {
	return (
		<section className="flex flex-col space-y-8">
				<div>
					<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
						Email
					</label>
					<input
						{...register('email')}
						type="email"
						id="email"
						placeholder="Digite o seu email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.email && (
						<span className="text-sm text-red-500">{errors.email.message}</span>
					)}
				</div>
				<div>
					<label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900">
						Senha
					</label>
					<input
						{...register('senha')}
						type="password"
						id="senha"
						placeholder="Digite sua senha"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.senha && (
						<span className="text-sm text-red-500">{errors.senha.message}</span>
					)}
			</div>
		</section>


	);
}
