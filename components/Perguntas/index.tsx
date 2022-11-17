import { useState } from "react";

export default function Perguntas() {

    return (
        <>

        <div className="">
            <h2 className="text-xl mt-12">
            O que é uma república?
            </h2>
        </div>
        <div className="text-gray-500">
            <h3>
            A república é uma casa ou apartamento compartilhado apenas por estudantes. O local, quase sempre, está situado bem próximo da instituição de ensino,  o que facilita o cotidiano da vida acadêmica.
            </h3>
        </div>


        <div className="">
            <h2 className="text-xl mt-12">
            Qual a missão do Republiquei?
            </h2>
        </div>
        <div className="text-gray-500">
            <h3>
            O Republiquei surge com a ideia de criar uma maneira simplicaficada para todos os universitários Brasileiros encontrerem uma moradia digna para seguirem seus estudos. 
            </h3>
        </div>


        <div className="">
            <h2 className="text-xl left mt-12">
            Onde eu posso buscar entrar em contato?
            </h2>
        </div>
        <div className="text-gray-500">
            <h3>
                Você pode entrar em contato atravês do: Discord, Twitter e Facebook. :)
            </h3>
            <h3 className="mt-6 text-sm hover:cursor-pointer hover:underline underline-offset-2">
                Obter suporte!
            </h3>
        </div>

        </>
    )
}