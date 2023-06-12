import * as yup from 'yup';

const dadosPessoais = yup.object().shape({
	nome: yup
		.string()
		.max(20, 'O campo nome deve conter no máximo 20 caracteres')
		.required('O campo nome é obrigatório'),
	sobrenome: yup
		.string()
		.max(30, 'O campo sobrenome deve conter no máximo 30 caracteres')
		.required('O campo sobrenome é obrigatório'),
	cpf: yup.string().max(14).required('O campo CPF é obrigatorio'),
	dataNascimento: yup
		.date()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.required('O campo data de nascimento é obrigatório'),
	estadoCivil: yup.string().required('O campo estado civil é obrigatorio'),
	sexo: yup.string().required('O campo sexo é obrigatório'),
	genero: yup.string().required('O campo genero é obrigatório'),
	orientacaoSexual: yup.string().notRequired(),
	religiao: yup.string().notRequired(),
	proprietario: yup.bool().notRequired(),
	areaInteresse: yup
		.string()
		.max(20, 'O campo nome deve conter no máximo 20 caracteres')
		.notRequired(),
});

const contato = yup.object().shape({
	telefone: yup.string().required('O campo telefone é obrigatório'),
	celular: yup.string().required('O campo celular é obrigatório'),
});

const endereco = yup.object().shape({
	cep: yup
		.string()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.required('O campo cep é obrigatório'),
	bairro: yup.string().required('O campo bairro é obrigatório'),
	numeroCasa: yup
		.string()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.required('O campo número casa é obrigatório'),
	logradouro: yup.string().required('O campo logradouro é obrigatório'),
	cidade: yup
		.string()
		.max(20, 'O campo nome deve conter no máximo 20 caracteres')
		.required(),
	complemento: yup.string().notRequired(),
	estado: yup
		.string()
		.required('O campo estado é obrigatório')
		.max(2, 'O campo nome deve conter no máximo 2 caracteres'),
});

const acessoUsuario = yup.object().shape({
	email: yup.string().email().required('O campo email é obrigatório'),
	senha: yup.string().required('O campo password é obrigatório').min(4).max(16),
});

export { dadosPessoais, endereco, contato, acessoUsuario };
