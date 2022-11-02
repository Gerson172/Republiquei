import AnnounceRepublic from "../../components/AnnounceRepublic";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import Filter from "../../components/Filter";

export const AnnounceRepublicData = [
    {
        id: 1,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a USP",
        location: "São Paulo - SP",
        price: 1700,
        sex: "Male"
    },
    {
        id: 2,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/f41a9db0-f9d6-4403-ae0d-3d9e0b30e76b.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/00e7527c-030b-4e74-833a-911fa0f9965b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/47641c2d-e524-489c-a484-d949ea69e28a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/5acaca53-402c-4654-a107-9966eb9d38db.jpeg?im_w=720"
        ],
        acessibility: "Imagem de Republica",
        title: "República com 2 dormitórios próximo a UFRJ",
        location: "Barra da Tijuca - RJ",
        price: 1200,
        sex: "Male"
    },
    {
        id: 3,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - Bahia",
        price: 700,
        sex: "Male"
    },
    {
        id: 4,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - BA",
        price: 700,
        sex: "Male"
    },
    {
        id: 5,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - BA",
        price: 500,
        sex: "Male"
    },
    {
        id: 6,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 7,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 8,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 9,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 10,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720",
        ],
        acessibility: "Imagem de Republica",
        title: "República com 4 dormitórios próximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
]


export const SearchLocation = () => {
    const [search, setSearch] = useState('');

    const filterAnnounceRepublicData = AnnounceRepublicData.filter(republica => republica.location.startsWith(search.charAt(0).toUpperCase() + search.slice(1)))


    return (
        <>
            <div className="relative bottom-16">
                <div className="absolute top-5 right-6">
                    <ImSearch />
                </div>
                <input value={search} type="text" onChange={(e) => setSearch(e.target.value)}
                    className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Digite a localização" />
            </div>
            <div className="w-full flex flex-wrap items-center justify-between px-32">
                <h2 className="first-letter:font-bold">{filterAnnounceRepublicData.length} repúblicas para morar em Praia Grande - SP</h2>
                <Filter/>
            </div>
            <main className="flex flex-row flex-wrap justify-center gap-4 mt-8 mb-14">
                {filterAnnounceRepublicData.map((data, id) =>
                    <AnnounceRepublic key={id} id={data.id} images={data.images}
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
            <section className="flex flex-row flex-wrap justify-center gap-4 bg-white">
                <SearchLocation />
                <Pagination />
            </section>
            <Footer />
        </>
    )
}

export default SearchRepublic;