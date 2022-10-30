import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AnnounceRepublic from '../components/AnnounceRepublic'
import AnnounceUniversity from '../components/AnnounceUniversity'
import { Feedback } from '../components/Feedback'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'
import { AnnounceRepublicData } from './searchRepublic'

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
