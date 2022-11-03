const CrudUser = () => {
  return (

    <section className=" flex flex-col md:flex-row h-full md:h-screen items-center bg-white">
      <div className="md:max-w-md lg:max-w-full md:mx-auto h-full px-6 lg:px-16 xl:px-16
flex items-center justify-center" >

        <div className="w-full h-full mb-8 py-3">

          <h2 className="mt-6 mb-3 text-xl md:text-2xl font-bold text-center text-gray-900">Dados pessoais</h2>

          <form>

            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                <input placeholder="" type="text" id="default-input nome-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Sobrenome</label>
                <input placeholder="" type="text" id="default-input sobrenome-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">CPF</label>
                <input placeholder="" type="number" id="default-input cpf-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 md:gap-6">

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Estado Civil</label>
                <select id="countries estado-civil-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option>Solteiro</option>
                  <option>Casado</option>
                  <option>Viuvo(a)</option>
                </select>
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Sexo</label>
                <select id="countries sexo-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option>Masculino</option>
                  <option>Femino</option>
                </select>
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Genero</label>
                <select id="countries genero-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option>Homem ou Mulher CIS</option>
                  <option>Homem ou Mulher Trans</option>
                  <option>LGBTQI+</option>
                  <option>Outro/Prefiro não dizer</option>
                </select>
              </div>

            </div>

            <h2 className="mt-2 mb-2 text-xl md:text-2xl font-bold text-center text-gray-900">Contatos</h2>


            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                <input placeholder="" type="text" id="default-input e-mail-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Telefone</label>
                <input placeholder="" type="text" id="default-input telefone-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Celular</label>
                <input placeholder="" type="text" id="default-input celular-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
            </div>


            <h2 className="mt-2 mb-2 text-xl md:text-2xl font-bold text-center text-gray-900">Endereço</h2>


            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">CEP</label>
                <input placeholder="" type="text" id="default-input cep-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Endereço</label>
                <input placeholder="" type="text" id="default-input endereco-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Número</label>
                <input placeholder="" type="number" id="default-input n-endereco-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Bairro</label>
                <input placeholder="" type="text" id="default-input bairro-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Cidade </label>
                <input placeholder="" type="text" id="default-input cidade-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Estado</label>
                <input placeholder="" type="text" id="default-input estado-user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex items-center mb-4">
                <input id="default-checkbox prop-check" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-black-100 rounded border-black-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black-800 focus:ring-2 dark:bg-black-700 dark:border-black-600" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black-900 dark:text-black-300">Sou proprietário</label>
              </div>
              <button type="submit" className="w-30 block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
    px-4 py-3 mt-6">Finalizar</button>
            </div>


          </form>
        </div>
      </div>

    </section>

  )
}
export default CrudUser;