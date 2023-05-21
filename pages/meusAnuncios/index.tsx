import { Imovel } from "../../types/Imovel";
import getRepublica from "../../src/service/republicas/getRepublicas";
import NavBar from "../../src/components/NavBar";
import AnuncioRepublicas from "../../src/components/Republicas/AnuncioRepublicas";

function meusAnuncios(){
    
    const {data, isFetching} = getRepublica()


    console.log(data)

    return (
    <section>
    <NavBar/>
    <div className="flex flex-row ml-4 my-16 flex-wrap gap-4 bg-white">
    { isFetching && <p>Carregando....</p>}
        {data?.map((props: Imovel) => {
                    return <AnuncioRepublicas 
                        midia={props.midia}
                        valor={props.valor}
                        nomeImovel={props.nomeImovel}
                        />
                })}
        </div>
  </section>)
}

export default meusAnuncios