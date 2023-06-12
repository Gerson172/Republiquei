import { getCookie } from 'cookies-next';
import { REPUBLIQUEI_JWT } from '~/utils';
import { api } from './api';

class Republica {
	
	static async ObterImovel(){
		const response = await api.get('/Imovel/ObterImovel');
		return response.data.valor;
	}
	
	static async MeusAnuncios() {
		const token = getCookie(REPUBLIQUEI_JWT);

		if (token) {
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			return await api.get('/Imovel/ObterImovelPorUsuarioId', { headers });
		}
	}

	static async ObterImovelPorId(idImovel: any) {
		const response = await api.get('/Imovel/ObterImovelPorId?IdImovel=' + String(idImovel));
		return response.data.valor;
	  }

	
	static async editarMeusAnuncios(idImovel: any){
		const token = getCookie(REPUBLIQUEI_JWT);
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		return api.put(`/Imovel/AtualizarImovel?IdImovel=${idImovel}`, {
			headers,
		});
	  }
	
	static async ExcluirMeusAnuncios(idImovel:any){
		const token = getCookie(REPUBLIQUEI_JWT);
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		return api.delete(`/Imovel/DeletarImovelPorId?IdImovel=${idImovel}`, {
			headers,
		});
	  }
}


export { Republica };
