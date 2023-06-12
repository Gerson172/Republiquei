import { FormEvent } from 'react';
import InputMask from 'react-input-mask';

export default function Endereco({ errors, register, obterEndereco }: any) {
	return (
		<section>
			<div className="grid md:grid-cols-3 md:gap-6">
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="cep"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Cep
					</label>
					<InputMask
						{...register('cep', {
							onChange: (e: FormEvent<HTMLInputElement>) =>
								obterEndereco ? obterEndereco(e.currentTarget.value) : null,
						})}
					
						placeholder="Digite o seu cep"
						id="cep"
						mask="99999-999"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.cep && (
						<span className="text-sm text-red-500">{errors.cep.message}</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="logradouro"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Endereço
					</label>
					<input
						{...register('logradouro')}
						type="text"
						id="logradouro"
						readOnly
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.logradouro && (
						<span className="text-sm text-red-500">
							{errors.logradouro.message}
						</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="numeroCasa"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Número
					</label>
					<input
						{...register('numeroCasa')}
						type="text"
						id="numeroCasa"
						placeholder="Digite o número da sua residência"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.numeroCasa && (
						<span className="text-sm text-red-500">
							{errors.numeroCasa.message}
						</span>
					)}
				</div>
			</div>
			<div className="grid md:grid-cols-3 md:gap-6">
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="bairro"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Bairro
					</label>
					<input
						{...register('bairro')}
						type="text"
						id="bairro"
						readOnly
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.bairro && (
						<span className="text-sm text-red-500">
							{errors.bairro.message}
						</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="localidade"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Cidade
					</label>
					<input
						{...register('cidade')}
						type="text"
						id="localidade"
						readOnly
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.localidade && (
						<span className="text-sm text-red-500">
							{errors.localidade.message}
						</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="localidade"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Estado
					</label>
					<input
						{...register('estado')}
						type="text"
						id="estado"
						readOnly						
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.localidade && (
						<span className="text-sm text-red-500">
							{errors.localidade.message}
						</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="complemento"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Complemento
					</label>
					<input
						{...register('complemento')}
						type="text"
						id="complemento"
						placeholder="Digite algum complemento"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.complemento && (
						<span className="text-sm text-red-500">
							{errors.complemento.message}
						</span>
					)}
				</div>
			</div>
		</section>
	);
}
