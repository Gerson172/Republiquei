import { useQuery } from "react-query";
import { Imovel } from "../../../types/Imovel";
import api from "../../infra/api";

function getRepublicaPorId(idImovel:any){
    const { data: imovel, isFetching } = useQuery<Imovel>(['imovel', idImovel], async () => {
        const response = await api.get('/Imovel/ObterImovelPorId?IdImovel=' + idImovel)
        return response.data.valor;
      }) 


    return {
        imovel, 
        isFetching
    }
}

export default getRepublicaPorId