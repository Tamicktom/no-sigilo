import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import GlobalHead from '../components/GlobalHead/GlobalHead';
import Style from './index.module.sass';

//* Components
import { NavBar } from '../components/NavBar/NavBar';
import MainBanner from '../components/MainBanner/MainBanner';
import SuperOffers from '../components/SuperOfertas/SuperOffers';
import NoSigiloFooter from '../components/NoSigiloFooter/NoSigiloFooter';

export const getStaticProps = async () => {
  const res = await fetch('http://26.120.58.152/novaApi/public_html/api/produto/find_all/false');
  const data = await res.json();

  return {
    props: {
      produtos: data
    }
  }

}

const Home: NextPage = ({ produtos }: any) => {




  console.log(produtos.dados)

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

      <NoSigiloFooter />
    </div>
  )
}

export default Home 
