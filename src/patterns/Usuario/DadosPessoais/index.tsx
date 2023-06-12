import {
	estadoCivil,
	sexo,
	genero,
	orientacaoSexual,
	religiao,
} from '../../../utils/constants/options';
import Select from '../../../components/Formulario/Select';
import InputMask from 'react-input-mask';

export default function DadosPessoais({ errors, register }: any) {
	console.log(errors.sobrenome);

	return (
		<section>
			<div className="grid sm:grid-cols-1 md:grid-cols-4 md:gap-6">
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="nome"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Nome
					</label>
					<input
						{...register('nome')}
						type="text"
						id="nome"
						placeholder="Digite o seu nome"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.nome && (
						<span className="text-sm text-red-500">{errors.nome.message}</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="sobrenome"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Sobrenome
					</label>
					<input
						{...register('sobrenome')}
						type="text"
						id="sobrenome"
						placeholder="Digite o seu nome"
						min={0}
						max={40}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.sobrenome && (
						<span className="text-sm text-red-500">
							{errors.sobrenome.message}
						</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="cpf"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						CPF
					</label>
					<InputMask
						{...register('cpf')}
						type="text"
						placeholder="Digite o seu cpf"
						id="cpf"
						mask="999.999.999-99"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.cpf && (
						<span className="text-sm text-red-500">{errors.cpf.message}</span>
					)}
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="dataNascimento"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Data Nascimento
					</label>
					<input
						{...register('dataNascimento')}
						type="date"
						id="dataNascimento"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.dataNascimento && (
						<span className="text-sm text-red-500">
							{errors.dataNascimento.message}
						</span>
					)}
				</div>
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-6">
				<Select
					id="estadoCivil"
					title="Estado Civil"
					options={estadoCivil}
					mensagemDeErro={errors}
					register={register}
					onChange={undefined}
					name={''}
				/>
				<Select
					id="sexo"
					title="Sexo"
					options={sexo}
					mensagemDeErro={errors}
					register={register}
					onChange={undefined}
					name={''}
				/>
				<Select
					title="Genero"
					id="genero"
					options={genero}
					mensagemDeErro={errors}
					register={register}
					onChange={undefined}
					name={''}
				/>
				<Select
					title="Orientação Sexual"
					id="orientacaoSexual"
					options={orientacaoSexual}
					mensagemDeErro={errors}
					register={register}
					onChange={undefined}
					name={''}
				/>
				<Select
					id="religiao"
					title="Religiao"
					options={religiao}
					mensagemDeErro={errors}
					register={register}
					onChange={undefined}
					name={''}
				/>
				<div className="relative z-0 mb-6 w-full group">
					<label
						htmlFor="areaInteresse"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Area Interesse
					</label>
					<input
						{...register('areaInteresse')}
						type="text"
						id="areaInteresse"
						placeholder="Digite sua area de interesse"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
					{errors.areaInteresse && (
						<span className="text-sm text-red-500">
							{errors.areaInteresse.message}
						</span>
					)}
				</div>
			</div>
		</section>
	);
}
