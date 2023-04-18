import { estadoCivil, sexo, genero, orientacaoSexual, religiao } from "../../../constants/options";
import Input from "../../../components/Formulario/Input";
import Select from "../../../components/Formulario/Select";

export default function DadosPessoais({ errors, register }: any) {
    return (
        <section>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 md:gap-6">
                <Input placeholder="Digite o seu nome" type="text" id="nome" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} title="Nome" register={register} min={0} max={40} />
                <Input title="Sobrenome" placeholder="Digite o seu sobrenome" type="text" id="sobrenome" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register} min={0} max={40} />
                <Input title="CPF" inputMask={true} placeholder="Digite o seu cpf" mask="999.999.999-99" mensagemDeErro={errors} id="cpf" type="text" onChange={undefined} register={register} min={0} max={20} />
                <Input title="Data Nascimento" inputMask={false} mensagemDeErro={errors} id="dataNascimento" type="date" placeholder={""} mask={""} onChange={undefined} register={register} min={0} max={20} />
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-6">
                <Select id="estadoCivil" title="Estado Civil" options={estadoCivil} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                <Select id="sexo" title="Sexo" options={sexo} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                <Select title="Genero" id="genero" options={genero} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                <Select title="Orientação Sexual" id="orientacaoSexual" options={orientacaoSexual} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                <Select id="religiao" title="Religiao" options={religiao} mensagemDeErro={errors} register={register} onChange={undefined} name={""} />
                <Input id="areaInteresse" title="Area Interesse" placeholder="Digite sua area de interesse" onChange={undefined} inputMask={false} mask={""} mensagemDeErro={errors} register={register} type="text" min={0} max={20} />
            </div>
        </section>
    )
}