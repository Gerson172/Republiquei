import * as yup from 'yup';

const nomeImovel = yup.string().required('O título do anúncio é obrigatório').nullable();


const midiaImovel = yup.object().shape({

});


const enderecoImovel = yup.object().shape({
	cep: yup
		.string()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.required('O campo cep é obrigatório'),
});

const caracteristicasImovel = yup.object().shape({
	tipoImovel: yup.string(),
	tipoQuarto: yup.string(),
	tipoSexo: yup.string(),
	capacidadePessoas: yup.number(),
});

const RegrasComordidadesYup = yup.object().shape({
	fumante: yup.boolean(),
	animal: yup.boolean(),
	alcool: yup.boolean(),
	visitas: yup.boolean(),
	crianca: yup.boolean(),
	drogas: yup.boolean(),
	possuiAcessibilidade: yup.boolean(),
	possuiGaragem: yup.boolean(),
	possuiAcademia: yup.boolean(),
	possuiMobilia: yup.boolean(),
	possuiAreaLazer: yup.boolean(),
	possuiPiscina: yup.boolean(),
	quantidadeBanheiros: yup.number(),
	quantidadeQuartos: yup.number(),
});

const descricaoRepublica = yup.object().shape({
	descricao: yup.string(),
});

const valor = yup.number().required('Informe um valor válido').nullable();

const imovelForm = yup.object().shape({
	enderecoImovel,
	nomeImovel,
	caracteristicasImovel,
	valor,
	descricaoRepublica,
	RegrasComordidadesYup,
	midiaImovel,
	cep: yup.number().notRequired(),

	verificado: yup.boolean(),
	myProperty: yup.number(),
});

export {
	imovelForm,
	caracteristicasImovel,
	nomeImovel,
	midiaImovel,
	enderecoImovel,
	descricaoRepublica,
	RegrasComordidadesYup,
	valor,
};
