import * as yup from 'yup';

const LoginTypes = yup.object({
    email: yup.string().required("O campo email é obrigatório"),
    senha: yup.string().required("O campo password é obrigatório").min(4, "A senha deve conter mais de 4 caracteres"),
  });


export default LoginTypes;