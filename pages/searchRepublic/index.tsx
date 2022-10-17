import AnnounceRepublic from "../../components/AnnounceRepublic";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { IoFilterOutline } from "react-icons/io5";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

export const AnnounceRepublicData = [
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - Bahia",
        price: 1000,
        sex: "Male"
    },
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - Bahia",
        price: 1000,
        sex: "Male"
    },    
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - Bahia",
        price: 1000,
        sex: "Male"
    },
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Aracaju - SE",
        price: 1000,
        sex: "Female"
    },
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Aracaju - SE",
        price: 1000,
        sex: "Male"
    },
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Aracaju - SE",
        price: 1000,
        sex: "Male"
    },
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Aracaju - SE",
        price: 1000,
        sex: "Female"
    },
    {
        image: "/republic-ex.jpeg",
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Aracaju - SE",
        price: 1000,
        sex: "Female"
    }
]


export const SearchLocation = () => {
    const [search, setSearch] = useState('');

    const filterAnnounceRepublicData = AnnounceRepublicData.filter(republica => republica.location.startsWith(search))


    return (
        <>
            <div className="absolute top-5">
                <div className="absolute top-5 right-6">
                    <ImSearch />
                </div>
                <input value={search} type="text" onChange={(e) => setSearch(e.target.value)}
                    className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Digite a localização" />
            </div>
            <div className="w-full flex flex-wrap items-center justify-between px-32">
                <h2 className="first-letter:font-bold">{filterAnnounceRepublicData.length} repúblicas para morar em Praia Grande - SP</h2>
                <div className="flex flex-row gap-2 items-center bg-gray-200 px-4 py-2 rounded border-2 border-gray-500">
                    <IoFilterOutline className="text-gray-800 text-lg" />
                    <h2 className="font-bold">Filtrar</h2>
                </div>
            </div>
            <main className="flex flex-row flex-wrap justify-center gap-4 mt-8 mb-14">
                {filterAnnounceRepublicData.map((data, id) =>
                    <AnnounceRepublic key={id} image={data.image}
                        accessibility={data.acessibility}
                        title={data.title}
                        location={data.location}
                        price={data.price}
                        sex={data.sex} />
                )}
            </main>
        </>
    )
}



const SearchRepublic = () => {
    return (
        <>
            <NavBar />
            <main className="flex flex-row flex-wrap justify-center gap-4 mt-8 mb-14">
                <SearchLocation />
                <Pagination />
            </main>
            <Footer />
        </>
    )
}

export default SearchRepublic;