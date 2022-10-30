import AnnounceUniversity from "../AnnounceUniversity";

export const AnnounceUniversityData = [
    {
        image: "/univercityex.jpeg",
        acessibility: "Imagem de Republica",
        title: "FATEC - Faculdade Estadual de Tecnologia de Praia Grande",
        location: "Praia Grande - SP",
    },
    {
        image: "/univearcityex.jpeg",
        acessibility: "Imagem de Republica",
        title: "UNS - Uniesquina",
        location: "Santos - SP",
    },    
    {
        image: "/univercityex.jpeg",
        acessibility: "Imagem de Republica",
        title: "Universidade Federal de Sergipe",
        location: "Sergipe - SE",
    }
]


export const University = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-center gap-4 mt-8 mb-14 text-center">
                {AnnounceUniversityData.map((data, id) =>
                    <AnnounceUniversity key={id} id={id}
                        accessibility={data.acessibility}
                        title={data.title}
                        location={data.location}
                        />
                )}
            </div>
        </>
    )
}
