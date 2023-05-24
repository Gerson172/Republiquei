import { useQuery } from 'react-query';
import api from '../../infra/api';
import { Imovel } from '../../../types/Imovel';

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