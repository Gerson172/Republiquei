import { useEffect, useContext } from "react";
import axios from 'axios';
import { useFormContext } from "react-hook-form";

export interface IFormInput {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    numero: string;
    complemento: string;
    universidade: string;
}

export default function Endereco() {
    const { register, handleSubmit, watch, setValue } = useFormContext<IFormInput>();

    const cep = watch("cep");

    useEffect(() => {
        async function fetchCep() {
            if (cep && cep.length === 8) {
                try {
                    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    setValue("logradouro", data.logradouro);
                    setValue("bairro", data.bairro);
                    setValue("localidade", data.localidade);
                    setValue("uf", data.uf);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchCep();
    }, [cep, setValue]);

    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <section className="flex flex-col gap-8 w-10/12">
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">Endereço da
                    <span className="text-sky-500 font-bold pl-1">República</span></h2>
                <p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px]
            text-left align-middle">Informe o endereço de localização da sua república.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex space-x-4 space-y-4">
                    <input {...register("cep")} type="text" name="cep" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="cep" placeholder="CEP" />
                    <input {...register("logradouro")} type="text" name="logradouro" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="logradouro" placeholder="Endereço" />
                </div>
                <div className="flex space-x-4">
                    <input {...register("numero")} type="text" name="numero" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="numero" placeholder="Número" />
                    <input {...register("bairro")} type="text" name="bairro" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="bairro" placeholder="Bairro" />
                    <input {...register("localidade")} type="text" name="localidade" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="localidade" placeholder="Cidade" />
                </div>
                <div className="flex space-x-4 space-y-4">
                    <input {...register("uf")} type="text" name="uf" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="uf" placeholder="Estado" />
                    <input {...register("complemento")} type="text" name="complemento" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="complemento" placeholder="Complemento" />
                    <select {...register("universidade")} name="universidade" className="bg-[#F8F9FA] py-4 px-6 text-[#90989F] font-semibold flex-grow"
                        id="universidade">
                        {/* Insira as opções da universidade aqui */}
                    </select>
                </div>
            </form>
        </section>
    )

};