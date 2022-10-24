import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavBarBuilder from "./NavBarBuilder";


function getStaticProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    return router.pathname == "/searchRepublic";
}

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-white mb-10 dark:bg-gray-800 drop-shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <a className="flex flex-row items-center gap-x-2" href="javascript:void(0)">
                                <Image alt="logo" src="/favicon.png" width={50} height={50} />
                                <h2 className="text-2xl text-sky-500 font-bold dark:text-white uppercase">Republiquei</h2>
                            </a>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 dark:text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 dark:text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {getStaticProps() ? '' : <NavBarBuilder navbar={navbar} />}
                </div>

                <div className="hidden space-x-2 md:inline-block">
                    <a
                        className="px-6 py-4 font-bold text-gray-800 bg-white rounded-md drop-shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                        Anunciar
                    </a>
                    <Link href="/login">
                        <a
                            className="transition ease-in-out delay-200 hover:scale-105 px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow"
                        >
                            Entrar
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;