import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
