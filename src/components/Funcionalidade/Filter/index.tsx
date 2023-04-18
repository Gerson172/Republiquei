import { IoFilterOutline } from "react-icons/io5";


export default function Filter() {
    return (
        <div>
            <label htmlFor="my-modal" className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 gap-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">Filter<IoFilterOutline className="text-white text-lg" /></label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Filtrar</h3>
                    <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</h3>
                    <div className="grid gap-2 grid-cols-3">
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Filtrar</label>
                    </div>
                </div>
            </div>
        </div>
    )
}