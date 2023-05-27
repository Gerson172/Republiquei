import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient } from 'react-query'
import { getCookie } from 'cookies-next';

import { REPUBLIQUEI_JWT } from '~/utils';

import Head from 'next/head';

const queryClientProvider = new QueryClient();


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin="" />
      </Head>
      <QueryClientProvider client={queryClientProvider}>
        <Component {...pageProps}/>
      </QueryClientProvider>

    </>)
}

export default MyApp;
