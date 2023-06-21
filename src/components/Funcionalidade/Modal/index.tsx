function ModalEditar({ open, onClose, children }: any) {
    return (
        <div onClick={onClose} className={`
        fixed inset-0 flex justify-center items-center
        transition-colors z-[9999]
        ${open ? "visible bg-black/20" : "invisible"}
    `}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-white rounded-xl shadow p-6 transition-all max-sm:w-96
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}>

                {children}
            </div>
        </div>
    )
}

function ModalConfirmar({ open, onClose, children }: any) {
    return (
        <div onClick={onClose} className={`
        fixed inset-0 flex justify-center items-center
        transition-colors z-[9999]
        ${open ? "visible bg-black/20" : "invisible"}
    `}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-white rounded-xl shadow p-6 transition-all max-sm:w-96
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}>

                {children}
            </div>
        </div>
    )
}

function ModalDeletar({ open, onClose, children }: any) {
    return (
        <div onClick={onClose} className={`
            fixed inset-0 flex justify-center items-center
            transition-colors z-[9999]
            ${open ? "visible bg-black/20" : "invisible"}
        `}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-white rounded-xl shadow p-6 transition-all max-sm:w-96
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}>

                {children}
            </div>
        </div>
    )
}

export { ModalDeletar, ModalEditar, ModalConfirmar }