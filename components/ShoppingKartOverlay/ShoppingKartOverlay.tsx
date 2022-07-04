import React, { useEffect } from 'react'

import Style from './ShoppingKartOverlay.module.sass'

type Props = {
    isOpen: boolean
    toggler: () => void
}

export default function ShoppingKartOverlay({
    isOpen,
    toggler
}: Props) {

    const [style, setStyle] = React.useState({})

    useEffect(() => {
        if (isOpen) setStyle({ display: 'block' })
        else setStyle({ display: 'none' })
    }
        , [isOpen])


    return (
        <div
            className={Style.holder}
            style={style}
            onClick={toggler}
        >
            <h3>Overlay do Carrinho em construção :3</h3>
        </div>
    )
}