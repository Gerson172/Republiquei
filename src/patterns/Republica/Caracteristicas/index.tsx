import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaFemale, FaMale, FaUsers, FaHome, FaBuilding, FaBed, FaMinus, FaPlus } from 'react-icons/fa';

export default function Caracteristicas() {
    const { register } = useFormContext();
    const [selectedTipoRepublica, setSelectedTipoRepublica] = useState('');
    const [selectedTipoImovel, setSelectedTipoImovel] = useState('');
    const [selectedTipoQuarto, setSelectedTipoQuarto] = useState('');
    const [quantidadeMoradores, setQuantidadeMoradores] = useState(0);

    const handleQuantidadeMoradoresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setQuantidadeMoradores(value);
    };

    const handleTipoQuartoChange = (value: string) => {
        setSelectedTipoQuarto(value);
    };

    const handleTipoRepublicaChange = (value: string) => {
        setSelectedTipoRepublica(value);
    };

    const handleTipoImovelChange = (value: string) => {
        setSelectedTipoImovel(value);
    };


    return (
        <section className="flex flex-col gap-8 w-10/12">
            <h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">
                Características da
                <span className="text-sky-500 font-bold pl-1">República</span>
            </h2>
            <p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px] text-left align-middle">
                Afinal, quais são as características da sua república? Conte um pouco para nós.
            </p>
            <form className="space-t-2">
                <div>
                    <h2>Tipo de República</h2>
                    <div className="flex items-center space-x-4">
                        <label
                            htmlFor="feminino"
                            className={`flex items-center p-4 space-x-2`}
                        >
                            <input
                                type="radio"
                                id="feminino"
                                value="feminino"
                                {...register('tipoRepublica')}
                                checked={selectedTipoRepublica === 'feminino'}
                                onChange={() => handleTipoRepublicaChange('feminino')}
                            />
                            <FaFemale />
                            <span>Feminino</span>
                        </label>
                        <label
                            htmlFor="masculino"
                            className={`flex items-center p-4 space-x-2`}
                        >
                            <input
                                type="radio"
                                id="masculino"
                                value="masculino"
                                {...register('tipoRepublica')}
                                checked={selectedTipoRepublica === 'masculino'}
                                onChange={() => handleTipoRepublicaChange('masculino')}
                            />
                            <FaMale />
                            <span>Masculino</span>
                        </label>
                        <label
                            htmlFor="mista"
                            className={`flex items-center p-4 space-x-2`}
                        >
                            <input
                                type="radio"
                                id="mista"
                                value="mista"
                                {...register('tipoRepublica')}
                                checked={selectedTipoRepublica === 'mista'}
                                onChange={() => handleTipoRepublicaChange('mista')}
                            />
                            <FaUsers />
                            <span>Mista</span>
                        </label>
                    </div>
                </div>
                <div>
                    <h2>Tipo de Imóvel</h2>
                    <div className="flex items-center space-x-4">
                        <label
                            htmlFor="apartamento"
                            className={`flex items-center p-4 space-x-2`}
                        >
                            <input
                                type="radio"
                                id="apartamento"
                                value="apartamento"
                                {...register('tipoImovel')}
                                checked={selectedTipoImovel === 'apartamento'}
                                onChange={() => handleTipoImovelChange('apartamento')}
                            />
                            <FaBuilding />
                            <span>Apartamento</span>
                        </label>
                        <label
                            htmlFor="casa"
                            className={`flex items-center p-4 space-x-2`}
                        >
                            <input
                                type="radio"
                                id="casa"
                                value="casa"
                                {...register('tipoImovel')}
                                checked={selectedTipoImovel === 'casa'}
                                onChange={() => handleTipoImovelChange('casa')}
                            />
                            <FaHome />
                            <span>Casa</span>
                        </label>
                    </div>
                </div>
                <div>
                    <h2>Tipo de Quarto</h2>
                    <div className="flex items-center space-x-4">
                        <label
                            htmlFor="individual"
                            className={`flex items-center p-4 space-x-2`}
                        >
                            <input
                                type="radio"
                                id="individual"
                                value="individual"
                                {...register('tipoQuarto')}
                                checked={selectedTipoQuarto === 'individual'}
                                onChange={() => handleTipoQuartoChange('individual')}
                            />
                            <FaBed />
                            <span>Individual</span>
                        </label>
                        <label
                            htmlFor="compartilhado"
                            className={`flex items-center p-4 space-x-2`}
                        >
                            <input
                                type="radio"
                                id="compartilhado"
                                value="compartilhado"
                                {...register('tipoQuarto')}
                                checked={selectedTipoQuarto === 'compartilhado'}
                                onChange={() => handleTipoQuartoChange('compartilhado')}
                            />
                            <FaUsers />
                            <span>Compartilhado</span>
                        </label>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <h2>Quantidade de Moradores</h2>
                    <div className="flex items-center space-x-4">
                        
                        <button
                            type="button"
                            className="flex items-center bg-red-500 text-white w-6 h-6 btn-circle justify-center"
                            onClick={() => setQuantidadeMoradores(Math.max(quantidadeMoradores - 1, 0))}
                        >

                            <FaMinus className="text-white" />
                        </button>
                        <input
                            type="number"
                            min="0"
                            max="10"
                            step="1"
                            value={quantidadeMoradores}
                            className='text-center'
                            disabled
                            {...register('quantidadeMoradores')}
                        />
                        <button
                            type="button"
                            className="flex items-center space-x-2 bg-green-500 text-white px-2 py-1 rounded"
                            onClick={() => setQuantidadeMoradores(Math.min(quantidadeMoradores + 1, 10))}
                        >
                            <FaPlus className="text-white" />
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}
