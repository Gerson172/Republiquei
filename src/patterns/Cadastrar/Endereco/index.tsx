import Input from "../../../components/Formulario/Input";

export default function Endereco({ errors, register, obterEndereco }: any) {

    return (
        <section>
            <div className="grid md:grid-cols-3 md:gap-6">
                <Input type="cep" title="CEP" placeholder="Digite o seu CEP" id="cep" mensagemDeErro={errors} inputMask={true} mask="99999-999" onChange={obterEndereco} register={register} min={0} max={20} />
                <Input type="text" title="Endereço" placeholder="Digite o seu endereço" onChange={undefined} id="logradouro" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                <Input type="text" title="Número" placeholder={"Digite o número da sua residência"} onChange={undefined} id="numeroCasa" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
                <Input type="text" id="bairro" title="Bairro" placeholder="Digite o seu bairro" onChange={undefined} mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                {//<Input type="text" title="Cidade" placeholder={"Digite o nome da sua cidade"} onChange={undefined} id="localidade" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
                }
                <div className="relative z-0 mb-6 w-full group">
                    <label htmlFor="areaInteresse" className="block mb-2 text-sm font-medium text-gray-900">Area Interesse</label>
                    <input
                        {...register('areaInteresse')}
                        type="text"
                        id="areaInteresse"
                        placeholder="Digite sua area de interesse"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    {errors.areaInteresse && <span className="text-sm text-red-500">{errors.areaInteresse.message}</span>}
                </div>
                                <Input type="complemento" title="Complemento" placeholder="" onChange={undefined} id="complemento" mensagemDeErro={errors} inputMask={false} mask={""} register={register} min={0} max={20} />
            </div>
        </section>
    );
}