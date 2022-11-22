import Sidebar from "../../../components/Sidebar";
import Head from "next/head";
import Input from "../../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import registerForm from "../../../controller/registerForm";
import { Imovel } from "../../../types/Imovel";
import { useForm } from "react-hook-form";
import CurrencyInput from "../../../components/CurrencyInput";
import viacep, { ViaCep } from "../../../services/viacep";
import Link from "next/link";

export default function CadastrarRepublica() {


    async function obterEndereco(cep: string) {
        const cepApenasNumero = cep.replace(/[^0-9]/g, "")

        if (cepApenasNumero.length !== 8) {
            return;
        }

        const { data } = await viacep.get<ViaCep>(`${cepApenasNumero}/json/`)

        setValue("logradouro", data.logradouro)
        setValue("uf", data.uf)
        setValue("bairro", data.bairro)
        setValue("localidade", data.localidade)
    }



    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Imovel>({
        resolver: yupResolver(registerForm)
    });

    const onSubmit = (data: Imovel) => {
        console.log(data)
    }

    return (
        <>
            <Head>
                <title>Cadastrar Republica</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <section className="flex md:flex-row flex-col-reverse">
                <Sidebar />
                <div className="bg-white md:ml-0 w-full flex  flex-col">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="titulo">Titulo: </label>
                            <input
                                {...register('titulo')}
                                type="text"
                                placeholder="Digite um titulo para que os universitarios possam ver" />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="valor">Preço: </label>
                                <CurrencyInput
                                    {...register('valor')}
                                    placeholder="R$0.00"
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="tipoImovel">Tipo do Imovel</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Casa, Apartamento" />
                            </div>
                            <div>
                                <label htmlFor="tipoQuarto">Tipo do quarto</label>
                                <input
                                    {...register('tipoQuarto')}
                                    type="text"
                                    placeholder="Digite o tipo do quarto"
                                />
                            </div>
                            <div>
                                <label htmlFor="tipoSexo">Sexo</label>
                                <input
                                    {...register('tipoSexo')}
                                    type="text"
                                    placeholder="Ex: Masculino, Feminino, Misto"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="capacidadePessoas">Quantidade de pessoas: </label>
                                <input
                                    {...register('capacidadePessoas')}
                                    placeholder="Quantidade máxima de moradores"
                                    type="number"
                                />
                            </div>
                            <div>
                                <label htmlFor="quantidadeComodo">Quantidade de comodos: </label>
                                <input
                                    {...register('quantidadeComodo')}
                                    placeholder="idsdaiosdiasd"
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="quantidadeBanheiros">Quantidade de Banheiros: </label>
                                <input
                                    {...register('quantidadeBanheiros')}
                                    placeholder="idsdaiosdiasd"
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor="quantidadeQuartos">Quantidade de quartos: </label>
                                <input
                                    {...register('quantidadeQuartos')}
                                    placeholder="idsdaiosdiasd"
                                    type="text" />
                            </div>
                            <div>
                                <h2 className="mt-2 mb-10 text-xl md:text-2xl font-bold text-gray-900">Endereço</h2>
                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <Input type="cep" name="cep" title="CEP" placeholder="Digite o seu CEP" id="cep" mensagemDeErro={errors} inputMask={true} mask="99999-999" onChange={obterEndereco} register={register} />
                                    <Input type="text" name="logradouro" title="Endereço" placeholder="Digite o seu endereço" onChange={undefined} id="logradouro" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                    <Input type="number" name="numeroCasa" title="Número" placeholder={"Digite o número da sua residência"} onChange={undefined} id="numeroCasa" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                </div>
                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <Input name="bairro" type="text" id="bairro" title="Bairro" placeholder="Digite o seu bairro" onChange={undefined} mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                    <Input type="text" name="localidade" title="Cidade" placeholder={"Digite o nome da sua cidade"} onChange={undefined} id="localidade" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                    <Input type="uf" name="uf" title="Estado" placeholder="Digite o nome do seu estado" onChange={undefined} id="uf" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                    <Input type="complemento" name="complemento" title="Complemento" placeholder="" onChange={undefined} id="complemento" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="descricao">Descrição: </label>
                                <textarea
                                    {...register('descricao')}
                                    placeholder="Descrição do imovel"></textarea>
                            </div>
                            <div>
                                <label htmlFor="midia">Enviar midia</label>
                                <input
                                    {...register('midia')}
                                    id="midia"
                                    type="file" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>Sobre a republica</h2>
                                <div>
                                    <input
                                        {...register('possuiAcessibilidade')}
                                        id="possuiAcessibilidade"
                                        type="checkbox"
                                    />
                                    <label htmlFor="possuiAcessibilidade">Possui Acessbilidade</label>
                                </div>
                                <div>
                                    <input
                                        {...register('possuiGaragem')}
                                        id="possuiGaragem"
                                        type="checkbox"
                                    />
                                    <label htmlFor="possuiGaragem">Possui Garagem</label>

                                </div>
                                <div>
                                    <input
                                        {...register('possuiMobilia')}
                                        id="possuiMobilia"
                                        type="checkbox"
                                    />
                                    <label htmlFor="possuiMobilia">Possui Mobilia</label>

                                </div>
                                <div>
                                    <input
                                        {...register('possuiAcademia')}
                                        id="possuiAcademia"
                                        type="checkbox"
                                    />
                                    <label htmlFor="possuiAcademia">Possui Academia</label>

                                </div>
                                <div>
                                    <input
                                        {...register('possuiAreaLazer')}
                                        id="possuiAreaLazer"
                                        type="checkbox"
                                    />
                                    <label htmlFor="possuiAreaLazer">Possui Area de Lazer</label>

                                </div>
                                <div>
                                    <input
                                        {...register('possuiPiscina')}
                                        id="possuiPiscina"
                                        type="checkbox"
                                    />
                                    <label htmlFor="possuiPiscina">Possui Piscina</label>
                                </div>
                            </div>
                            <div>
                                <h2>Regra do imovel</h2>
                                <div>
                                    <input
                                        {...register('fumante')}
                                        id="fumante"
                                        type="checkbox"
                                    />
                                    <label htmlFor="fumante">Fumar</label>
                                </div>
                                <div>
                                    <input
                                        {...register('animal')}
                                        id="animal"
                                        type="checkbox"
                                    />
                                    <label htmlFor="animal">Animal</label>

                                </div>
                                <div>
                                    <input
                                        {...register('alcool')}
                                        id="alcool"
                                        type="checkbox"
                                    />
                                    <label htmlFor="alcool">Alcool</label>

                                </div>
                                <div>
                                    <input
                                        {...register('visitas')}
                                        id="visitas"
                                        type="checkbox"
                                    />
                                    <label htmlFor="visitas">Visitas</label>

                                </div>
                                <div>
                                    <input
                                        {...register('crianca')}
                                        id="crianca"
                                        type="checkbox"
                                    />
                                    <label htmlFor="crianca">Crianças</label>

                                </div>
                                <div>
                                    <input
                                        {...register('drogas')}
                                        id="drogas"
                                        type="checkbox"
                                    />
                                    <label htmlFor="drogas">Drogas</label>
                                </div>
                            </div>
                        </div>
                        <Link href="/visualizarRepublica">
                                <button type="submit" className="w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Finalizar</button>
                        </Link>
                    </form>
                </div>
            </section>
        </>
    )
}