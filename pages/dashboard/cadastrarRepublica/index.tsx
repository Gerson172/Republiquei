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
import api from "../../../services/api";
import { useRouter } from "next/router";
import { tipoSexoImovel } from "../../../data/options";
import Select from "../../../components/Select";

export default function CadastrarRepublica() {

    async function obterEndereco(cep: string) {
        const cepApenasNumero = cep.replace(/[^0-9]/g, "")

        if (cepApenasNumero.length !== 8) {
            return;
        }

        const { data } = await viacep.get<ViaCep>(`${cepApenasNumero}/json/`)

        setValue("logradouro", data.logradouro);
        setValue("estado", data.uf);
        setValue("bairro", data.bairro)
        setValue("cidade", data.cidade)
    }

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Imovel>({
        resolver: yupResolver(registerForm)
    });
    
    const { query } = useRouter();

    const onSubmit = (data: Imovel) => {
        const imovel = {
            mida: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg",
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
            drogas: data.drogas,
            },
            caracteristicaImovel: {
            tipoImovel: data.tipoImovel,
            tipoQuarto: data.tipoQuarto,
            tipoSexo: data.tipoSexo
            },
            enderecoImovel: {
            cep: data.cep,
            cidade: data.cidade,
            bairro: data.bairro,
            logradouro: data.logradouro,
            numero: data.numero,
            complemento: data.complemento,
            estado: data.estado
            },
            idUsuario: data.idUsuario
        }

        api.post('Imovel/InserirImovel', imovel)
        .then(res => {
        console.log(res)
    }).catch(error => {
        console.log(error)
    })
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
                        <Input
                        title={"Titulo: "}
                        mensagemDeErro={errors}
                        inputMask={false}
                        mask={""}
                        register={register}
                        type="text"
                        id="titulo"
                        placeholder="Digite um titulo para que os universitarios possam ver" 
                        onChange={undefined} />
                    <div>
                        <div>
                            <label htmlFor="valor">Preço: </label>
                            <CurrencyInput
                                {...register('valor')}
                                maskOptions={"R$0.00"}
                            />
                            {errors.valor && <span className="text-red-500 text-sm">{errors.valor.message}</span>}
                        </div>
                        <Input
                            title={"Dono: "}
                            id={"dono"}
                            mensagemDeErro={errors}
                            inputMask={false}
                            mask={""}
                            register={register}
                            type="text"
                            placeholder="Digite o nome do dono" 
                            onChange={undefined}                        />
                        <Input
                                title={"Email: "}
                                id={"email"}
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                type="email"
                                placeholder="Digite o seu email" 
                                onChange={undefined}                        />
                    <div>
                        <Input
                                title={"Telefone: "}
                                mensagemDeErro={errors}
                                inputMask={true}
                                mask={"(99) 99999-9999"}
                                register={register}
                                type="tel"
                                id="telefone"
                                placeholder="Digite o seu telefone" 
                                onChange={undefined}                        />
                    </div>
                    <div>
                        <Input
                                title={"Celular"}
                                mensagemDeErro={errors}
                                inputMask={true}
                                mask={"(99) 99999-9999"}
                                register={register}
                                type="tel"
                                id="celular"
                                placeholder="Digite o seu celular" 
                                onChange={undefined}                        />
                    </div>
                        <div>
                            <Input
                                title={"Tipo Imovel:"}
                                id={"tipoImovel"}
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                type="text"
                                placeholder="Ex: Casa, Apartamento" 
                                onChange={undefined} />
                        </div>
                        <div>
                            <Input
                                title={"Tipo do quarto"}
                                id={"tipoQuarto"}
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                type="text"
                                placeholder="Digite o tipo do quarto" 
                                onChange={undefined}                            />
                        </div>
                            <Select title={"Sexo"} id={"sexo"} options={tipoSexoImovel} onChange={undefined} mensagemDeErro={errors} register={register} name={""}/>
                    </div>
                    <div>
                        <div>
                            <Input
                                title={"Capacidade de pessoas: "}
                                id={"capacidadePessoas"}
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                placeholder="Quantidade máxima de moradores"
                                type="number" 
                                onChange={undefined}                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Quantidade maxima de comodos"
                                type="number" 
                                title={"Quantidade de comodos"} 
                                onChange={undefined} 
                                id={"quantidadeComodo"} 
                                mensagemDeErro={errors} 
                                inputMask={false} 
                                mask={""} 
                                register={register} />
                        </div>
                        <div>
                            <Input
                                placeholder="Quantidade de banheiros"
                                type="number" 
                                title={"Quantidade de banheiros: "} 
                                onChange={undefined} 
                                id={"quantidadeBanheiro"} 
                                mensagemDeErro={errors} 
                                inputMask={false} 
                                mask={""} 
                                register={register} />
                        </div>
                        <div>
                            <Input
                                title={"Quantidade de quartos:"}
                                id={"quantidadeQuartos"}
                                mensagemDeErro={errors}
                                inputMask={false}
                                mask={""}
                                register={register}
                                placeholder="Quantidade de quartos"
                                type="number" 
                                onChange={undefined} />
                        </div>
                        <div>
                            <h2 className="mt-2 mb-10 text-xl md:text-2xl font-bold text-gray-900">Endereço</h2>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input type="cep" title="CEP" placeholder="Digite o seu CEP" id="cep" mensagemDeErro={errors} inputMask={true} mask="99999-999" onChange={obterEndereco} register={register} />
                                <Input type="text" title="Endereço" placeholder="Digite o seu endereço" onChange={undefined} id="logradouro" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                <Input type="number" title="Número" placeholder={"Digite o número da sua residência"} onChange={undefined} id="numeroCasa" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                            </div>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input type="text" id="bairro" title="Bairro" placeholder="Digite o seu bairro" onChange={undefined} mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                <Input type="text" title="Cidade" placeholder={"Digite o nome da sua cidade"} onChange={undefined} id="localidade" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                <Input type="uf" title="Estado" placeholder="Digite o nome do seu estado" onChange={undefined} id="uf" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                <Input type="complemento" title="Complemento" placeholder="" onChange={undefined} id="complemento" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição: </label>
                            <textarea
                                {...register('descricao')}
                                placeholder="Descrição do imovel"></textarea>
                        </div>
                        <div>
                            <Input
                                id="midia"
                                type="file" 
                                title={"Enviar Midia"} 
                                placeholder={""} 
                                onChange={undefined} 
                                mensagemDeErro={errors} 
                                inputMask={false} 
                                mask={""} 
                                register={register} />
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
                    <button type="submit" className="w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Finalizar</button>
                </form>
            </div>
        </section>
    </>
)
}