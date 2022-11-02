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
                    <span id="badge-dismiss-default" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800">
                        Default
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    <span id="badge-dismiss-dark" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-200 dark:text-gray-800">
                        Dark
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    <span id="badge-dismiss-red" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-200 dark:text-red-800">
                        Red
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-300 dark:hover:text-red-900" data-dismiss-target="#badge-dismiss-red" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    <span id="badge-dismiss-green" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-200 dark:text-green-800">
                        Green
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-300 dark:hover:text-green-900" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    <span id="badge-dismiss-yellow" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-200 dark:text-yellow-800">
                        Yellow
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-300 dark:hover:text-red-900" data-dismiss-target="#badge-dismiss-yellow" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    <span id="badge-dismiss-indigo" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-200 dark:text-indigo-800">
                        Indigo
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-300 dark:hover:text-indigo-900" data-dismiss-target="#badge-dismiss-indigo" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    <span id="badge-dismiss-purple" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-200 dark:text-purple-800">
                        Purple
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-300 dark:hover:text-purple-900" data-dismiss-target="#badge-dismiss-purple" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    <span id="badge-dismiss-pink" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-200 dark:text-pink-800">
                        Pink
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 dark:hover:bg-pink-300 dark:hover:text-pink-900" data-dismiss-target="#badge-dismiss-pink" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Filtrar</label>
                    </div>
                </div>
            </div>
        </div>
    )
}