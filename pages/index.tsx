import React from 'react'
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <style data-href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
        <style>
          {`
            *{
              padding: 0;
              margin: 0;
              border: 0;
              outline: 0;
              box-shadow: none;
            }
            body{
              background: rgb(0,0,0);
            }
          `}
        </style>
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
