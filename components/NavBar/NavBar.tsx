import React from "react";
import Style from "./NavBar.module.sass";

//* Components
import OptionsOverlay from "../OptionsOverlay/OptionsOverlay";
import Settings from "../../design/icons/Settings/Settings";
import Logo from "../../design/icons/Logo/Logo";
import CarrinhoCompras from '../../design/icons/CarrinhoCompras/CarrinhoCompras';
import Search from '../../design/icons/Search/Search';
import ShoppingKartOverlay from "../ShoppingKartOverlay/ShoppingKartOverlay";

export function NavBar({ }) {

  const [isOpenOptions, setIsOpenOptions] = React.useState(false);
  const [isOpenShoppingKart, setIsOpenShoppingKart] = React.useState(false);

  const toggleOptions = () => {
    setIsOpenOptions(!isOpenOptions);
  }

  const toggleShoppingKart = () => {
    setIsOpenShoppingKart(!isOpenShoppingKart);
  }

  function handleSearch() {
    console.log("search");
  }

  return (
    <nav className={Style.main}>
      <OptionsOverlay
        isOpen={isOpenOptions}
        toggler={toggleOptions} />
      <ShoppingKartOverlay
        isOpen={isOpenShoppingKart}
        toggler={toggleShoppingKart} />
      <div className={Style.top}>
        <button onClick={() => { toggleOptions() }}>
          <Settings className={Style.settings} />
        </button>
        <div>
          <Logo className={Style.logo} />
        </div>
        <button onClick={toggleShoppingKart}>
          <CarrinhoCompras className={Style.carrinhoCompras} />
        </button>
      </div>
      <div className={Style.bottom}>
        <input placeholder='Pesquisar' />
        <button onClick={() => { handleSearch() }}>
          <Search className={Style.search} />
        </button>
      </div>
    </nav>);
}
