import * as yup from 'yup';

const LoginTypes = yup.object().shape({
	email: yup.string().required('O campo email é obrigatório'),
	senha: yup
		.string()
		.required('O campo password é obrigatório')
		.min(4, 'A senha deve conter mais de 4 caracteres'),
	novasenha: yup
		.string()
		.oneOf([yup.ref('senha'), null], 'As senhas não coincidem')
		.required('O campo password é obrigatório')
		.min(4, 'A senha deve conter mais de 4 caracteres'),
});

export default LoginTypes