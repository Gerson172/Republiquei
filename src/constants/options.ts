const estadoCivil = [
    { value: 'Selecione um estado civil', label: 'Selecione um estado civil'},
    { value: "Solteiro", label: 'Solteiro(a)'},
    { value: "Casado", label: 'Casado(a)'},
    { value: "Viuvo", label: 'Viuvo(a)'},
    { value: 'Outro/Prefiro não dizer', label: 'Outro/Prefiro não dizer'}
]

const sexo = [
    { value: 'Selecione um sexo', label: 'Selecione um sexo'},
    { value: "Masculino", label: 'Masculino'},
    { value: "Feminino", label: "Feminino"},
    { value: 'Outro/Prefiro não dizer', label: 'Outro/Prefiro não dizer'}
]

const genero = [
    { value: 'Selecione uma genero', label: 'Selecione uma genero'},
    { value: 'Homem ou Mulher CIS', label: 'Homem ou Mulher CIS' },
    { value: 'Homem ou Mulher Trans', label: 'Homem ou Mulher Trans'},
    { value: 'LGBTQI+', label: 'LGBTQI+'},
    { value: 'Outro/Prefiro não dizer', label: 'Outro/Prefiro não dizer'}
]

const religiao = [
    { value: 'Selecione uma religião', label: 'Selecione uma religião'},
    { value: 'Cristianismo', label: 'Cristianismo'},
    { value: 'Islamismo', label: 'Islamismo'},
    { value: 'Hinduísmo', label: 'Hinduísmo'},
    { value: 'Ateísmo / Agnóstico', label: 'Ateísmo/ Agnóstico'},
    { value: 'Budismo', label: 'Budismo'},
    { value: 'Espiritismo', label: 'Espiritismo'},
    { value: 'Judaísmo', label: 'Judaísmo'},
    { value: 'Outro/Prefiro não dizer', label: 'Outro/Prefiro não dizer'}
]

const orientacaoSexual = [
    { value: 'Selecione sua orientação sexual', label: 'Selecione sua orientação sexual' },
    { value: 'Homossexual', label: 'Homossexual'},
    { value: 'Bissexual', label: 'Bissexual'},
    { value: 'Assexual', label: 'Assexual'},
    { value: 'Heterossexual', label: 'Heterossexual'},
    { value: 'Panssexual', label: 'Panssexual'} ,
    { value: 'Outro/Prefiro não dizer', label: 'Outro/Prefiro não dizer'}
]

const tipoSexoImovel = [
    { value: 'Selecione o tipo de sexo do quarto' , label: 'Selecione o tipo de sexo do quarto'},
    { value: 'Masc.', label: 'Masculino'},
    { value: 'Femin.', label: 'Feminino'},
    { value: 'Misto', label: 'Misto'}
]

const tipoImovel = [
    { value: 'Selecione o tipo do imovel' , label: 'Selecione o tipo do imovel'},
    { value: 'Casa', label: 'Casa'},
    { value: 'Apart.', label: 'Apartamento'},
]

const tipoQuarto = [
    { value: 'Selecione o tipo do quarto' , label: 'Selecione o tipo do quarto'},
    { value: 'Comp.', label: 'Compartilhado'},
    { value: 'Indiv.', label: 'Individual'},
]

export { estadoCivil, sexo, genero, religiao, orientacaoSexual, tipoSexoImovel, tipoImovel, tipoQuarto}