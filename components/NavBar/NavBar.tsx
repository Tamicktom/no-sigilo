import React from "react";
import Style from "./style.module.sass";

export function NavBar({ }) {
  return (
    <nav className={Style.main}>
      <div className={Style.top}>
        <div style={{
          width: '25%',
          height: '100%'
        }}>E</div>
        <div style={{
          width: '50%',
          height: '100%'
        }}>Logo</div>
        <div style={{
          width: '25%',
          height: '100%'
        }}>D</div>
      </div>
      <div>
        <input placeholder='Pesquisar' />
        <button>Pesquisar</button>
      </div>
    </nav>);
}
