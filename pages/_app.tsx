import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../src/infra/api/queryClient'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verifica se há um usuário autenticado ao carregar a página
    const userData = sessionStorage.getItem('user');
    if (userData) {
      const userObject = JSON.parse(userData);
      setUser(userObject);
    } else {
      //router.push('/login'); // Redireciona para a página de login se não houver usuário autenticado
    }
  }, []);
  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin="" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} user={user} setUser={setUser} />
      </QueryClientProvider>

    </>)
}

export default MyApp
