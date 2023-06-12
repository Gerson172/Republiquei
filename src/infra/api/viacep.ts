import axios from 'axios';

export type viaCepType = {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
};

const viacep = axios.create({
	baseURL: 'https://viacep.com.br/ws/',
});

export default viacep;
