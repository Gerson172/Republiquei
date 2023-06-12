import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
	FaFemale,
	FaMale,
	FaUsers,
	FaHome,
	FaBuilding,
	FaBed,
	FaMinus,
	FaPlus,
} from 'react-icons/fa';

export default function RegrasComordidades() {
	const { register, watch, setValue } = useFormContext();

	const quantidadeBanheiros = watch('quantidadeBanheiros', 0);
	const quantidadeQuartos = watch('quantidadeQuartos', 0);
	return (
		<section className="flex flex-col gap-8 w-10/12">
			<h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">
				Regras e comodidades da
				<span className="text-sky-500 font-bold pl-1">República</span>
			</h2>
			<p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px] text-left align-middle">
				Adicione as regras de convivência e comodidade da sua república, ajudando a filtrar o melhor
				público para alugar a república.
			</p>
			<form className="space-t-2">
				<h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Regras</h3>
				<div className='grid grid-cols-3 gap-2'>
					<label htmlFor='fumante' className="inline-flex items-center cursor-pointer">
						<input
							{...register('fumante')}
							id='fumante'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Proibido fumar</span>
					</label>
					<label htmlFor='visitas' className="inline-flex items-center cursor-pointer">
						<input
							{...register('visitas')}
							id='visitas'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Proibido visitas</span>
					</label>
					<label htmlFor='crianca' className="inline-flex items-center cursor-pointer">
						<input
							{...register('crianca')}
							id='crianca'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Proibido criança</span>
					</label>
					<label htmlFor='animal' className="inline-flex items-center cursor-pointer">
						<input
							{...register('animal')}
							id='animal'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Proibido pets</span>
					</label>
					<label htmlFor='alcool' className="inline-flex items-center cursor-pointer">
						<input
							{...register('alcool')}
							id='alcool'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Proibido bebida alcólica</span>
					</label>

					<label htmlFor='drogas' className="inline-flex items-center cursor-pointer">
						<input
							{...register('drogas')}
							id='drogas'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Proibido drogas</span>
					</label>
				</div>

				<h3 className="my-4 font-semibold text-gray-900 dark:text-white">Comodidades</h3>
				<div className='grid grid-cols-3 gap-2'>
					<label htmlFor='possuiGaragem' className="inline-flex items-center cursor-pointer">
						<input
							{...register('possuiGaragem')}
							id='possuiGaragem'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Possui garagem</span>
					</label>
					<label htmlFor='possuiAcessibilidade' className="inline-flex items-center cursor-pointer">
						<input
							{...register('possuiAcessibilidade')}
							id='possuiAcessibilidade'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Possui acessibilidade</span>
					</label>
					<label htmlFor='possuiMobilia' className="inline-flex items-center cursor-pointer">
						<input
							{...register('possuiMobilia')}
							id='possuiMobilia'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Possui mobilia</span>
					</label>
					<label htmlFor='possuiAcademia' className="inline-flex items-center cursor-pointer">
						<input
							{...register('possuiAcademia')}
							id='possuiAcademia'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Possui academia</span>
					</label>
					<label htmlFor='possuiPiscina' className="inline-flex items-center cursor-pointer">
						<input
							{...register('possuiPiscina')}
							id='possuiPiscina'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Possui piscina</span>
					</label>

					<label htmlFor='possuiAreaLazer' className="inline-flex items-center cursor-pointer">
						<input
							{...register('possuiAreaLazer')}
							id='possuiAreaLazer'
							type="checkbox"
							className="form-checkbox h-5 w-5 text-sky-600"
						/>
						<span className="ml-2 text-gray-700">Possui área de lazer</span>
					</label>
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<div>
						<h2 className="my-4 font-semibold text-gray-900 dark:text-white">Quantidade de banheiros</h2>
						<div className="flex items-center">
							<button
								type="button"
								className="flex items-center bg-red-500 text-white w-6 h-6 btn-circle justify-center"
								onClick={() => setValue('quantidadeBanheiros', quantidadeBanheiros - 1)}
							>
								<FaMinus className="text-white" />
							</button>
							<input
								value={quantidadeBanheiros}
								className="text-center"
								disabled
								{...register('quantidadeBanheiros')}
							/>
							<button
								type="button"
								className="flex items-center bg-green-500 text-white px-2 py-1 rounded"
								onClick={() => setValue('quantidadeBanheiros', quantidadeBanheiros + 1)}							>
								<FaPlus className="text-white" />
							</button>
						</div>
					</div>
					<div>
						<h2 className="my-4 font-semibold text-gray-900 dark:text-white">Quantidade de quartos</h2>
						<div className="flex items-center">
							<button
								type="button"
								className="flex items-center bg-red-500 text-white w-6 h-6 btn-circle justify-center"
								onClick={() => setValue('quantidadeQuartos', quantidadeQuartos - 1)}>
								<FaMinus className="text-white" />
							</button>
							<input
								value={quantidadeQuartos}
								className="text-center"
								disabled
								{...register('quantidadeQuartos')}
							/>
							<button
								type="button"
								className="flex items-center bg-green-500 text-white px-2 py-1 rounded"
								onClick={() => setValue('quantidadeQuartos', quantidadeQuartos + 1)}>
								<FaPlus className="text-white" />
							</button>
						</div>
					</div>

				</div>

			</form>
		</section>
	);
}
