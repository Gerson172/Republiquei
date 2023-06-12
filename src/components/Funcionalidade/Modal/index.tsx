import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Dispatch, SetStateAction } from 'react';

interface ModalType {
	modal: boolean;
	setModal: Dispatch<SetStateAction<boolean>>;
	handleDelete: () => void;
}

function Modal({ modal, setModal, handleDelete }: ModalType) {
	return (
		<>
			{modal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						onClick={() => setModal(false)}
					>
						<div
							className="relative w-auto my-6 mx-auto max-w-3xl"
							onClick={(e) => e.stopPropagation()}
						>
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<span className="text-4xl text-green-400">
										<AiOutlineCheckCircle />
									</span>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setModal(false)}
									></button>
								</div>
								{/*body*/}
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											handleDelete();
										}}
									>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}

export default Modal;
