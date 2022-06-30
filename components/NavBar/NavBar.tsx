import React from "react";
import Style from "./style.module.sass";
import Settings from "../../design/icons/Settings/Settings";
import Logo from "../../design/icons/Logo/Logo";

export function NavBar({ }) {
  return (
    <nav className={Style.main}>
      <div className={Style.top}>
        <div>
          <Settings />
        </div>
        <div>
          <Logo />
        </div>
        <div>D</div>
      </div>
      <div>
        <input placeholder='Pesquisar' />
        <button>Pesquisar</button>
      </div>
    </nav>);
}
