import Image from "next/image";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { BsHouseDoorFill } from "react-icons/bs"
import { User } from "../../../types/User";
import { useQuery } from 'react-query'
import api from "../../infra/api";
import { useState } from "react";

function Sidebar() {

    function getStaticPropsVisualizarRepublica() {
        return useRouter().pathname == "/dashboard/visualizarRepublica";
    }

    function getStaticPropsCadastrarRepublica(){
        return useRouter().pathname == "/dashboard/cadastrarRepublica";
    }

    const [id, setId] = useState<string | null>(null)

    if (typeof window !== 'undefined') {
        // Perform localStorage action
         setId(sessionStorage.getItem("id"))
    }
    

    const {data, isFetching} = useQuery<User>('user', async () => {
      const response = await api.get('/Usuario/ObterUsuarioContatoPorId?IdUsuario='+id)
      return response.data.valor;
  })
  
    console.log(data)
    
    return (
            <div className="flex md:relative md:min-h-screen md:w-1/5 w-full flex-row md:flex-col justify-between border-r bg-white">
                        {isFetching && <p>Carregando...</p>}
                <div className=" py-6 text-gray-700">
                    <nav aria-label="Main Nav" className="flex fixed items-center sm:items-stretch md:flex-col flex-row gap-10 sm:gap-2 sm:space-y-1">
                        <Link href="/">
                        <a className="flex items-center rounded-lg md:px-4 md:py-2 md:mb-8 ">
                            <BiLogOut className="text-6xl md:text-3xl text-slate-500 hover:text-slate-900"/>
                        </a>
                        </Link>
                        <Link href={`/dashboard/cadastrarRepublica?id=${id}`}>
                        <a
                            className={"flex border items-center p-4 sm:p-0 rounded-lg md:px-2 md:py-2" + (getStaticPropsCadastrarRepublica() ?  " bg-sky-500 text-white " : '')}
                        >
                            <HiPlus className="text-3xl sm:text-md"/>
                            <span className="hidden sm:block ml-3 text-sm font-medium"> Cadastrar Republica </span>
                        </a>
                        </Link>
                        <Link href={`/dashboard/visualizarRepublica?id=${id}`}>
                        <a
                            className={"flex items-center sm:p-0 rounded-lg md:ml-2 md:px-2 md:py-2"+ (getStaticPropsVisualizarRepublica() ? " bg-sky-500 text-white " : '')}
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
                            alt={data?.nome}
                            src={`https://github.com/${data?.nome}.png`}
                            className="h-14 sm:w-10 sm:h-10 w-14 rounded-full object-cover"
                        />

                        <div className="sm:ml-1.5 flex mx-auto">
                            <p className="text-xs">
                                <strong className="hidden sm:block font-medium">{data?.nome} {data?.sobrenome}</strong>
                                <span className="hidden sm:block"> {data?.email} </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
    );
}

export default Sidebar;