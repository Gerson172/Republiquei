import AnnounceUniversity from "../AnnounceUniversity";

export const AnnounceUniversityData = [
    {
        image: "https://www.praiagrande.sp.gov.br/arquivos/foto/44324.jpg",
        acessibility: "Imagem de Republica",
        title: "FATEC - Faculdade Estadual de Tecnologia de Praia Grande",
        location: "Praia Grande - SP",
    },
    {
        image: "https://3.bp.blogspot.com/-a2BNCNOwnTk/W921KVVcMHI/AAAAAAAAPio/JuYNofDv-kwQFrscfNjnNzIoju8CiQWQgCEwYBhgL/s1600/Faculdade%2Bde%2BMedicina%2B-%2BUSP.jpg",
        acessibility: "Imagem de Republica",
        title: "USP - Sao Paulo",
        location: "São Paulo - SP",
    },    
    {
        image: "https://alumni.unesp.br/images/1073743845/2-unesp_1630452342406.jpg",
        acessibility: "Imagem de Republica",
        title: "UNESP",
        location: "BAURU - SP",
    }
]


export const University = () => {
    return (
        <>
      <section className="flex flex-row w-full flex-wrap bg-slate-700 justify-center gap-4 text-center">
        <div className="py-16">
        <h2 className="p-4 text-5xl md:text-6xl font-bold text-white">
              Universidades mais
          <span className="p-4 text-5xl md:text-6xl text-red-600">
              procuradas
          </span>
          </h2>
        </div>
        <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
                {AnnounceUniversityData.slice(0,3).map((data, id) =>
                    <AnnounceUniversity key={id} image={data.image}
                        accessibility={data.acessibility}
                        title={data.title}
                        location={data.location}
                        />
                )}
            </div>
            </section>
        </>
    )
}