import { type } from "os";
import React, { useState } from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionData = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "O que é uma República Universitária ?",
      answer: "A república é uma casa ou apartamento compartilhado apenas por estudantes, em geral, da mesma universidade ou curso. O local, quase sempre, está situado bem próximo da instituição de ensino, o que facilita o cotidiano da vida acadêmica.",
    },
    {
      id: 2,
      question: "Qual a missão do Republiquei ?",
      answer:
        "Criado de Universitários para Universitários, o republiquei visa uma oportunidade de insentivar os estudos.",
    },
    {
      id: 3,
      question: "Como posso utilizar ?",
      answer:
        "É simlpes! Basta você se cadastrar e verificar qual a melhor república para você ;)",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mb-12">
      {data.map((data) => {
        return (
          <Accordion
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></Accordion>
        );
      })}
    </div>
  );
};

type AccordionPropsData = {
  title: string,
  children: string,
  Id: any,
  Index: any, 
  setIndex: any,
}

const Accordion = ({ title, children, Id, Index, setIndex }:AccordionPropsData) => {
  const handleSetIndex = (Id: any) => Index !== Id && setIndex(Id);

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white hover:bg-pink-500 hover:shadow-lg focus:bg-pink-500 shadow-inner"
      >
        <div className="flex group cursor-pointer">
          <div className="font-semibold pl-10 group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-pink-600" />
          ) : (
            <HiX className="w-6 h-6 group-hover:text-white text-pink-600" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="pl-10  font-semibold text-pink-500 w-3/4 h-auto  rounded-md p-4 border-l-2 border-blue-300 mb-2 ">
          {children}
        </div>
      )}
    </>
  );
};

export default Accordion;
