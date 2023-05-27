import { useFormContext } from "react-hook-form";

export default function Valor() {
    const { register } = useFormContext();

    return (
        <section className="flex flex-col gap-8 w-10/12">
            <h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">Valor da
                <span className="text-sky-500 font-bold pl-1">República</span></h2>
            <p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px] 
            text-left align-middle">Qual é o valor total a ser cobrado mensalmente? Esse valor será divido por todos os moradores 
            da república.</p>
            <input
                type="text"
                className="bg-[#F8F9FA] w-4/5 py-4 px-6 text-[#90989F] font-normal"
                id="titulo"
                placeholder="Valor mensal do aluguel da república"
                {...register("valor")}
            />
        </section>
    );
}
