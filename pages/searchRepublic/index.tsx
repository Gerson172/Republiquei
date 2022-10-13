import AnnounceRepublic from "../../components/AnnounceRepublic";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import styles from "../../styles/searchRepublic.module.css"

const SearchRepublic = () => {
        const AnnounceRepublicData = [
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


    return (
        <>
            <NavBar />
            <main className={styles.main}>
            {AnnounceRepublicData.map((data) => 
                <AnnounceRepublic image={data.image}
                    accessibility={data.acessibility}
                    title={data.title}
                    location={data.location}
                    price={data.price}
                    sex={data.sex} />
        )}

        <Pagination />
        </main>
        <Footer />
        </>
    )
}

export default SearchRepublic;