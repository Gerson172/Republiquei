import { string } from "yup"

export type Imovel = {
    idImovel: number,
    midia: string,
    quantidadeComodo: number,
    capacidadePessoas: number,
    valor: number,
    descricao: string,
    possuiAcessibilidade: boolean,
    possuiGaragem: boolean,
    possuiAcademia: boolean,
    possuiMobilia: boolean,
    possuiAreaLazer: boolean,
    possuiPiscina: boolean,
    quantidadeBanheiros: number,
    quantidadeQuartos: number,
    nomeImovel: string,
    email: string,
    telefone: number,
    celular: number,
    fumante: boolean,
    animal: boolean,
    alcool: boolean,
    visitas: boolean,
    crianca: boolean,
    drogas: boolean
    tipoImovel: string,
    tipoQuarto: string,
    tipoSexo: string,
    cep: number,
    cidade: string,
    bairro: string,
    estado: string
    logradouro: string,
    numero: string,
    complemento: string,
    idUsuario: number
}
