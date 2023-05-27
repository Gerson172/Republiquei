import { Checkbox } from "../../../types/Form";

export default function CheckBox({id, titulo, register}:Checkbox){
    return (
        <>
        <label htmlFor={id} className="flex px-4 py-4 gap-3 bg-slate-200 border-2 rounded-md active:border-blue-700">
            <input
                {...register(id)}  
                id={id}       
                type="checkbox"
            />
                {titulo}
            </label>
        </>
    )
}