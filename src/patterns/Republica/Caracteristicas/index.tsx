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

export default function Caracteristicas() {
	const { register, setValue, watch } = useFormContext();

	console.log(watch('feminino'))

	const [selectedTipoSexo, setSelectedTipoSexo] = useState('');
	const [selectedTipoImovel, setSelectedTipoImovel] = useState('');
	const [selectedTipoQuarto, setSelectedTipoQuarto] = useState('');
	
	const capacidadePessoas = watch('capacidadePessoas', 0);
	
	const AddQuantidadeMoradoresChange = () => {
		setValue('capacidadePessoas', Math.min(capacidadePessoas + 1, 10));
	  }
	
	  const RemoveQuantidadeMoradoresChange = () => {
		setValue('capacidadePessoas', Math.max(capacidadePessoas - 1, 0));
	  }



	const handleTipoQuartoChange = (value: string) => {
		setSelectedTipoQuarto(value);
	};

	const handleTipoSexo = (value: string) => {
		setSelectedTipoSexo(value);
	};

	const handleTipoImovelChange = (value: string) => {
		setSelectedTipoImovel(value);
	};

	return (
		<section className="flex flex-col gap-8 w-10/12">
			<h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">
				Características da
				<span className="text-sky-500 font-bold pl-1">República</span>
			</h2>
			<p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px] text-left align-middle">
				Afinal, quais são as características da sua república? Conte um pouco
				para nós.
			</p>
			<form className="space-t-2">
				<div>
					<h2>Tipo de República</h2>
					<div className="flex items-center space-x-4">
						<label
							htmlFor="feminino"
							className={`flex items-center p-4 space-x-2`}
						>
							<input
								type="radio"
								id="feminino"
								value="feminino"
								{...register('tipoSexo')}
								checked={selectedTipoSexo === 'feminino'}
								onChange={() => handleTipoSexo('feminino')}
							/>
							<FaFemale />
							<span>Feminino</span>
						</label>
						<label
							htmlFor="masculino"
							className={`flex items-center p-4 space-x-2`}
						>
							<input
								type="radio"
								id="masculino"
								value="masculino"
								{...register('tipoSexo')}
								checked={selectedTipoSexo === 'masculino'}
								onChange={() => handleTipoSexo('masculino')}
							/>
							<FaMale />
							<span>Masculino</span>
						</label>
						<label
							htmlFor="mista"
							className={`flex items-center p-4 space-x-2`}
						>
							<input
								type="radio"
								id="mista"
								value="mista"
								{...register('tipoSexo')}
								checked={selectedTipoSexo === 'mista'}
								onChange={() => handleTipoSexo('mista')}
							/>
							<FaUsers />
							<span>Mista</span>
						</label>
					</div>
				</div>
				<div>
					<h2>Tipo de Imóvel</h2>
					<div className="flex items-center space-x-4">
						<label
							htmlFor="apartamento"
							className={`flex items-center p-4 space-x-2`}
						>
							<input
								type="radio"
								id="apartamento"
								value="apartamento"
								{...register('tipoImovel')}
								checked={selectedTipoImovel === 'apartamento'}
								onChange={() => handleTipoImovelChange('apartamento')}
							/>
							<FaBuilding />
							<span>Apartamento</span>
						</label>
						<label htmlFor="casa" className={`flex items-center p-4 space-x-2`}>
							<input
								type="radio"
								id="casa"
								value="casa"
								{...register('tipoImovel')}
								checked={selectedTipoImovel === 'casa'}
								onChange={() => handleTipoImovelChange('casa')}
							/>
							<FaHome />
							<span>Casa</span>
						</label>
					</div>
				</div>
				<div>
					<h2>Tipo de Quarto</h2>
					<div className="flex items-center space-x-4">
						<label
							htmlFor="individual"
							className={`flex items-center p-4 space-x-2`}
						>
							<input
								type="radio"
								id="individual"
								value="individual"
								{...register('tipoQuarto')}
								checked={selectedTipoQuarto === 'individual'}
								onChange={() => handleTipoQuartoChange('individual')}
							/>
							<FaBed />
							<span>Individual</span>
						</label>
						<label
							htmlFor="compartilhado"
							className={`flex items-center p-4 space-x-2`}
						>
							<input
								type="radio"
								id="compartilhado"
								value="compartilhado"
								{...register('tipoQuarto')}
								checked={selectedTipoQuarto === 'compartilhado'}
								onChange={() => handleTipoQuartoChange('compartilhado')}
							/>
							<FaUsers />
							<span>Compartilhado</span>
						</label>
					</div>
				</div>
				<div></div>
				<div>
					<h2>Quantidade de Moradores</h2>
					<div className="flex items-center space-x-4">
						<button
							type="button"
							className="flex items-center bg-red-500 text-white w-6 h-6 btn-circle justify-center"
							onClick={RemoveQuantidadeMoradoresChange}
						>
							<FaMinus className="text-white" />
						</button>
						<input
							value={capacidadePessoas}
							className="text-center"
							disabled
							{...register('capacidadePessoas')}
						/>
						<button
							type="button"
							className="flex items-center space-x-2 bg-green-500 text-white px-2 py-1 rounded"
							onClick={AddQuantidadeMoradoresChange}
						>
							<FaPlus className="text-white" />
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}
