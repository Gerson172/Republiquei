import React, { useState } from "react";
import AccordionUI from "../components/AccordionUI";

const Accordion = () => {
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
          <AccordionUI
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;
