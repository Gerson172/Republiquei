import Link from "next/link";
import { type } from "os";

type NavBarBuilderProps = {
    navbar: any
}

function NavBarBuilder({ navbar }: NavBarBuilderProps) {

    return (
        <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
        >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="dark:text-white hover:text-sky-500">
                    <Link href="/searchRepublic" ><a href="javascript:void(0)">Buscar Republica</a></Link>
                </li>
                <li className="dark:text-white hover:text-sky-500">
                    <Link href="/owner"><a href="javascript:void(0)">Para Proprietarios</a></Link>
                </li>
                <li className="dark:text-white hover:text-sky-500">
                    <Link href="/about"><a href="javascript:void(0)">Sobre nós</a></Link>
                </li>
                <li className="dark:text-white hover:text-sky-500">
                    <Link href="/help"><a href="javascript:void(0)">Ajuda</a></Link> 
                </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link href="#">
                    <a
                        className="inline-block w-full px-6 py-4 font-bold text-gray-800 bg-white rounded-md drop-shadow"
                    >
                        Anunciar
                    </a>
                </Link>
                <Link href='/login'>
                    <a
                        className="inline-block w-full px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow"
                    >
                        Entrar
                    </a>
                </Link>
            </div>


        </div>
    );
}

export default NavBarBuilder;