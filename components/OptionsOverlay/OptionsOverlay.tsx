import React from 'react'
import Style from './OptionsOverlay.module.sass'

type Props = {
    isOpen: boolean,
    toggler: any
}

export default function OptionsOverlay({
    isOpen,
    toggler
}: Props) {

    const [overlayStyle, setOverlayStyle] = React.useState({})
    React.useEffect(() => {
        isOpen
            ? setOverlayStyle({ display: 'block', width: '100%' })
            : setOverlayStyle({ display: 'none', width: '0%' })
    }, [isOpen])

    return (
        <div
            className={Style.holder}
            style={overlayStyle}
            onClick={() => { toggler() }}
        >
            <h2>Overlay em construção :3</h2>
        </div>
    )
}