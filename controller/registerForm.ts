import * as yup from 'yup';

let registerForm = yup.object().shape({
    nome: yup.string().max(20, "O campo nome deve conter no máximo 20 caracteres").required('O campo nome é obrigatório'),
    sobrenome: yup.string().max(30, "O campo sobrenome deve conter no máximo 30 caracteres").required('O campo sobrenome é obrigatório'),
    cpf: yup.string().max(14).required('O campo CPF é obrigatorio'),
    dataNascimento: yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo data de nascimento é obrigatório'),
    estadoCivil: yup.string().required('O campo estado civil é obrigatorio'),
    sexo: yup.string().required('O campo sexo é obrigatório'),
    genero: yup.string().required('O campo genero é obrigatório'),
    email: yup.string().email().required('O campo email é obrigatório'),
    telefone: yup.string().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo telefone é obrigatório'),
    celular: yup.string().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo celular é obrigatório'),
    cep: yup.string().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo cep é obrigatório'),
    logradouro: yup.string(),
    numeroCasa: yup.number().nullable().transform((curr, orig) => orig === '' ? null : curr).required('O campo número casa é obrigatório'),
    bairro: yup.string(),
    localidade: yup.string(),
    complemento: yup.string().notRequired(),
    uf: yup.string(),
    senha: yup.string().required('O campo password é obrigatório').min(4).max(10),
    proprietario: yup.bool().notRequired(),
})



export default registerForm;