import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Login } from "../../types/User";
import LoginTypes from "../../validations/loginForm";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Head from "../../infra/components/Head";

import { User } from '~/service';


function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: 'onBlur',
    resolver: yupResolver(LoginTypes),
  });

  const handleSignIn = async (data: Login) => {
    try {
      await User.signIn(data, {});
      setTimeout(() => {
        Router.push('/')
      }, 800);
    } catch (err) {
      console.log('Erro ao fazer login:', err)
    }
  };


  return (
    <>
      <Head title="Login" />
      <ToastContainer />
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Image
            src="/login.jpeg"
            alt=""
            width={800}
            height={600}
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <a
              className="flex flex-row items-center gap-x-2">
              <Image src="/favicon.png" width={70} height={70} alt="logo" />
              <h2 className="text-4xl font-bold text-sky-500 uppercase">
                Republiquei
              </h2>
            </a>

            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Faça login na sua conta
            </h1>

            <form className="mt-6" onSubmitCapture={handleSubmit(handleSignIn)}>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  {...register("email")}
                  type="text"
                  id="email"
                  autoComplete="current-email"
                  placeholder="Insira o email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.email ==
                  (
                    <span className="text-red-500 text-sm">
                      {errors.email?.message}
                    </span>
                  )}
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Senha</label>
                <input
                  {...register("senha")}
                  type="password"
                  id="senha"
                  autoComplete="current-password"
                  placeholder="Insira a senha"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.senha ==
                  (
                    <span className="text-red-500 text-sm">
                      {errors.senha?.message}
                    </span>
                  )}
              </div>

              <div className="text-right mt-2">
                <a
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <button
                type="submit"
                className="w-full block bg-sky-500 hover:bg-sky-600 focus:bg-sky-600 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6"
              >
                Entrar
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />
            <p className="mt-8">
              Possui uma conta?
              <Link href="/cadastrar"
                className="text-sky-500 hover:text-sky-700 font-semibold">
                Criar uma conta
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
