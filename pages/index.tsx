import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Republiquei</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <NavBar />
    </div>
  )
}

export default Home
