import * as yup from 'yup';

let registerForm = yup.object().shape({
    nome: yup.string().max(20).required('O campo nome é obrigatório'),
    sobrenome: yup.string().max(30).required('O campo sobrenome é obrigatório'),
    cpf: yup.string().required('O campo CPF é obrigatorio'),
    dataNascimento: yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo data de nascimento é obrigatório'),
    estadoCivil: yup.string().required('O campo estado civil é obrigatorio'),
    sexo: yup.string().required('O campo sexo é obrigatório'),
    genero: yup.string().required('O campo genero é obrigatório'),
    email: yup.string().email().required('O campo email é obrigatório'),
    telefone: yup.number().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo telefone é obrigatório').positive().integer('O campo deve conter numero inteiro'),
    celular: yup.number().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo celular é obrigatório').positive().integer('O campo deve conter numero inteiro'),
    cep: yup.string().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo cep é obrigatório'),
    logradouro: yup.string().required('O campo endereco é obrigatório'),
    numeroCasa: yup.number().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo número casa é obrigatório'),
    bairro: yup.string().required('O campo bairro é obrigatório'),
    localidade: yup.string().required('O campo cidade é obrigatório'),
    uf: yup.string().required('O campo UF é obrigatório'),
    senha: yup.string().required('O campo password é obrigatório').min(4).max(10),
    proprietario: yup.bool().notRequired()
})

export default registerForm;