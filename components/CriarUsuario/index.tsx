import Input from "../Input";

export default function CriarUsuario({ errors, register }: any) {
    return (
        <section>
            <Input type="email" title="Email" placeholder="Digite o seu email" id="email" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register} min={0} max={100} />
            <Input type="password" title="Senha" placeholder="Digite sua senha" id="senha" mensagemDeErro={errors} inputMask={false} mask={""} onChange={undefined} register={register} min={0} max={10} />
        </section>
    );
}