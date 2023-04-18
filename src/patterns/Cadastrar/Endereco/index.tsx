import Input from "../../../components/Formulario/Input";

export default function Endereco({ errors, register, obterEndereco }: any) {
    return (
        <section>
            <div className="grid md:grid-cols-3 md:gap-6">
                <Input type="cep" title="CEP" placeholder="Digite o seu CEP" id="cep" mensagemDeErro={errors} inputMask={true} mask="99999-999" onChange={obterEndereco} register={register} min={0} max={20} />
                <Input type="text" title="Endereço" placeholder="Digite o seu endereço" onChange={undefined} id="logradouro" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                <Input type="number" title="Número" placeholder={"Digite o número da sua residência"} onChange={undefined} id="numeroCasa" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
                <Input type="text" id="bairro" title="Bairro" placeholder="Digite o seu bairro" onChange={undefined} mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                <Input type="text" title="Cidade" placeholder={"Digite o nome da sua cidade"} onChange={undefined} id="localidade" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                <Input type="uf" title="UF" placeholder="Digite o nome do seu estado" onChange={undefined} id="uf" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={2} />
                <Input type="complemento" title="Complemento" placeholder="" onChange={undefined} id="complemento" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
            </div>
        </section>
    );
}