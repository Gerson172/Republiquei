import NavBar from "../../components/NavBar";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import viacep, { ViaCep } from "../../services/viacep";
import api from "../../services/api";
import { User } from "../../types/User";
import { useRouter } from "next/router";
import { useState } from "react";

import registerForm from "../../controller/registerForm";
import DadosPessoais from "../../components/DadosPessoais";
import Contatos from "../../components/Contatos";
import Endereco from "../../components/Endereco";
import CriarUsuario from "../../components/CriarUsuario";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";


function Register() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>({ resolver: yupResolver(registerForm)});
    let router = useRouter()

    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

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


    const onSubmit = (data: User) => {

        console.log(data.proprietario)

        const criarUsuario = {
            nome: data.nome,
            sobrenome: data.sobrenome,
            senha: data.senha,
            cpf: data.cpf.replace(/[^0-9]/g, ""),
            estadoCivil: data.estadoCivil,
            dataNascimento: data.dataNascimento,
            checkProprietario: data.proprietario ? true : false,
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

        setTimeout(() => {
            alert('Usuario cadastrado com sucesso!')
            router.push({ pathname: '/login' })

        }, 1000)


        api.post('/Usuario/CadastrarUsuario', criarUsuario)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const formComponents = [<DadosPessoais errors={errors} register={register} />, <Contatos errors={errors} register={register} />,
    <Endereco register={register} errors={errors} obterEndereco={obterEndereco} />, <CriarUsuario errors={errors} register={register} />]

    const [step, setStep] = useState<number>(0);

    function previousStep() {
        if (step == 0) return;
        setStep(step - 1);
    }

    function nextStep(){
        if(step == formComponents.length) return;
        setStep(step + 1);
    }

    return (
        <section className="h-full bg-gray-50">
            <div className={`${isChecked ? 'hidden' : ''} flex flex-wrap sm:p-8 items-center justify-center md:h-screen gap-10`}>
                <div className="bg-white px-5 shadow-md rounded-lg mx-4 hover:border-solid border-8 hover:border-sky-600">
                    <label htmlFor="proprietario">
                
                    <Input type="checkbox" title="" placeholder={""} onChange={handleCheckboxChange} id="proprietario" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />   
                        <img
                            src={!isChecked ? "https://s3-alpha-sig.figma.com/img/e3ba/e82b/314cfabd905d6ee51904f10bb2b8571d?Expires=1679875200&Signature=oAIHhPv0NdvGZg2lkx0dWyt5Gmb0UxVz6t8Dru~tBSN3kleKst633utFK5TN0fpRGHUQJYsEYjp0QRS-xecRj1jj6sw0rhsZEKySkBdv~yvZHe-Lfr-2rk69cZcuwwkjpODOBdoxa4Bpp4iaLTN-hC6-lZijt8zoVj2F84zqwQgbe2kc3cyzVjKTppbzxMAeTen09VHaWYReZfZrR~o3JdJeBUnGk5Tc-s2CBvXcsga7XQ1Plh5atyLgSCrk8bRztciWTMINrWjE75HT7YG~MNeolo61iEifZTh2AchLFMX6qUiIsonNH6EBrE4k4~OQp0Z8YqCXlJk0WbnUrUJb7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4":""}
                            alt="descrição da imagem"
                            className="w-96"
                        />
                        <span className="font-roboto font-semibold pt-4 pb-8 text-2xl leading-tight flex items-center justify-center text-gray-700">Cadastre-se como Proprietário </span>
                    </label>
                </div>
                <div className="bg-white px-5 shadow-md rounded-lg mx-4 checked:border-solid border-8 hover:border-sky-600">
                    <label htmlFor="universitario">
                        <input
                            type="checkbox"
                            id="universitario"
                            checked={isChecked}
                            className="hidden"
                            onChange={handleCheckboxChange}
                        />
                        <img
                            src={!isChecked ? "https://s3-alpha-sig.figma.com/img/25d2/5127/226b631e1f6e4e0d78dd164da4ef94c0?Expires=1679875200&Signature=gizLTaXatK6TRTXe1-eAMaswazYhNU8aul0cntbOHc4NLOxUQh1snKoLSZ8U4zlM6jtHgMoO2O1OkAPO26XsQVyAjhNneZaL1ujirDDL6MHt9DEWdphoD-fJrQatcBTcNrWK8edfs4OgFhOg-zlGg98wm20KjB3J9f5wipE1hbWxcSLH9IvMfBdL5WIZ3KnVj6LoGwgC3C-zlJeREcUz68JJiSHNK6ZDruGiZAJKggwdsJiEBM~UvmBa7XCzPdXFckPRrNSfhdk0W33swpDJ5d8tEaMidxRPZaLyLJsOf~CEoMn6IXn~dylJ~j4kIkkYLLta6zIN5WXsOOGmiAXicQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4":""}
                            alt="descrição da imagem"
                            className="w-96"
                        />
                        <span className="font-roboto font-semibold pt-4 pb-8 text-2xl leading-tight flex items-center justify-center text-gray-700">Cadastre-se como Universitario </span>
                    </label>
                </div>
            </div>
            <div className={`${!isChecked ? 'hidden' : ''} h-screen w-screen flex items-center justify-center bg-gray-100`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white md:w-full w-full mx-auto p-8 rounded-lg shadow-md">
                        <div className="flex flex-row justify-between p-8 gap-8">
                            <div className={`flex items-center gap-4 ${step == 0 ? 'text-sky-600 font-bold' : ''}`}><span className={`${step == 0 ? 'bg-sky-600 text-white' : ''} rounded-md p-2 text-lg`}><RiNumber1 /></span> Dados Pessoais</div>
                            <div className={`flex items-center gap-4  ${step == 1 ? 'text-sky-600 font-bold' : ''}`}><span className={`${step == 1 ? 'bg-sky-600 text-white' : ''} rounded-md p-2 text-lg`}><RiNumber2 /></span> Contatos</div>
                            <div className={`flex items-center gap-4 ${step == 2 ? 'text-sky-600 font-bold' : ''}`}><span className={`${step == 2 ? 'bg-sky-600 text-white' : ''} rounded-md p-2 text-lg`}><RiNumber3 /></span> Endereço</div>
                            <div className={`flex items-center gap-4 ${step == 3 ? 'text-sky-600 font-bold' : ''}`}><span className={`${step == 3 ? 'bg-sky-600 text-white' : ''} rounded-md p-2 text-lg`}><RiNumber4 /></span> Criar Usuario</div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                        {formComponents[step]}
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <a className={` ${step !== 0 ? 'visible' : 'invisible'} w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 cursor-pointer`} onClick={previousStep}>Voltar</a>
                            {step == formComponents.length - 1?
                                <button type="submit" className="w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Finalizar</button>
                                : <a className={` ${step !== formComponents.length - 1 ? 'visible' : 'invisible'} w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 cursor-pointer`} onClick={nextStep}>Avançar</a>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )

}

export default Register;

