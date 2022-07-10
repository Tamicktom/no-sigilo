import React from 'react'
import Image from 'next/image'
import Style from './NoSigiloFooter.module.sass'
import Logo from '../../design/icons/Logo/Logo'

export default function NoSigiloFooter() {
    return (
        <footer
            className={Style.holder}
        >
            <div className={Style.logo_holder}>
                <Logo />
            </div>
            <div className={Style.payment_options_holder}>
                <p>Formas de Pagamento:</p>
                <Image
                    src='/images/payment_options.png'
                    alt='Formas de Pagamento'
                    width={200}
                    height={40}
                />
            </div>
            <div className={Style.address_holder}>
                <p>
                    {`Endereço: Rua Algum Lugar, 9999 - Bairro Algum Lugar - CEP: 99999-999
                    SAC: (XX) 99999-9999 E-mail: atendimento@nosigilo.com.br
                    No Sigilo é uma marca registrada
                    CNPJ: 99.999.999/9999-99
                    Todos os direitos reservados.`}
                </p>
            </div>
        </footer>
    )
}