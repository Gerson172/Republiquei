import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AnnounceRepublic from '../components/AnnounceRepublic'
import AnnounceUniversity from '../components/AnnounceUniversity'
import { Feedback } from '../components/Feedback'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import Welcome from '../components/Welcome'
import { AnnounceRepublicData } from './searchRepublic'

const Inicial = () => {
  return (
        <>
        <div>
          <img className="absolute top-60 right-80 h-96 w-4/12  shadow-2xl rounded-lg blur-2xl" alt='img' src="https://i.pinimg.com/736x/b4/c0/ff/b4c0ff611b5bd34fcbd241e9e4ca76ce.jpg"/>
          <img className="absolute top-52 right-96 h-96 w-4/12  shadow-2xl rounded-lg" alt='img' src="https://i.pinimg.com/736x/b4/c0/ff/b4c0ff611b5bd34fcbd241e9e4ca76ce.jpg"/>
        </div>
          <div className="flex flex-col space-y-80">
              <div className="flex flex-wrap ">
                <div className="w-full lg:w-10/12 px-4">
                
                    <p className="pt-20 pb-12 pl-32 font-bold text-6xl w-1/2 mb-4">
                       ENCONTRE A SUA REPÚBLICA IDEAL
                   </p>
                </div>
                <div className='pb-20 pl-40 w-1/2'>
                  <q className="">
                  Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.
                  </q>
                  <h4 className="w-4/5 text-1xl pt-4 pl-4">
                                  - Roberto Shinyashiki
                  </h4>
                  <p className="pt-10">
                  <a href="https://uliving.com.br/blog/republica-estudantil-o-que-e-e-como-funciona/" target="_blank" className="text-blue-800 no-underline hover:underline" rel="noreferrer">
                      O que é uma república, e porque eu precisaria de uma?
                  </a>
                  </p>
                </div>
              </div>
          </div>
        </>
 )
 }
 
<p></p>


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Republiquei</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <NavBar />
      <Welcome/>
      <Search />
      <Univercity />
      <Feedback/>
      <Footer />
    </div>
  )
}

export function Search() {
  return (
    <main className="flex flex-row flex-wrap justify-center gap-4 mt-8 bg-origin-content p-28 bg-slate-100">
      <div className="pl-60 flex flex-row space-x-8 gap-3">
        <h2 className="flex flex-row font-bold text-6xl">
            Repúblicas emㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        <span className="mr-4 text-sky-400">
          destaque ㅤㅤㅤㅤㅤ
        </span>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        </h2>
      </div>
        {AnnounceRepublicData.slice(0,3).map((data, id) => <AnnounceRepublic key={id} id={id} images={data.images}
          accessibility={data.acessibility}
          title={data.title}
          location={data.location}
          price={data.price}
          sex={data.sex} />
        )}
      </main>
  )
}

export function Univercity() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 bg-origin-content p-28 bg-slate-800 text-center">
      <div className="flex flex-row space-x-8 gap-3">
        <h2 className="flex flex-row font-bold text-6xl text-white">
            Universidades mais
        <span className="mr-4 text-rose-600">
          procuradas
        </span>
        </h2>
      </div>
        {
        AnnounceRepublicData.slice(0,3).map((data, id) => 
        <AnnounceUniversity key={id} id={id}
        accessibility={data.acessibility}
        title={data.title}
        location={data.location}/>
        )}
      </div>
  )
}



export default Home
