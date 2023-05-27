import { useQuery } from 'react-query';
import { Imovel } from '../../types/Imovel';
import { api } from '../api';

function getRepublica(){

    const { data, isFetching } = useQuery<Imovel[]>('searchImoveis', async () => {
        const response = await api.get('/Imovel/ObterImovel');
        return response.data.valor;
      });

      return {
        data,
        isFetching
      }
}


export default getRepublica