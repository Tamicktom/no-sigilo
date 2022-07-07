import React from 'react'
import type { NextPage } from 'next'
import GlobalHead from '../components/GlobalHead/GlobalHead';
import Style from './index.module.sass';

//* Components
import { NavBar } from '../components/NavBar/NavBar';
import MainBanner from '../components/MainBanner/MainBanner';
import SuperOffers from '../components/SuperOfertas/SuperOffers';

const Home: NextPage = () => {

  return (
    <div className={Style.pageComposition}>

      <GlobalHead />

      <NavBar />

      <main className={Style.pageComposition}>
        <MainBanner />
        <SuperOffers section_name='Super Ofertas' />
        <SuperOffers section_name='Ofertas Relâmpago' />
        <SuperOffers section_name='Camisinhas' />
      </main>

    </div>
  )
}

export default Home
