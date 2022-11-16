import NavBar from "../../components/NavBar";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import viacep from "../../services/viacep";
import { type } from "os";


type Address = {
    cep: string,
    logradouro: string,
    numeroCasa: number,
    bairro: string,
    localidade: string
    uf: string
}

type User = {
    nome: string,
    sobrenome: string,
    cpf: string,
    sexo: string,
    estadoCivil: string,
    genero: string,
    dataNascimento: Date,
    endereco: Address
}

type Contact = {
    email: string,
    telefone: number,
    celular: number
}

type Register = {
    

}

function Register() {

    const [endereco, setEndereco] = useState<Address>();
    const [cep, setCep] = useState<string>();
    const [numeroCasa, setNumeroCasa] = useState<Address>();

    const [email, setEmail] = useState<Contact>();
    const [telefone, setTelefone] = useState<Contact>();
    const [celular, setCelular] = useState<Contact>();

    const [nome, setNome] = useState<User>()
    const [sobrenome, setSobrenome] = useState<User>()
    const [cpf, setCpf] = useState<User>();
    const [sexo, setSexo] = useState<User>();
    const [estadoCivil, setEstadoCivil] = useState<User>();
    const [genero, setGenero] = useState<User>();
    const [dataNascimento, setDataNascimento] = useState<User>();

    const [proprietario, setProprietario] = useState();

    async function obterUsuario(cep: string) {
        if (cep?.length !== 8) {
            return;
        }
        const response = await viacep.get(`${cep}/json/`)

        setEndereco(response.data)
        setCep(cep)
    }

    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data: Register) => console.log(data)


    return (
        <>
            <NavBar />
            <section className=" flex flex-col md:flex-row h-full md:h-screen items-center bg-white">
                <div className="md:max-w-md lg:max-w-full md:mx-auto h-full px-6 lg:px-16 xl:px-16 flex items-center justify-center" >
                    <div className="w-full h-full mb-8 py-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="mt-6 mb-3 text-xl md:text-2xl font-bold text-center text-gray-900">Dados pessoais</h2>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                                    <Controller
                                        {...register('nome', { required: true, maxLength: 20 })}
                                        name="nome"
                                        control={control}
                                        render={({ field }) => <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            {...field} />} />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="sobrenome" className="block mb-2 text-sm font-medium text-gray-900">Sobrenome</label>
                                    <Controller
                                        {...register('sobrenome', { required: true, maxLength: 30 })}
                                        control={control}
                                        name="sobrenome"
                                        render={({ field }) => <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            {...field} />}
                                    />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-gray-900">CPF</label>
                                    <Controller
                                        {...register('cpf', { required: true, maxLength: 14 })}
                                        name="cpf"
                                        control={control}
                                        render={({ field }) => <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            {...field} />}
                                    />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="dataNascimento" className="block mb-2 text-sm font-medium text-gray-900">Data de Nascimento</label>
                                    <Controller
                                        {...register('dataNascimento', { required: true })}
                                        name="dataNascimento"
                                        control={control}
                                        render={({ field }) => <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            {...field} />}
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="estado-civil" className="block mb-2 text-sm font-medium text-gray-900">Estado Civil</label>
                                    <Controller
                                        {...register('estado-civil', { required: true })}
                                        name="estado-civil"
                                        control={control}
                                        render={({ field }) => <select {...field}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>Solteiro</option>
                                            <option>Casado</option>
                                            <option>Viuvo(a)</option>
                                        </select>}
                                    />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900">Sexo</label>
                                    <Controller
                                        {...register('sexo', { required: true })}
                                        name="sexo"
                                        control={control}
                                        render={({ ...field }) => <select
                                            {...field}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>Masculino</option>
                                            <option>Femino</option>
                                        </select>} />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="genero" className="block mb-2 text-sm font-medium text-gray-900">Genero</label>
                                    <Controller
                                        {...register('genero', { required: true })}
                                        name="genero"
                                        control={control}
                                        render={({ ...field }) => <select
                                            {...field}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>Homem ou Mulher CIS</option>
                                            <option>Homem ou Mulher Trans</option>
                                            <option>LGBTQI+</option>
                                            <option>Outro/Prefiro não dizer</option>
                                        </select>} />
                                </div>
                            </div>
                            <h2 className="mt-2 mb-2 text-xl md:text-2xl font-bold text-center text-gray-900">Contatos</h2>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                                    <Controller
                                        {...register('email', { required: true, maxLength: 50 })}
                                        name="email"
                                        control={control}
                                        render={({ field }) => <input
                                            {...field}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />} />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-gray-900">Telefone</label>
                                    <Controller
                                        {...register('telefone', { required: true })}
                                        name="telefone"
                                        control={control}
                                        render={({ field }) => <input
                                            {...field}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />} />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900">Celular</label>
                                    <Controller
                                        {...register('celular', { required: true })}
                                        name="celular"
                                        control={control}
                                        render={({ field }) => <input
                                            {...field}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />} />
                                </div>
                            </div>
                            <h2 className="mt-2 mb-2 text-xl md:text-2xl font-bold text-center text-gray-900">Endereço</h2>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="cep" className="block mb-2 text-sm font-medium text-gray-900">CEP</label>
                                    <Controller
                                        {...register('cep', { required: true, maxLength: 8 })}
                                        name="cep"
                                        control={control}
                                        defaultValue={obterUsuario}
                                        render={({ ...field }) => <input
                                            {...field}
                                            value={cep}
                                            onChange={e => obterUsuario(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />}
                                    />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="endereco" className="block mb-2 text-sm font-medium text-gray-900">Endereço</label>
                                    <Controller
                                        {...register('endereco', { required: true, maxLength: 50 })}
                                        name="endereco"
                                        control={control}
                                        defaultValue={endereco?.logradouro}
                                        render={({ ...field }) => <input
                                            {...field}
                                            value={endereco?.logradouro}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />}
                                    />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="numero-casa" className="block mb-2 text-sm font-medium text-gray-900">Número</label>
                                    <Controller
                                        {...register('numero-casa', { required: true, maxLength: 11 })}
                                        name="numero-casa"
                                        control={control}
                                        render={({ ...field }) => <input
                                            {...field}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />}
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="bairro" className="block mb-2 text-sm font-medium text-gray-900">Bairro</label>
                                    <Controller
                                        {...register('bairro', { required: true, maxLength: 11 })}
                                        defaultValue={endereco?.bairro}
                                        name="bairro"
                                        control={control}
                                        render={({ ...field }) => <input
                                            {...field}
                                            value={endereco?.bairro}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />}
                                    />

                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="cidade" className="block mb-2 text-sm font-medium text-gray-900">Cidade </label>
                                    <Controller
                                        {...register('cidade', { required: true, maxLength: 11 })}
                                        defaultValue={endereco?.localidade}
                                        name="cidade"
                                        control={control}
                                        render={({ ...field }) => <input
                                            {...field}
                                            value={endereco?.localidade}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />}
                                    />
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <label htmlFor="estado" className="block mb-2 text-sm font-medium text-gray-900">Estado</label>
                                    <Controller
                                        {...register('estado', { required: true })}
                                        defaultValue={endereco?.uf}
                                        name="estado"
                                        control={control}
                                        render={({ ...field }) => <input
                                            {...field}
                                            
                                            value={endereco?.uf}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />}
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="flex items-center mb-4">
                                    <Controller
                                        {...register('tipo-usuario', { required: true })}
                                        name="tipo-usuario"
                                        control={control}
                                        render={({ ...field }) => <input
                                            {...field}
                                            type="checkbox"
                                            value={proprietario}
                                            className="w-4 h-4 text-blue-600 bg-black-100 rounded border-black-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black-800 focus:ring-2 dark:bg-black-700 dark:border-black-600"
                                        />}
                                    />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black-900 dark:text-black-300">Sou proprietário</label>
                                </div>
                                <button type="submit" className="w-30 block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Finalizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Register;

