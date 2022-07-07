import Link from 'next/link'
import React from 'react'
import Style from './OptionsOverlay.module.sass'
import Image from 'next/image';

type Props = {
    isOpen: boolean,
    toggler: () => VoidFunction
}

const options: object[] = [
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
        link: '/meus_pedidos'
    },
    {
        name: 'Lista de desejos',
        link: '/lista_desejos'
    },
    {
        name: 'Quem somos',
        link: '/about'
    },
    {
        name: 'Contato',
        link: '/contato'
    }
]

const noUserText: string = 'Clique aqui para logar na sua conta.';

export default function OptionsOverlay({
    isOpen,
    toggler
}: Props) {

    const [overlayStyle, setOverlayStyle] = React.useState({})
    const [optionsObj, setOptionsObj]: any = React.useState(false)
    const [userName, setUserName] = React.useState(noUserText);
    const id = React.useId();

    React.useEffect(() => {
        if (isOpen) {
            setOverlayStyle({ width: '100%' });
            setTimeout(() => { setOptionsObj(options) }, 180);
            setTimeout(() => { setUserName(noUserText) }, 180);
        }
        else {
            setOverlayStyle({ width: '0%' })
            setTimeout(() => { setOptionsObj(false) }, 150)
            setTimeout(() => { setUserName('') }, 150)
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
                        <div>
                            {userName}
                        </div>
                        <div>
                            <Image
                                src="/images/x.svg"
                                width={'35%'}
                                height={'35%'}
                                onClick={() => toggler()}
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
                onClick={() => toggler()}
                style={{
                    background: "rgba(0,0,0,0.1)",
                }}
            >
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
