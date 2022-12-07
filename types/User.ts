export interface User {
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
    uf: string,
    complemento: string,
    proprietario: Boolean,
    areaInteresse: string,
    religiao: string,
    orientacaoSexual: string    
}

export interface Login {
    id: number, 
    nome: string,
    sobrenome: string,
    email: string,
    senha: string
}

