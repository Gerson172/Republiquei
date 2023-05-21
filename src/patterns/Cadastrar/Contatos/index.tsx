import Input from "../../../components/Formulario/Input";
import InputMask from "react-input-mask"


export default function Contatos({ errors, register }: any) {
    return (
        <section>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-gray-900">Telefone</label>
                <InputMask 
                    {...register('telefone')}
                    type="tel"
                    placeholder="Digite o seu telefone"
                    id="telefone"
                    mask="(99) 99999-9999"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.telefone && <span className="text-sm text-red-500">{errors.telefone.message}</span>}
                </div>
                <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900">Celular</label>
                <InputMask 
                    {...register('celular')}
                    type="tel"
                    placeholder="Digite o seu celular"
                    id="celular"
                    mask="(99) 99999-9999"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.celular && <span className="text-sm text-red-500">{errors.celular.message}</span>}
                </div>
            </div>
        </section>
    )
}