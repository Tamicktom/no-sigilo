import React from "react";
import Style from "./NavBar.module.sass";
import Settings from "../../design/icons/Settings/Settings";
import Logo from "../../design/icons/Logo/Logo";
import CarrinhoCompras from '../../design/icons/CarrinhoCompras/CarrinhoCompras';
import Search from '../../design/icons/Search/Search';

export function NavBar({ }) {

  function handleOverlay() {
    console.log("overlay");

  }

  function handleSearch() {
    console.log("search");
  }

  return (
    <nav className={Style.main}>
      <div className={Style.top}>
        <button onClick={() => { handleOverlay() }}>
          <Settings className={Style.settings} />
        </button>
        <div>
          <Logo className={Style.logo} />
        </div>
        <div>
          <CarrinhoCompras className={Style.carrinhoCompras} />
        </div>
      </div>
      <div className={Style.bottom}>
        <input placeholder='Pesquisar' />
        <button onClick={() => { handleSearch() }}>
          <Search className={Style.search} />
        </button>
      </div>
    </nav>);
}
