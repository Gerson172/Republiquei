import axios from "axios";

export type ViaCep = {
  "cep": string,
  "logradouro": string,
  "complemento": string,
  "bairro": string,
  "cidade": string,
  "uf": string,
  "ibge": string,
  "gia": string,
  "ddd": string,
  "siafi": string
}

const viacep = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});


export default viacep;