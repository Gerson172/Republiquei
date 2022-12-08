import NavBar from "../../components/NavBar";
import { useForm } from "react-hook-form";

import registerForm from '../../controller/registerForm'
import { yupResolver } from "@hookform/resolvers/yup"
import viacep, { ViaCep } from "../../services/viacep";
import Input from "../../components/Input";

import Select from "../../components/Select";

import { estadoCivil, sexo, genero, religiao, orientacaoSexual } from "../../data/options";
import api from "../../services/api";
import Link from "next/link";
import { User } from "../../types/User";
import { useState } from "react";


function Register() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>({
        resolver: yupResolver(registerForm)
    });

    async function obterEndereco(cep: string) {
        const cepApenasNumero = cep.replace(/[^0-9]/g, "")

        if (cepApenasNumero.length !== 8) {
            return;
        }

        const { data } = await viacep.get<ViaCep>(`${cepApenasNumero}/json/`)

        setValue("logradouro", data.logradouro)
        setValue("uf", data.uf)
        setValue("bairro", data.bairro)
        setValue("localidade", data.cidade)
    }

    const onSubmit = (data: User) => {

        console.log(data.telefone)

        const criarUsuario = {
            nome: data.nome,
            sobrenome: data.sobrenome,
            senha: data.senha,
            cpf: data.cpf.replace(/[^0-9]/g, ""),
            estadoCivil: data.estadoCivil,
            dataNascimento: data.dataNascimento,
            checkProprietario: data.proprietario,
            contato: {
                email: data.email,
                telefone: data.telefone.replace(/[^0-9]/g, ""),
                celular: data.celular.replace(/[^0-9]/g, "")
            },
            enderecoUsuario: {
                cep: data.cep.replace(/[^0-9]/g, ""),
                estado: data.uf,
                cidade: data.localidade,
                bairro: data.bairro,
                logradouro: data.logradouro,
                numero: data.numeroCasa,
                complemento: data.complemento
            },
            caracteristicaUsuario: {
                religiao: data.religiao,
                genero: data.genero,
                sexo: data.sexo,
                orientacaoSexual: data.orientacaoSexual,
                areaInteresse: data.areaInteresse
            }
        }


        api.post('/Usuario/CadastrarUsuario', criarUsuario)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <NavBar />
            <section className="md:flex-row h-full items-center">
                <div className="md:max-w-md lg:max-w-full md:mx-auto px-6 lg:px-16 xl:px-16" >
                    <div className="w-full h-full mb-8 py-3">
                        <form onChange={handleSubmit(onSubmit)}>
                            <h2 className="mt-6 mb-10 text-xl md:text-2xl font-bold text-gray-900">Dados pessoais</h2>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <Input  placeholder="Digite o seu nome" type="text" id="nome" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} title="Nome" register={register} min={0} max={40} />
                                <Input title="Sobrenome" placeholder="Digite o seu sobrenome" type="text" id="sobrenome" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register} min={0} max={40} />
                                <Input title="CPF" inputMask={true} placeholder="Digite o seu cpf" mask="999.999.999-99" mensagemDeErro={errors} id="cpf" type="text" onChange={undefined} register={register} min={0} max={20} />
                                <Input title="Data Nascimento" inputMask={false} mensagemDeErro={errors} id="dataNascimento" type="date" placeholder={""} mask={""} onChange={undefined} register={register} min={0} max={20} />
                            </div>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <Select id="estadoCivil" title="Estado Civil" options={estadoCivil} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                                <Select id="sexo" title="Sexo" options={sexo} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                                <Select  title="Genero" id="genero" options={genero} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                                <Select  title="Orientação Sexual" id="orientacaoSexual" options={orientacaoSexual} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                                <Select id="religiao" title="Religiao" options={religiao} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                                <Input id="areaInteresse" title="Area Interesse" placeholder="Digite sua area de interesse" onChange={undefined} inputMask={false} mask={""} mensagemDeErro={errors} register={register} type="text" min={0} max={20} />
                                <Input type="checkbox" title="Proprietario" placeholder={""} onChange={undefined} id="proprietario" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                            </div>
                            <h2 className="mt-2 mb-10 text-xl md:text-2xl font-bold text-gray-900">Contatos</h2>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="tel" title="Telefone" placeholder="Digite o seu telefone" id="telefone" mensagemDeErro={errors} inputMask={true} mask="(99) 99999-9999" onChange={undefined} register={register} min={0} max={20} />
                                <Input type="tel" title="Celular" placeholder="Digite o seu celular" id="celular" mensagemDeErro={errors} inputMask={true} mask="(99) 99999-9999" onChange={undefined} register={register} min={0} max={20} />
                            </div>
                            <h2 className="mt-2 mb-10 text-xl md:text-2xl font-bold text-gray-900">Endereço</h2>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input type="cep" title="CEP" placeholder="Digite o seu CEP" id="cep" mensagemDeErro={errors} inputMask={true} mask="99999-999" onChange={obterEndereco} register={register} min={0} max={20} />
                                <Input type="text" title="Endereço" placeholder="Digite o seu endereço" onChange={undefined} id="logradouro" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                                <Input type="number" title="Número" placeholder={"Digite o número da sua residência"} onChange={undefined} id="numeroCasa" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                            </div>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input type="text" id="bairro" title="Bairro" placeholder="Digite o seu bairro" onChange={undefined} mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                                <Input type="text" title="Cidade" placeholder={"Digite o nome da sua cidade"} onChange={undefined} id="localidade" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                                <Input type="uf" title="Estado" placeholder="Digite o nome do seu estado" onChange={undefined} id="uf" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                                <Input type="complemento" title="Complemento" placeholder="" onChange={undefined} id="complemento" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="email" title="Email" placeholder="Digite o seu email" id="email" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register} min={0} max={0} />
                                <Input type="password" title="Senha" placeholder="Digite sua senha" id="senha" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register} min={0} max={0} />
                                <Link href="/login">
                                    <button type="submit" className="w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Finalizar</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )

}

export default Register;

