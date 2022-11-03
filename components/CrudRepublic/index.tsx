const CrudRepublic = () => {
  return (
    <section className="flex flex-col md:flex-row h-full md:h-screen items-center bg-white">
      <div className="md:max-w-md lg:max-w-full md:mx-auto h-full px-6 lg:px-16 xl:px-12
flex items-center justify-center">
        <div className="w-full h-full py-8">
          <h2 className="mt-6 mb-3 text-xl md:text-2xl font-bold text-center text-gray-900">Cadastre seu imóvel</h2>
          <form>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Título do anúncio do seu imóvel</label>
                <input placeholder="EX: Apartamento, 4 quartos..." type="text" id="small-input titulo-imovel" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
              </div>


              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Valor</label>
                <input placeholder="R$ 000,00 ou 0,000,00" type="number" id="small-input valor-imovel" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
              </div>


            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Endereço completo</label>
              <input placeholder="EX: Av. Rua São João N°33 Cond..." type="text" id="small-input endereco-imovel" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">O seu endereço possui alguma referência?</label>
              <input placeholder="EX: Próximo a universidade de São Paulo..." type="text" id="small-input referencia-imovel" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Cidade</label>
                <input placeholder="EX: São Paulo..." type="text" id="default-input cidade-imovel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Selecione o seu estado</label>
                <select id="countries estado-imovel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option>SP</option>
                  <option>RJ</option>
                  <option>SC</option>
                  <option>BA</option>
                </select>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">CEP</label>
                <input placeholder="EX: (11111-000) Com pontos e traçõs...." type="number" id="default-input cep-imovel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Subir imagens do imóvel</label>
                <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none" id="file_input imagens-imovel" type="file" />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Telefone (Whatsapp)</label>
                <input placeholder="EX: (99) 9 9999-999" type="tel" id="default-input telefone-imovel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Descrição do Anúncio</label>
                <textarea placeholder="Fale um pouco mais sobre o seu imóvel ;)" id="message desc-imovel" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
            </div>
            <button type="submit" className="w-30 block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
    px-4 py-3 mt-6">Registrar imóvel</button>
          </form>
        </div>
      </div>
    </section>

  )
}
export default CrudRepublic;
