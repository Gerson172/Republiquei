import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Login } from "../../types/User";
import * as yup from 'yup'
import { useState } from "react";
import { useQuery } from 'react-query'
import api from "../../services/api";

function Login() {

    const LoginTypes = yup.object().shape({
        email: yup.string().email().required('O campo email é obrigatório'),
        senha: yup.string().required('O campo password é obrigatório').min(4, "A senha deve conter mais de 4 caracteres"),

    })

    const { register, handleSubmit, formState: { errors } } = useForm<Login>({
        resolver: yupResolver(LoginTypes)
    });

    const [ user, setUser ] = useState<any>();
    const [isValid, setIsValid] = useState(false);
    

    const {data, isFetching, isError} = useQuery<Login[]>('login', async () => {
        const response = await api.get('/Usuario/ObterUsuarioContato')
        return response.data.valor;
    })


    function handleSignIn(e: Login) {
        setUser(data?.filter((valor: any) => { return (valor.email == e.email) && valor.senha == e.senha; }));
        user?.length > 0 ? setIsValid(true) : setIsValid(false);
    }

    const id = user?.map((valor:any) => valor.id)
    console.log(id)

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            {isFetching && <p>Carregando....</p>}
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <Image src="/login.jpeg" alt="" layout="responsive" width={800} height={684} objectFit="cover" />
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

                <div className="w-full h-100">

                    <a className="flex flex-row items-center gap-x-2" href="javascript:void(0)">
                        <Image src="/favicon.png" width={70} height={70} alt="logo" />
                        <h2 className="text-4xl font-bold text-sky-500 uppercase">Republiquei</h2>
                    </a>

                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Faça login na sua conta</h1>

                    <form className="mt-6" onSubmit={handleSubmit(handleSignIn)}>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register('email')}
                                type="text"
                                id="email"
                                autoComplete="current-email"
                                placeholder="Insira o email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                            {errors.email == <span className="text-red-500 text-sm">{errors.email?.message}</span>}
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Senha</label>
                            <input
                                {...register('senha')}
                                type="password"
                                id="senha"
                                autoComplete="current-password" 
                                placeholder="Insira a senha"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                            {errors.senha == <span className="text-red-500 text-sm">{errors.senha?.message}</span>}
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Esqueceu a senha?</a>
                        </div>
                        {isValid == true ?
                            <Link href={`/dashboard/cadastrarRepublica?id=`+id}>
                                <button type="submit" className="w-full block bg-sky-500 hover:bg-sky-600 focus:bg-sky-600 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6">Entrar</button>
                            </Link>
                        : <button type="submit" className="w-full block bg-sky-500 hover:bg-sky-600 focus:bg-sky-600 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6">Entrar</button>
                    }

                    </form>

                    <hr className="my-6 border-gray-300 w-full" />


                    <p className="mt-8">Possui uma conta?<Link href="/register"><a className="text-sky-500 hover:text-sky-700 font-semibold">Criar uma conta</a></Link></p>


                </div>
            </div>

        </section>
    );
}

export default Login;


