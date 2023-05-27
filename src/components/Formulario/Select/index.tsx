import { Select } from "../../../types/Form"
import { FormEvent } from 'react'

function Select({id, title, name, mensagemDeErro, options, onChange, register}:Select) {
    return (
        <>
            <div className="relative z-0 mb-6 w-full group">
                <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
                <select
                   {...register(`${id}`, {
                    onChange: (e: FormEvent<HTMLSelectElement>) => onChange ? onChange(e.currentTarget.value) : null
                    })}
                    id={id}
                    defaultValue={options[0]}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    {options.map((options: any, index: number) => <option key={index} >{options.label}</option>)}
                </select>
                {mensagemDeErro.id && <span className="text-sm text-red-500">{mensagemDeErro.id.message}</span>}
            </div>
        </>
    )
}

export default Select