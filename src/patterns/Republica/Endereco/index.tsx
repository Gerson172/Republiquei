import { FormEvent, useEffect } from 'react';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';
import { Imovel } from '~/types/Imovel';
import InputMask from 'react-input-mask';
import viacep, { viaCepType } from '~/infra/api/viacep';

export default function Endereco() {
	const {
		register,
		formState: { errors },
		setValue,
		getValues,
		watch,
	} = useFormContext<Imovel>();

	async function buscarEnderecoPorCep(cep: string) {
		try {
			const cepApenasNumero = cep.replace(/[^0-9]/g, '');

			if (cepApenasNumero.length !== 8) {
				return;
			}

			const { data } = await viacep.get<viaCepType>(`${cepApenasNumero}/json/`);

			setValue('logradouro', data.logradouro);
			setValue('uf', data.uf);
			setValue('bairro', data.bairro);
			setValue('cidade', data.localidade);
		} catch (error) {
			console.log(error);
		}
	}

	const onSubmit = (data: Imovel) => console.log(data);

	return (
		<section className="flex flex-col gap-8 w-10/12">
			<div className="flex flex-col gap-6">
				<h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">
					Endereço da
					<span className="text-sky-500 font-bold pl-1">República</span>
				</h2>
				<p
					className="text-[#212529] font-roboto font-normal text-base leading-[18.75px]
            text-left align-middle"
				>
					Informe o endereço de localização da sua república.
				</p>
			</div>
			<div className="flex space-x-4 space-y-4">
				<InputMask
					{...register('cep', {
						onChange: (e: FormEvent<HTMLInputElement>) =>
							buscarEnderecoPorCep
								? buscarEnderecoPorCep(e.currentTarget.value)
								: null,
					})}
					placeholder="Digite o seu cep"
					id="cep"
					mask="99999-999"
					className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
				/>

				<input
					{...register('logradouro')}
					type="text"
					name="logradouro"
					className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
					id="logradouro"
					placeholder="Endereço"
				/>
				{errors.logradouro && (
					<span className="text-sm text-red-500">
						{errors.logradouro.message}
					</span>
				)}
			</div>
			<div className="flex space-x-4">
				<input
					{...register('numero')}
					type="text"
					name="numero"
					className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
					id="numero"
					placeholder="Número"
				/>
				<input
					{...register('bairro')}
					type="text"
					name="bairro"
					className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
					id="bairro"
					placeholder="Bairro"
				/>
				<input
					{...register('cidade')}
					type="text"
					name="cidade"
					className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
					id="cidade"
					placeholder="Cidade"
				/>
			</div>
			<div className="flex space-x-4 space-y-4">
				<input
					{...register('uf')}
					type="text"
					name="uf"
					className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
					id="uf"
					placeholder="Estado"
				/>
				<input
					{...register('complemento')}
					type="text"
					name="complemento"
					className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
					id="complemento"
					placeholder="Complemento"
				/>
			</div>
		</section>
	);
}
