import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Carrosel(props: { imagens: string[] }){

    const [index, setIndex] = useState<number>(0);
    const scrollRef = useRef<HTMLDivElement>(null);
  
    function avancar() {
      if (index < props.imagens.length - 1) {
        setIndex(index + 1);
        scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
      }
    }
  
    function voltar() {
      if (index > 0) {
        setIndex(index - 1);
        scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
      }
    }
  
    useEffect(() => {
      scrollRef.current?.scrollTo({ left: index * 320, behavior: "smooth" });
    }, [index])
  
    function handleDrag(e: React.DragEvent<HTMLDivElement>) {
      const { clientX } = e;
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const center = left + width / 2;
      if (clientX < center && index > 0) {
        voltar();
      } else if (clientX > center && index < props.imagens.length - 1) {
        avancar();
      }
    }

    return (
        <>
             <div className="h-450 overflow-hidden relative">
          <div
            ref={scrollRef}
            onDrag={handleDrag}
            className="flex flex-row gap-2 transition-all duration-500"
            style={{ transform: `translateX(-${index * 320}px)` }}
          >
            {props.imagens.map((imagem, i) => (
              <img
                key={i}
                src={imagem}
                alt="Apartamento"
                className={`w-320 h-[400px] object-contain object-center rounded-lg ${i === index ? "filter-none" : "filter-grayscale"
                  }`}
              />
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <button
              onClick={voltar}
              disabled={index === 0}
              className='bg-sky-500 text-white rounded-md py-2 px-4 hover:bg-sky-600 mr-4 disabled:bg-gray-400 disabled:cursor-not-allowed'
            >
              <AiOutlineArrowLeft/>
            </button>
            <button
              onClick={avancar}
              disabled={index === props.imagens.length - 4}
              className='bg-sky-500 text-white rounded-md py-2 px-4 hover:bg-sky-600 ml-4 disabled:bg-gray-400 disabled:cursor-not-allowed'
            >
              <AiOutlineArrowRight/>
            </button>
          </div>
        </div>
        </>
    )
}