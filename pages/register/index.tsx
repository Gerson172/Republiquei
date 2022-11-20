import NavBar from "../../components/NavBar";
import { useForm } from "react-hook-form";

import registerForm from '../../controller/registerForm'
import { yupResolver } from "@hookform/resolvers/yup"
import viacep, { ViaCep } from "../../services/viacep";
import Input from "../../components/Input";

import { User } from "../../controller/User";
import Select from "../../components/Select";

import {estadoCivil, sexo, genero, religiao, orientacaoSexual} from "../../data/options";
import api from "../../services/api";


function Register() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>({
        resolver: yupResolver(registerForm)
    });

    async function obterUsuario(cep: string) {
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


    const onSubmit = (data: User) => {
        
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
            caracteristicaUsuario :{
                religiao: data.religiao,
                genero: data.genero,
                sexo: data.sexo,
                orientacaoSexual: data.orientacaoSexual,
                areaInteresse: data.areaInteresse
              }
            }


        api.post('/Usuario/CadastrarUsuario', criarUsuario )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <>
            <NavBar/>
            <section className="md:flex-row h-full items-center bg-white">
                <div className="md:max-w-md lg:max-w-full md:mx-auto h-full px-6 lg:px-16 xl:px-16" >
                    <div className="w-full h-full mb-8 py-3">
                        <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
                            <h2 className="mt-6 mb-10 text-xl md:text-2xl font-bold text-gray-900">Dados pessoais</h2>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <Input name="nome" placeholder="Digite o seu nome" type="text" id="nome" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} title="Nome" register={register} />
                                <Input title="Sobrenome" name="sobrenome" placeholder="Digite o seu sobrenome" type="text" id="sobrenome" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register} />
                                <Input title="CPF" name="cpf" inputMask={true} placeholder="Digite o seu cpf" mask="999.999.999-99" mensagemDeErro={errors} id="cpf" type="text" onChange={undefined} register={register} />
                                <Input title="Data Nascimento" name="dataNascimento" inputMask={false} mensagemDeErro={errors} id="dataNascimento" type="date" placeholder={""} mask={""} onChange={undefined} register={register} />
                            </div>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <Select id="estadoCivil" name="estadoCivil" title="Estado Civil" options={estadoCivil} mensagemDeErro={errors} register={register} onChange={undefined} />
                                <Select id="sexo" name="sexo" title="Sexo" options={sexo} mensagemDeErro={errors} register={register} onChange={undefined}/>
                                <Select  name="genero" title="Genero" id="genero" options={genero} mensagemDeErro={errors} register={register} onChange={undefined}/>
                                <Select  name="orientacaoSexual" title="Orientação Sexual" id="orientacaoSexual" options={orientacaoSexual} mensagemDeErro={errors} register={register} onChange={undefined}/>
                                <Select id="religiao" name="religiao" title="Religiao" options={religiao} mensagemDeErro={errors} register={register} onChange={undefined} />
                                <Input id="areaInteresse" name="areaInteresse" title="Area Interesse" placeholder="Digite sua area de interesse" onChange={undefined} inputMask={false} mask={""} mensagemDeErro={errors} register={register} type="text"/>
                                <Input type="checkbox" name="proprietario" title="Proprietario" placeholder={""} onChange={undefined} id="proprietario" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                            </div>
                                <h2 className="mt-2 mb-10 text-xl md:text-2xl font-bold text-gray-900">Contatos</h2>
                                <div className="grid md:grid-cols-2 md:gap-6"> 
                                <Input type="tel" name="telefone" title="Telefone" placeholder="Digite o seu telefone" id="telefone" mensagemDeErro={errors} inputMask={true} mask="(99) 99999-9999" onChange={undefined} register={register} />
                                <Input type="tel" name="celular" title="Celular" placeholder="Digite o seu celular" id="celular" mensagemDeErro={errors} inputMask={true} mask="(99) 99999-9999" onChange={undefined} register={register} />
                            </div>
                            <h2 className="mt-2 mb-10 text-xl md:text-2xl font-bold text-gray-900">Endereço</h2>
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input type="cep" name="cep" title="CEP" placeholder="Digite o seu CEP" id="cep" mensagemDeErro={errors} inputMask={true} mask="99999-999" onChange={obterUsuario} register={register} />
                                <Input type="text" name="logradouro" title="Endereço" placeholder="Digite o seu endereço" onChange={undefined} id="logradouro" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                <Input type="number" name="numeroCasa" title="Número" placeholder={"Digite o número da sua residência"} onChange={undefined} id="numeroCasa" mensagemDeErro={errors} inputMask={false} mask={""} register={register} /> 
                            </div>                            
                            <div className="grid md:grid-cols-3 md:gap-6">
                                <Input name="bairro" type="text" id="bairro" title="Bairro" placeholder="Digite o seu bairro" onChange={undefined} mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                <Input type="text" name="localidade" title="Cidade" placeholder={"Digite o nome da sua cidade"} onChange={undefined} id="localidade" mensagemDeErro={errors} inputMask={false} mask={""} register={register} /> 
                                <Input type="uf" name="uf" title="Estado" placeholder="Digite o nome do seu estado" onChange={undefined} id="uf" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                                <Input type="complemento" name="complemento" title="Complemento" placeholder="" onChange={undefined} id="complemento" mensagemDeErro={errors} inputMask={false} mask={""} register={register} />
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="email" name="email" title="Email" placeholder="Digite o seu email" id="email" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register}/>
                                <Input type="password" name="senha" title="Senha" placeholder="Digite sua senha" id="senha" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register}/>
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

