import CardRepublicas from '../../components/Republicas/CardRepublicas';
import Footer from '../../components/Funcionalidade/Footer';
import { IoIosOptions } from 'react-icons/io';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useDeferredValue } from 'react';
import Head from '../../infra/components/Head';
import NavBar from '~/components/NavBar';
import { useQuery } from 'react-query';
import { Republica } from '~/service';

function BuscarRepublica() {
	const { data } = useQuery(
		'todasRepublicas',
		() => Republica.ObterImovel(),
	);
	const { cidade, bairro, aluguel, tipo, pessoas, universidade } =
		useRouter().query;

	const cidadeString = typeof cidade === 'string' ? cidade : '';
	const bairroString = typeof bairro === 'string' ? bairro : '';
	const tipoString = typeof tipo === 'string' ? tipo : '';
	const pessoasString = typeof pessoas === 'string' ? pessoas : '';
	const universidadeString =
		typeof universidade === 'string' ? universidade : '';

	const [filtroDeCidade, setfiltroDeCidade] = useState<string>(
		cidadeString || '',
	);
	const [filtroDeAluguel, setfiltroDeAluguel] = useState(aluguel || '');
	const [filtroQTDPessoas, setfiltroQTDPessoas] = useState(pessoasString || 0);
	const [filtroDeBairro, setfiltroDeBairro] = useState<string>(
		bairroString || '',
	);
	const [filtroDeTipoImovel, setfiltroDeTipoImovel] = useState<string>(
		tipoString || '',
	);
	const [filtroDeUniversidade, setfiltroDeUniversidade] = useState<string>(
		universidadeString || '',
	);

	const [openFilter, setOpenFilter] = useState(false);

	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 9;

	const filteredData = data
		? data.filter((item:any) => {
			const cidadePass = item.cidade
				.toLowerCase()
				.includes(filtroDeCidade.toLowerCase());
			const aluguelPass =
				item.valor <= Number(filtroDeAluguel) ||
				Number(filtroDeAluguel) === 0;
			const qtdPessoasPass =
				item.capacidadePessoas >= Number(filtroQTDPessoas) ||
				Number(filtroQTDPessoas) === 0;
			const bairroPass = item.bairro
				.toLowerCase()
				.includes(filtroDeBairro.toLowerCase());
			const tipoImovelPass = item.tipoImovel
				.toLowerCase()
				.includes(filtroDeTipoImovel.toLowerCase());

			return (
				cidadePass &&
				aluguelPass &&
				qtdPessoasPass &&
				bairroPass &&
				tipoImovelPass
			);
		})
		: [];

	const deferredData = useDeferredValue(filteredData);

	const filteredDataPaginated = deferredData?.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage,
	);

	const mappedData = [...filteredDataPaginated].reverse().map((props:any, index:any) => {
		return <CardRepublicas key={index} {...props} />;
	});
	

	const tamanhoMappedData = filteredData.length;

	const handleOpenFilter = () =>
		!openFilter ? setOpenFilter(true) : setOpenFilter(false);

	const handlePageClick = (data: any) => {
		setCurrentPage(data.selected);
	};

	return (
		<>
			<Head title="Buscar Republicas" />
			<NavBar />
			<section
				className={`${!openFilter ? 'hidden' : ''} 
          pt-16 px-36 max-sm:px-4`}
			>
				<form className="grid grid-rows-2 grid-cols-2 max-sm:grid-cols-1 gap-2">
					<div className="col-span-1">
						<label className="block mb-2 font-bold" htmlFor="cidade">
							Cidade
						</label>
						<div className="relative flex w-full">
							<input
								className="w-full px-3 py-2 border rounded mr-2"
								placeholder="Busque por cidade"
								type="text"
								value={filtroDeCidade}
								onChange={(e) => setfiltroDeCidade(e.target.value)}
							/>
							<span className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
								<BiSearch />
							</span>
						</div>
						<div>
							<label className="block mt-4 mb-2 font-bold" htmlFor="aluguel">
								Aluguel
							</label>
							<div className="relative flex w-full">
								<span className="absolute left-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
									R$
								</span>
								<input
									className="w-full pl-10 py-2 border rounded"
									type="number"
									id="aluguel"
									name="aluguel"
									placeholder="Escolha o valor"
									value={filtroDeAluguel}
									onChange={(e) => setfiltroDeAluguel(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>

					<div className="col-span-1">
						<label className="block mb-2 font-bold" htmlFor="bairro">
							Bairro
						</label>
						<div className="relative flex w-full">
							<input
								className="w-full px-3 py-2 border rounded mr-2"
								placeholder="Busque por bairro"
								value={filtroDeBairro}
								onChange={(e) => setfiltroDeBairro(e.target.value)}
								type="text"
							/>
							<span className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
								<BiSearch />
							</span>
						</div>
						<div>
							<label className="block mt-4 mb-2 font-bold" htmlFor="tipo">
								Tipo
							</label>
							<input
								className="w-full px-3 py-2 border rounded"
								type="text"
								id="tipo"
								name="tipo"
								placeholder="EX: Apartamento, Casa"
								value={filtroDeTipoImovel}
								onChange={(e) => setfiltroDeTipoImovel(e.target.value)}
								required
							/>
						</div>
					</div>

					<div className="col-span-1">
						<label className="block mt-4 mb-2 font-bold" htmlFor="pessoas">
							Pessoas
						</label>
						<input
							className="w-full px-3 py-2 border rounded"
							type="number"
							id="pessoas"
							name="pessoas"
							placeholder="Escolha a quantidade"
							value={filtroQTDPessoas}
							onChange={(e) => setfiltroQTDPessoas(e.target.value)}
							required
						/>
					</div>

					<div className="col-span-1">
						<label className="block mt-4 mb-2 font-bold" htmlFor="universidade">
							Universidade
						</label>
						<input
							className="w-full px-3 py-2 border rounded"
							type="text"
							id="universidade"
							name="universidade"
							placeholder="Escolha a universidade"
							value={filtroDeUniversidade}
							onChange={(e) => setfiltroDeUniversidade(e.target.value)}
							required
							disabled
						/>
					</div>
				</form>
			</section>

			<section className="w-full h-full container my-12 mx-auto scrollbar-track-sky-300 ">
				<div className="result-info flex items-center justify-between mb-6 mx-8 md:mx-48">
					<h2 className="text-xl font-sans text-slate-800 font-bold">
						{tamanhoMappedData} repúblicas para morar 

					</h2>
					<span
						className="p-4 bg-slate-800 text-white cursor-pointer hover:bg-slate-600 flex flex-row items-center gap-2 rounded-md"
						onClick={handleOpenFilter}
					>
						<IoIosOptions></IoIosOptions>Filtros
					</span>
				</div>

				<div className="grid justify-center grid-cols-1 md:px-40 gap-x-52  2xl:gap-x-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
					{mappedData}
				</div>

				{data?.length && (
					<ReactPaginate
						previousLabel={'← Anterior'}
						nextLabel={'Próximo →'}
						pageCount={Math.ceil(data.length / itemsPerPage)}
						marginPagesDisplayed={1}
						pageRangeDisplayed={2}
						onPageChange={handlePageClick}
						renderOnZeroPageCount={null}
						containerClassName={
							'flex justify-center items-center mt-4 space-x-2'
						}
						pageClassName={'border border-slate-500 rounded-md'}
						pageLinkClassName={'px-4 font-semibold '}
						previousClassName={'rounded-md'}
						previousLinkClassName={
							'py-2 px-4 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300'
						}
						nextClassName={'rounded-md'}
						nextLinkClassName={
							'py-2 px-4 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300'
						}
						breakClassName={'rounded-md'}
						breakLinkClassName={
							'py-2 px-4 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300'
						}
						activeClassName={
							'active bg-sky-500 text-white font-semibold rounded-md'
						}
					/>
				)}
			</section>
			<Footer />
		</>
	);
}

export default BuscarRepublica;
