
import Layout from '../components/Layout';
import Head from 'next/head';
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return (
    <Layout>
      <Head>
        <title>Masterclass Clone Next.js</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
