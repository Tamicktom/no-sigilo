import React from 'react'
import Style from './MicroComponents.module.sass'


//* @note UnitsLeft
const UnitsLeft = (qtd: string | number) => {
    return (
        <div className={Style.units_left}>
            <p>Restam</p>
            <p className={Style.qtd}>{qtd}</p>
            <p>Unidades</p>
        </div>
    )
}

export { UnitsLeft }