import type { NextPage } from 'next'
import Head from 'next/head'
import Style from './index.module.sass';

//* Components
import { NavBar } from '../components/NavBar/NavBar';
import MainBanner from '../components/MainBanner/MainBanner';
import SuperOffers from '../components/SuperOfertas/SuperOffers';

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
        <link rel="stylesheet" href="../styles/global.css" />
      </Head>

      <NavBar />

      <main className={Style.pageComposition}>
        <MainBanner />
        <SuperOffers section_name='Super Ofertas' />
        <SuperOffers section_name='Ofertas Relâmpago' />
      </main>

    </div>
  )
}

export default Home
