import InputMask from "react-input-mask"
import { Input } from "../../types/Form"
import { FormEvent } from 'react'


function Input({ id, title, type, placeholder, mensagemDeErro, inputMask, mask, onChange, register}: Input) {
    return (
        <>
            <div className="relative z-0 mb-6 w-full group">
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
                {inputMask == true ? 
                <InputMask 
                    {...register(`${id}`, {
                        onChange: (e: FormEvent<HTMLInputElement>) => onChange ? onChange(e.currentTarget.value) : null
                    })}
                    type={type}
                    placeholder={placeholder} 
                    id={id} 
                    mask={mask}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                /> :
                
                <input
                    {...register(`${id}`, {
                        onChange: (e: FormEvent<HTMLInputElement>) => onChange ? onChange(e.currentTarget.value) : null
                    })}
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />}
                {mensagemDeErro.id && <span className="text-sm text-red-500">{mensagemDeErro.id.message}</span>}
            </div>
        </>
    )
}



export default Input