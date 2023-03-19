import Input from "../Input";

export default function Contatos({errors, register}:any) {
    return (
        <section>
            <div className="grid md:grid-cols-2 md:gap-6">
                <Input type="tel" title="Telefone" placeholder="Digite o seu telefone" id="telefone" mensagemDeErro={errors} inputMask={true} mask="(99) 99999-9999" onChange={undefined} register={register} min={0} max={20} />
                <Input type="tel" title="Celular" placeholder="Digite o seu celular" id="celular" mensagemDeErro={errors} inputMask={true} mask="(99) 99999-9999" onChange={undefined} register={register} min={0} max={20} />
            </div>
        </section>
    )
}