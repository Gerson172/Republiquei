export interface UserType {
    nome: string,
    sobrenome: string,
    cpf: string,
    sexo: string,
    estadoCivil: string,
    genero: string,
    dataNascimento: Date,
    email: string,
    senha: string
    telefone: string,
    celular: string,
    cep: string,
    logradouro: string,
    numeroCasa: number,
    bairro: string,
    localidade: string,
    estado: string,
    cidade: string,
    uf: string,
    complemento: string,
    proprietario: Boolean,
    universitario: Boolean,
    areaInteresse: string,
    religiao: string,
    orientacaoSexual: string    
}

export type Login = {
    id: number, 
    nome: string,
    sobrenome: string,
    email: string,
    senha: string,
    sucesso: boolean,
    mensagem: string,
    autheiticated: boolean,
    created: boolean,
    expiration: boolean,
    accessToken: string,
    existeUsuario: boolean
}

