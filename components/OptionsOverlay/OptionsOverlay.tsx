import Link from 'next/link'
import React from 'react'
import Style from './OptionsOverlay.module.sass'
import Image from 'next/image';

type Props = {
    isOpen: boolean,
    toggler: any
}

const options: any = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Categorias',
        link: '/categorias'
    },
    {
        name: 'Meus Pedidos',
        link: '/meus-pedidos'
    },
    {
        name: 'Lista de desejos',
        link: '/lista-desejos'
    },
    {
        name: 'Quem somos',
        link: '/quem-somos'
    },
    {
        name: 'Contato',
        link: '/contato'
    }
]

export default function OptionsOverlay({
    isOpen,
    toggler
}: Props) {

    const [overlayStyle, setOverlayStyle] = React.useState({})
    const [optionsObj, setOptionsObj]: any = React.useState(false)
    const id = React.useId();

    React.useEffect(() => {
        if (isOpen) {
            setOverlayStyle({ width: '100%' });
            setTimeout(() => { setOptionsObj(options) }, 180)
        }
        else {
            setOverlayStyle({ width: '0%' })
            setTimeout(() => { setOptionsObj(false) }, 150)
        }
    }, [isOpen])


    const renderOptions = () => {
        const res: any = [];
        if (optionsObj != false) {
            optionsObj.map(
                (option: any) => {
                    res.push(NavButton(option.link, option.name, (id + option.name)));
                }
            )
        }
        return res;
    }

    return (
        <div
            className={Style.holder}
            style={overlayStyle}
        >
            <div className={Style.left}>
                <div className={Style.login}>
                    <div className={Style.userImg}>
                        <Image
                            src="/images/missing_user.svg"
                            width={'75px'}
                            height={'75px'}
                        />
                    </div>
                    <div className={Style.loginInfo}>
                        <div></div>
                        <div>
                            <Image
                                src="/images/x.svg"
                                width={'20%'}
                                height={'20%'}
                            />
                        </div>
                    </div>
                </div>
                <nav className={Style.navigation}>
                    <ul>
                        {
                            renderOptions()
                        }
                    </ul>
                </nav>
            </div>

            <div
                className={Style.right}
                onClick={() => toggler()}>
            </div>
        </div>
    )
}

const NavButton = (link: string, name: string, key: string) => {
    return (
        <li
            className={Style.li_item}
            key={key}
        >
            <Link
                href={link}
                className={Style.link}
            >
                <button className={Style.li_buttom}>
                    {name}
                </button>
            </Link>
        </li>
    )
}