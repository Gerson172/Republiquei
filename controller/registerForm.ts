import * as yup from 'yup';


const registerForm = yup.object().shape({
    email: yup.string().email().required(),
    nome: yup.string().required(),
    telefone: yup.number().required().positive().integer(),
    celular: yup.number().required().positive().integer(),
    cpf: yup.string().required(),
    dataNascimento: yup.date()
})

export default registerForm;