import { NavBar } from '../components/NavBar/NavBar';
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Sex Shop No Sigilo</title>
        <meta name="description" content="E-commerce de produtos eróticos." />
        <style>
          {`
            *{
              padding:0;
              margin:0;
              border:0;
              outline:0;
              box-shadow:none;
            }
          `}
        </style>
      </Head>

      <main>

        <NavBar />

      </main>

    </div>
  )
}

export default Home
