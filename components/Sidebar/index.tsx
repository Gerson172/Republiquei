import Image from "next/image";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { BsHouseDoorFill } from "react-icons/bs"

function Sidebar() {

    function getStaticPropsVisualizarRepublica() {
        return useRouter().pathname == "/dashboard/visualizarRepublica";
    }

    function getStaticPropsCadastrarRepublica(){
        return useRouter().pathname == "/dashboard/cadastrarRepublica";
    }
    
    return (
            <div className="flex md:relative md:min-h-screen md:w-1/5 w-full flex-row md:flex-col justify-between border-r bg-white">
                <div className="px-4 py-6 text-gray-700">
                    <nav aria-label="Main Nav" className="flex items-center sm:items-stretch md:flex-col flex-row gap-10 sm:gap-2 sm:space-y-1">
                        <Link href="/">
                        <a className="flex items-center rounded-lg md:px-4 md:py-2 md:mb-8 ">
                            <BiLogOut className="text-6xl md:text-3xl text-slate-500 hover:text-slate-900"/>
                        </a>
                        </Link>
                        <Link href="/dashboard/cadastrarRepublica">
                        <a
                            className={"flex border items-center p-4 sm:p-0 rounded-lg md:px-2 md:py-2" + (getStaticPropsCadastrarRepublica() ?  " bg-sky-500 text-white " : '')}
                        >
                            <HiPlus className="text-3xl sm:text-md"/>
                            <span className="hidden sm:block ml-3 text-sm font-medium"> Cadastrar Republica </span>
                        </a>
                        </Link>
                        <Link href="/dashboard/visualizarRepublica">
                        <a
                            className={"flex items-center px-2 sm:p-0 rounded-lg md:px-2 md:py-2"+ (getStaticPropsVisualizarRepublica() ? " bg-sky-500 text-white " : '')}
                        >
                            <BsHouseDoorFill className="text-4xl sm:text-md"/>

                            <span className="hidden sm:block ml-3 text-sm font-medium"> Visualizar Republicas </span>
                        </a>
                        </Link>
                    </nav>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a
                        href="#"
                        className="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50"
                    >
                        <img
                            alt="Man"
                            src="https://github.com/huser0.png"
                            className="h-14 sm:w-10 sm:h-10 w-14 rounded-full object-cover"
                        />

                        <div className="sm:ml-1.5 flex mx-auto">
                            <p className="text-xs">
                                <strong className="hidden sm:block font-medium">Hugo Sergio</strong>
                                <span className="hidden sm:block"> hugo@admin.com </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
    );
}

export default Sidebar;