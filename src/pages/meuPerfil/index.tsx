import Footer from "~/components/Funcionalidade/Footer";
import NavBar from "~/components/NavBar";

interface MeuPerfilProps {

}

const MeuPerfil = () => {

    
    return (
        <>
            <NavBar />
            <section className="min-h-screen flex items-center justify-center my-16">
                <div className="relative max-w-full w-full  
                rounded-md px-8 mx-4 bg-white">
                    <header className="font-semibold text-6xl text-slate-600">Meu Cadastro</header>
                    <form className="relative min-h-[490px] bg-white mt-4">
                        <div>
                            <div className="mt-12">
                                <span className="font-semibold text-3xl my-8 text-slate-600">Dados da Conta</span>
                                <div className="grid grid-cols-3 my-8 items-center justify-between gap-4">
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">CPF</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu CPF"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Nome Completo</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Nome Completo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Data de Nascimento</label>
                                        <input
                                            type="date"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Estado Civil</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Estado Civil"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Sexo</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Sexo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Gênero</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Genero"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Orientação Sexual</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite sua Orientação Sexual"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Religião</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite sua Religião"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Área de Interesse</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Área de Interesse"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Telefone</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu telefone"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Celular</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu celular"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Email</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <span className="font-semibold text-3xl my-8 text-slate-600">Endereço</span>
                                <div className="grid grid-cols-3 my-8 items-center justify-between gap-4">
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">CEP</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu CPF"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Endereço</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Nome Completo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Número</label>
                                        <input
                                            type="text"
                                            placeholder="Digite o numero da residencia"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Bairro</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Estado Civil"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Cidade</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Sexo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Estado</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite seu Genero"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-lg ml-2 font-semibold">Complemento</label>
                                        <input
                                            type="text"
                                            className="bg-slate-100 border border-slate-700 w-4/5 py-4 mx-2 px-6 rounded-md text-[#90989F] font-normal"
                                            placeholder="Digite sua Orientação Sexual"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default MeuPerfil;