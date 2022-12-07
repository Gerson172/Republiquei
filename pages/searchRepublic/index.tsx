import AnnounceRepublic from "../../components/AnnounceRepublic";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import Filter from "../../components/Filter";
import api from "../../services/api";


function SearchRepublic(){
    const [search, setSearch] = useState('');
    const [imovel, setImovel] = useState('');
    
    useEffect(() => {
        api.get('/Imovel/ObterImovel')
        .then(res => {
            setImovel(res.data.valor)
            console.log(imovel)
        })
        
    }, [])

    return (
        <>
            <NavBar />
            <section className="flex flex-row flex-wrap justify-center gap-4 bg-white">
                <Pagination />
            </section>
            <Footer />
        </>
    )
}

export default SearchRepublic;