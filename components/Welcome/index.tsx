import Image from 'next/image'
import Link from 'next/link'

const Welcome = () => {
  return (
    <>
     <section className="bg-white">
    <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">ENCONTRE A SUA REPÚBLICA IDEAL</h1>
            <q className="mt-6 text-gray-500">
Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado. - Roberto Shinyashiki</q>
            <Link href="/searchRepublic">
            <button className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-pink-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Buscar Republicas
            </button>
            </Link>
            <p className="mt-3 text-sm text-gray-400 ">O que é uma república, e porque eu precisaria de uma?</p>
        </div>

        <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80" />
        </div>
    </div>
</section>
    </>
  )
}

export default Welcome;