import { NavBar } from '../components/NavBar/NavBar';
import type { NextPage } from 'next'
import Head from 'next/head'
import MainBanner from '../components/MainBanner/MainBanner';
import Style from './index.module.sass';

const Home: NextPage = () => {
  return (
    <div className={Style.pageComposition}>
      <Head>
        <title>Sex Shop No Sigilo</title>
        <meta name="description" content="E-commerce de produtos eróticos." />
        <style>
          {`
            *{
              padding: 0;
              margin: 0;
              border: 0;
              outline: 0;
              box-shadow: none;
            }
          `}
        </style>
      </Head>

      <NavBar />

      <main className={Style.pageComposition}>
        <MainBanner />
      </main>

    </div>
  )
}

export default Home
