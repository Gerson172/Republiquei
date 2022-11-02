import type { NextPage } from 'next'
import Head from 'next/head'
import { FeaturedRepublic } from '../components/FeaturedRepublic'
import { Feedback } from '../components/Feedback'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { University } from '../components/University'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Republiquei</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <NavBar />
      <Welcome/>
      <FeaturedRepublic />
      <University/>
      <Feedback/>
      <Footer />
    </div>
  )
}




export default Home
