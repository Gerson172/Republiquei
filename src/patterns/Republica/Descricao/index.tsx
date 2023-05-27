import { useFormContext } from 'react-hook-form';

export default function Descricao() {
  const { register } = useFormContext();

  return (
    <section className="flex flex-col gap-8 w-10/12 h-full">
      <h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">
        Descrição da
        <span className="text-sky-500 font-bold pl-1">República</span>
      </h2>
      <p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px] w-[700px] text-left align-middle">
        Adicione uma descrição do seu imóvel, seja criativo e use esse campo para falar todos os pontos
        importantes do seu imóvel, regras, despesas extras, comodidades, como são os moradores e o que
        você desejar.
      </p>
      <form className="space-y-4 w-full flex-grow">
        <textarea
          {...register('descricaoImovel')}
          className="border-none bg-gray-100 rounded-md shadow-md p-2 h-full font-normal"
          rows={8}
          cols={70}
          placeholder="Descrição do imóvel"
        ></textarea>
      </form>
    </section>
  );
}
