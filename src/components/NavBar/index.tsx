import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { VscAccount } from "react-icons/vsc"

import { REPUBLIQUEI_JWT } from "~/utils";
import { destroyCookie } from "nookies";
import { useUser } from "~/service";

function NavBar() {

    const navItems = [
        { href: "/buscarRepublica", label: "Buscar República" },
        { href: "/seja-um-proprietario", label: "Para Proprietários" },
        { href: "/sobre", label: "Sobre nós" },
        { href: "/ajuda", label: "Ajuda" },
    ];

    const [navbar, setNavbar] = useState(false);

    const customLoader = ({ src }: any) => {
        return src
    }

    const [showLaunch, setShowLaunch] = useState(true);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);


    const launchDays = 23;

    const router = typeof window !== "undefined" ? useRouter() : undefined;

    async function handleLogout() {
        destroyCookie(null, REPUBLIQUEI_JWT);
        refetch();
        await router?.push("/login");
    }


    const { data: user, isLoading, isError, refetch } = useUser();

    const [token, setToken] = useState<string | null | boolean>(null);

    
    return (
        <>
            {showLaunch && (
                <div className="relative w-full bg-sky-500 px-4 py-3 pr-14 text-white">
                    <p className="text-left text-sm font-medium sm:text-center">
                        Falta {launchDays} dias para o lançamento do republiquei
                    </p>
                    <button
                        aria-label="Close"
                        onClick={() => setShowLaunch(false)}
                        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
                    >
                        <IoClose />
                    </button>
                </div>
            )}

            <nav className="w-full bg-white drop-shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/" className="flex flex-row items-center gap-x-2">
                                <Image loader={customLoader} alt="logo" src="/favicon.png" width={50} height={50} />
                                <h2 className="text-2xl text-[#00A3D8] font-bold">REPUBLIQUEI</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}>
                                    {navbar ? (
                                        <GrClose className="text-2xl" />
                                    ) : (
                                        <span>
                                            <GiHamburgerMenu className="text-2xl" />
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                {navItems.map((item) => (
                                    <li key={item.href} className="hover:text-sky-500">
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {token ? (
                                <div>
                                    <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                        <button
                                            className="inline-block w-full px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow" onClick={handleLogout}
                                        >
                                            Anunciar
                                        </button>
                                    </div>

                                    <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                        <button
                                            className="inline-block w-full px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow" onClick={handleLogout}
                                        >
                                            Sair
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                    <Link href="/cadastrar"
                                        className="inline-block w-full px-6 py-4 font-bold text-gray-800 bg-white rounded-md drop-shadow"
                                    >
                                        Cadastre-se

                                    </Link>
                                    <Link href='/login'
                                        className="inline-block w-full px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow"
                                    >
                                        Entrar

                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>


                    {user ? (
                        <div className="flex gap-4 items-center">
                            <div className="hidden space-x-2 md:inline-block">
                                <Link
                                    href="/anunciarRepublicas"
                                    className="px-6 py-2 text-[#212529] font-bold bg-[#E5E5E5] rounded-md shadow"
                                >
                                    Anunciar
                                </Link>
                            </div>
                            <div className="hidden space-x-2 md:inline-block">
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex py-2 px-4 gap-2 justify-center items-center w-full rounded-md bg-white text-gray-700 "
                                            id="options-menu"
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen}
                                            onClick={toggleDropdown}
                                        >
                                            <span className="text-2xl">
                                                <VscAccount />
                                            </span>
                                            <span className="text-sm font-medium">{user?.nome}</span>
                                        </button>
                                    </div>

                                    {dropdownOpen && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div
                                                className="py-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu"
                                            >
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Meu Perfil
                                                </Link>
                                                <Link href="/meusAnuncios">
                                                    <span
                                                        className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                        role="menuitem"
                                                    >
                                                        Meus Anúncios
                                                    </span>
                                                </Link>
                                                <button
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    onClick={handleLogout}
                                                    role="menuitem"
                                                >
                                                    Sair
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="hidden space-x-2 md:inline-block">
                            <Link href="/cadastrar"
                                className="px-6 py-4 font-bold text-gray-800 bg-white rounded-md drop-shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                            >
                                Cadastre-se

                            </Link>
                            <Link href="/login"
                                className="transition ease-in-out delay-200 hover:scale-105 px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow">
                                Entrar
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}


export default NavBar;

