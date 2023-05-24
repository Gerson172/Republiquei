import { IoFilterOutline } from "react-icons/io5";

type FilterType = {
    title: string;
    id: string;
    placeholder: string;
    onRangeChange: (value: number) => void;
    min: number;
    max: number
}

import { useState } from 'react';

function Range({ id, title, placeholder, min, max, onRangeChange }: FilterType) {
    const [isOpen, setIsOpen] = useState(false);
    const [rangeValue, setRangeValue] = useState(0); // Valor inicial do range


    const handleInputClick = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setRangeValue(value);
        onRangeChange(value); // Chama a função de retorno de chamada com o novo valor do range
    };

    return (
        <div>
            <label htmlFor={id}>
                <div className="relative flex w-full">
                    {id === "aluguel" && (
                        <span className="absolute left-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
                            R$
                        </span>
                    )}
                    <input
                        className={`w-full ${id === "aluguel" ? "pl-10" : "pl-4"} py-4 border rounded bg-[#F5F5F5]`}
                        type="number"
                        id={id}
                        readOnly
                        placeholder={`${rangeValue ? rangeValue : placeholder}`}
                        onClick={handleInputClick}
                    />
                </div>
            </label>
            <input type="checkbox" id={id} className="modal-toggle" checked={isOpen} />
            {isOpen && (
                <div className={`absolute z-50 ${isOpen ? 'open' : ' '}`}>
                    <div className="modal-box bg-white w-96">
                        <h3 className="mb-5 text-lg font-medium text-sky-900">{title}</h3>
                        <span>{rangeValue}</span>
                        <div className="grid gap-2 grid-cols-3">
                            <input onChange={handleRangeChange} type="range" min={min} max={max} className="w-full" />
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn bg-sky-500 text-white hover:bg-sky-600 border-none"
                                onClick={handleCloseModal}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default Range;
