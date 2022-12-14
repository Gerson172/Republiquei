//React
import { useQuery } from 'react-query'
import { useState } from "react";

//React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerForm from "../../../controller/registerForm";

//Next.js
import { useRouter } from 'next/router';
import Head from "next/head";

//Components
import CheckBox from "../../../components/Checkbox";
import CurrencyInput from "../../../components/CurrencyInput";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Sidebar from "../../../components/Sidebar";

//Api
import api from "../../../services/api";
import viacep, { ViaCep } from "../../../services/viacep";

//Tipos
import { Imovel } from "../../../types/Imovel";

//Dados
import { tipoSexoImovel, tipoImovel, tipoQuarto} from "../../../data/options";

export default function CadastrarRepublica() {

    async function obterEndereco(cep: string) {
        const cepApenasNumero = cep.replace(/[^0-9]/g, "")

        if (cepApenasNumero.length !== 8) {
            return;
        }

        const { data } = await viacep.get<ViaCep>(`${cepApenasNumero}/json/`)

        setValue("logradouro", data.logradouro);
        setValue("uf", data.uf);
        setValue("bairro", data.bairro)
        setValue("localidade", data.localidade)
    }

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Imovel>({
    });

    const { id } = useRouter().query

    let router = useRouter()

    const postSubmit = (data: Imovel) => {

        const criarImovel = {
            midia: data.midia,
            quantidadeComodo: data.quantidadeComodo,
            capacidadePessoas: data.capacidadePessoas,
            valor: data.valor,
            descricao: data.descricao,
            possuiAcessibilidade: data.possuiAcessibilidade,
            possuiGaragem: data.possuiGaragem,
            possuiAcademia: data.possuiAcademia,
            possuiMobilia: data.possuiMobilia,
            possuiAreaLazer: data.possuiAreaLazer,
            possuiPiscina: data.possuiPiscina,
            quantidadeBanheiros: data.quantidadeBanheiros,
            quantidadeQuartos: data.quantidadeQuartos,
            nomeImovel: data.nomeImovel,
            regraImovel: {
                fumante: data.fumante,
                animal: data.animal,
                alcool: data.alcool,
                visitas: data.visitas,
                crianca: data.crianca,
                drogas: data.drogas
            },
            caracteristicaImovel: {
                tipoImovel: data.tipoImovel,
                tipoQuarto: data.tipoQuarto,
                tipoSexo: data.tipoSexo
            },
            enderecoImovel: {
                cep: data.cep.replace(/[^0-9]/g, ""),
                localidade: data.localidade,
                bairro: data.bairro,
                logradouro: data.logradouro,
                numero: data.numero,
                complemento: data.complemento,
                uf: data.uf
            },
            idUsuario: id
        }

        console.log(criarImovel)

        setTimeout(() => {
            alert('Imovel cadastrado com sucesso!')
            router.push({ pathname: '/' })

        }, 3000)

        api.post('/Imovel/InserirImovel', criarImovel)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <Head>
                <title>Cadastrar Republica</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="flex md:flex-row flex-col-reverse text-slate-900">
                <Sidebar />
                <div className="bg-white my-8 w-full flex justify-center">
                    <form onSubmit={handleSubmit(postSubmit)}>
                        <Input
                            title={"Titulo: "}
                            mensagemDeErro={errors}
                            inputMask={false}
                            mask={""}
                            register={register}
                            type="text"
                            id="nomeImovel"
                            placeholder="Digite um titulo para que os universitarios possam ver"
                            onChange={undefined}
                            min={0} max={50} />
                        <div className='flex gap-2 items-center'>
                            <Input
                                type={'number'}
                                title={'Pre??o: '}
                                placeholder={'Digite o preco'}
                                onChange={undefined}
                                id="valor"
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={''}
                                min={0}
                                max={1000000}
                                register={register} />
                            <Select
                                title="Tipo Imovel:"
                                id="tipoImovel"
                                mensagemDeErro={errors}
                                register={register}
                                onChange={undefined}
                                name={''} options={tipoImovel} />
                            <Select
                                title="Tipo do quarto"
                                id="tipoQuarto"
                                mensagemDeErro={errors}
                                register={register}
                                onChange={undefined} 
                                name={''} 
                                options={tipoQuarto}/>
                        </div>
                        <div className='flex gap-2'>
                            <Select title={"Sexo"} id={"tipoSexo"} options={tipoSexoImovel} onChange={undefined} mensagemDeErro={errors} register={register} name={""} />
                            <Input
                                title="Capacidade de pessoas: "
                                id="capacidadePessoas"
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                placeholder="Quantidade m??xima de moradores"
                                type="number"
                                min={0}
                                max={10}
                                onChange={undefined} />
                        </div>
                        <div className='flex gap-2'>
                            <Input
                                placeholder="Quantidade maxima de comodos"
                                type="number"
                                title="Quantidade de comodos"
                                onChange={undefined}
                                id="quantidadeComodo"
                                mensagemDeErro={errors}
                                inputMask={false}
                                min={0}
                                max={10}
                                mask={""}
                                register={register} />
                            <Input
                                placeholder="Quantidade de banheiros"
                                type="number"
                                title="Quantidade de banheiros: "
                                onChange={undefined}
                                id="quantidadeBanheiros"
                                mensagemDeErro={errors}
                                inputMask={false}
                                min={0}
                                max={10}
                                mask={""}
                                register={register} />

                            <Input
                                title="Quantidade de quartos: "
                                id="quantidadeQuartos"
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                placeholder="Quantidade de quartos"
                                type="number"
                                min={0}
                                max={10}
                                onChange={undefined} />
                        </div>
                        <div>
                            <h2 className="mt-2 mb-10 text-xl md:text-2xl font-bold text-gray-900">Endere??o</h2>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input type="cep" title="CEP" placeholder="Digite o seu CEP" id="cep" mensagemDeErro={errors} inputMask={true} mask="99999-999" onChange={obterEndereco} register={register} min={0} max={100} />
                                <Input type="text" title="Endere??o" placeholder="Digite o seu endere??o" onChange={undefined} id="logradouro" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={100} />
                                <Input type="number" title="N??mero" placeholder={"Digite o n??mero da sua resid??ncia"} onChange={undefined} id="numero" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={10000} />
                            </div>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input type="text" id="bairro" title="Bairro" placeholder="Digite o seu bairro" onChange={undefined} mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                                <Input type="text" title="Cidade" placeholder={"Digite o nome da sua cidade"} onChange={undefined} id="localidade" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                                <Input type="uf" title="UF" placeholder="Digite o nome do seu estado" onChange={undefined} id="uf" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={2} />
                                <Input type="complemento" title="Complemento" placeholder="" onChange={undefined} id="complemento" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                            </div>
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="descricao">Descri????o: </label>
                            <textarea
                                {...register('descricao')}
                                id="descricao"
                                placeholder="Descri????o do imovel"></textarea>
                        </div>
                        <div>
                            <Input
                                id="midia"
                                type="text"
                                title="Enviar Midia"
                                placeholder={"https://www.imagem.com"}
                                onChange={undefined}
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                min={0}
                                max={10000} />
                        </div>
                        <section className='flex justify-evenly'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-xl'>Sobre a republica</h2>
                                <CheckBox
                                    id="possuiAcessibilidade"
                                    titulo="Possui Acessibilidade"
                                    register={register}
                                />
                                <CheckBox
                                    id="possuiGaragem"
                                    titulo='Possui Garagem'
                                    register={register}
                                />
                                <CheckBox
                                    id="possuiMobilia"
                                    titulo='Possui Mobilia'
                                    register={register}
                                />
                                <CheckBox
                                    id="possuiAcademia"
                                    titulo='Possui Academia'
                                    register={register}

                                />
                                <CheckBox
                                    id="possuiAreaLazer"
                                    titulo='Possui Area de Lazer'
                                    register={register}
                                />
                                <CheckBox
                                    id="possuiPiscina"
                                    titulo='Possui Piscina'
                                    register={register}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-xl'>Regra do imovel</h2>

                                <CheckBox
                                    id="fumante"
                                    titulo="Fumante"
                                    register={register} />
                                <CheckBox
                                    id="animal"
                                    titulo="Animal"
                                    register={register}
                                />
                                <CheckBox
                                    id="alcool"
                                    titulo='Alcool'
                                    register={register}
                                />
                                <CheckBox
                                    id="visitas"
                                    titulo='Visitas'
                                    register={register}
                                />
                                <CheckBox
                                    id="crianca"
                                    titulo="Crian??a"
                                    register={register}
                                />
                                <CheckBox
                                    id="drogas"
                                    titulo='Drogas'
                                    register={register}
                                />
                            </div>
                        </section>
                        <button type="submit" className=" bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 text-white font-semibold rounded-lg px-16 py-3 my-6">Finalizar</button>
                    </form>
                </div>
            </section>
        </>
    )
}