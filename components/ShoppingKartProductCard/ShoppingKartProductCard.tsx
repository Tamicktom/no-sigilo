import React from 'react'
import Image from 'next/image'

import Style from './ShoppingKartProductCard.module.sass'

const default_img = '/images/default_img_product.png'

type Props = {
    product_image: string
    product_name: string
    product_price: number
    product_qtd: number
    product_company_brand: string
    product_short_description: string
}

export default function ShoppingKartProductCard({
    product_image,
    product_name,
    product_company_brand,
    product_short_description,
    product_qtd,
    product_price,
}: Props) {
    return (
        <div
            className={Style.holder}
            onClick={() => {
                window.location.href = '/produto' //* @note redirect to product page
            }}
        >
            <div className={Style.left}>
                <div className={Style.img_holder}>
                    <Image
                        src={product_image || default_img}
                        alt={product_name}
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
            </div>
            <div className={Style.right}>
                <div className={Style.product_info}>

                    <div className={Style.top}>
                        {
                            CompanyBrand(product_company_brand || 'Marca do produto')
                        }
                        {
                            ShortDescription(
                                product_name || 'Nome do produto',
                                product_short_description || 'Descrição breve')
                        }
                    </div>

                    <div className={Style.bottom}>
                        {
                            Price(product_price)
                        }
                        <div className={Style.bottom_right}>
                            {
                                UnitsOnKart(product_qtd || 0)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const CompanyBrand = (brand: string) => {
    return (
        <p className={Style.company_brand}>
            {brand}
        </p>
    )
}

const ShortDescription = (pt_name: string, pt_description: string) => {
    return (
        <p
            className={Style.name_short_description}
        >
            {pt_name} - {pt_description}
        </p>
    )
}

const Price = (price: number) => {
    if (typeof price != 'number') return <p>{price}</p>

    let big_price: string = price.toString().split('.')[0]
    if (big_price == undefined) big_price = '0'

    let small_price: string = price.toString().split('.')[1]
    if (small_price == undefined) small_price = '00'
    if (small_price.length == 1) small_price = small_price + '0'

    return (
        <div className={Style.bottom_left}>
            <p className={Style.price}>
                R$ {big_price}
                <span>
                    ,{small_price}
                </span>
            </p>
        </div>
    )
}

const UnitsOnKart = (qtd: number) => {
    let left: any = '';
    let units: string = 'unidades';
    if (qtd == 1) units = 'unidade'

    return (
        <div>
            <p className={Style.qtd}>{qtd}</p>
            <p>{units}</p>
        </div>
    )
}