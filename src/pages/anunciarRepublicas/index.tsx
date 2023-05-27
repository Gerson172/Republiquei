import { NextPage } from "next";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import Footer from "../../components/Funcionalidade/Footer";
import { BsCheckLg } from "react-icons/bs"
import Titulo from "../../patterns/Republica/Titulo";
import Fotos from "../../patterns/Republica/Fotos";
import Endereco from "../../patterns/Republica/Endereco";
import { MyFormContext } from "../../context/FormContextValues";
import { useForm, FormProvider } from 'react-hook-form';
import Caracteristicas from "../../patterns/Republica/Caracteristicas";
import Descricao from "../../patterns/Republica/Descricao";
import Valor from "../../patterns/Republica/Valor";


type stepComponentType = {
    id: number,
    name: string,
    step: number,
    check: boolean[],
}


const StepComponent = ({ id, name, step, check }: stepComponentType) => {
    return (
        <div className="flex items-center font-sans">
            {check[id - 1] ? (
                <div
                    className={`px-4 py-4 drop-shadow-xl shadow-md rounded-lg translate-y-4 bg-green-500 text-white`}
                >
                    <span className="text-gray-200"><BsCheckLg /></span>
                </div>
            ) : (
                <div
                    className={`px-4 py-2 drop-shadow-xl shadow-md rounded-lg translate-y-4 ${step === id ? 'bg-sky-500 text-white' : 'bg-[#F8F9FA]'
                        }`}
                >
                    <h3 className="font-bold text-xl leading-6">{id}</h3>
                </div>
            )}
            <div className="px-4 py-2 translate-y-4">
                <h3
                    className={`text-sky-500 py-2 font-semibold leading-tight ml-2 self-center ${step === id ? 'text-sky-500' : ''
                        }`}
                >
                    {name}
                </h3>
            </div>
        </div>
    );
};


export default function AnunciarRepublica() {
    const formMethods = useForm();
    const formComponents = [
        <Titulo />,
        <Fotos />,
        <Endereco />,
        <Caracteristicas />,
        <Descricao />,
        <Valor />
        ,
    ];
    const [step, setStep] = useState<number>(0);
    const [check, setCheck] = useState<boolean[]>(new Array(formComponents.length).fill(false));

    function previousStep() {
        if (step === 0) return;
        setStep(step - 1);
    }

    function nextStep() {
        if (step === formComponents.length) return;
        setCheck(oldChecks => {
            const newChecks = [...oldChecks];
            for (let i = 0; i <= step; i++) {
                newChecks[i] = true;
            }
            return newChecks;
        });
        setStep(step + 1);
    }

    const onSubmit = (data: any) => console.log(data);



    return (
        <FormProvider {...formMethods}>
            <MyFormContext.Provider value={{ formMethods }}>
                <NavBar />
                <main className="flex flex-row m-16 items-center justify-center">
                    <section className="bg-[#F8F9FA] py-8 rounded-lg shadow-md border w-2/6 flex flex-col gap-2 pl-8">
                        <h2 className="text-[#212529] font-bold text-2xl leading-7 text-left align-top">Anunciar Republica</h2>
                        <div className="px-4 py-2">
                            <StepComponent id={1} name="Titulo" step={step} check={check} />
                            <StepComponent id={2} name="Fotos" step={step} check={check} />
                            <StepComponent id={3} name="Endereço" step={step} check={check} />
                            <StepComponent id={4} name="Características" step={step} check={check} />
                            <StepComponent id={5} name="Descrição" step={step} check={check} />
                            <StepComponent id={6} name="Regras" step={step} check={check} />
                            <StepComponent id={7} name="Valor" step={step} check={check} />
                        </div>
                    </section>
                    <section className="flex flex-col gap-4  items-center justify-center w-full">
                        {formComponents[step]}
                        <div className="flex flex-row items-center justify-between">
                            <span
                                className={`w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 
                text-white font-semibold rounded-lg px-4 py-3 mt-6 
                cursor-pointer ${step !== 0 ? 'visible' : 'invisible'}`}
                                onClick={previousStep}
                            >
                                Voltar
                            </span>
                            {step === formComponents.length - 1 ? (
                                <button
                                    type="submit"
                                    className="w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400
                  text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                >
                                    Finalizar
                                </button>
                            ) : (
                                <a
                                    className={`w-30 block bg-sky-500 hover:bg-sky-400 focus:bg-sky-400 
                  text-white font-semibold rounded-lg px-4 py-3 mt-6 cursor-pointer  
                  ${step !== formComponents.length - 1 ? 'visible' : 'invisible'}`}
                                    onClick={nextStep}
                                >
                                    Avançar
                                </a>
                            )}
                        </div>
                    </section>
                </main>
                <Footer />
            </MyFormContext.Provider>
        </FormProvider>
    )
}