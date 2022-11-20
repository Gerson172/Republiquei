
export type Input = {
    type: string,
    name: string,
    title: string,
    placeholder: string,
    onChange: any,
    id: string
    mensagemDeErro: any,
    inputMask: boolean,
    mask: string,
    register: any,
}

export type Select = {
    name: string,
    title: string,
    id: string,
    options: any,
    onChange: any,
    mensagemDeErro: any,
    register: any
}
