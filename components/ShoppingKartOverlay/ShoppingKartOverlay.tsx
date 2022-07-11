import React, { useEffect } from 'react'
import ShoppingKartProductCard from '../ShoppingKartProductCard/ShoppingKartProductCard'

import Style from './ShoppingKartOverlay.module.sass'

const products: any = [
    {
        product_image: '/images/default_img_1.png',
        product_name: 'Produto 1',
        product_company_brand: 'Marca do produto',
        product_short_description: 'Descrição breve',
        product_qtd: 1,
        product_price: 15.5,
        product_discount: 0,
        show_pix: false,
        show_units_left: false,
        show_discount: false,
    },
    {
        product_image: '/images/default_img_2.png',
        product_name: 'Produto 2',
        product_company_brand: 'Marca do produto',
        product_short_description: 'Descrição breve',
        product_qtd: 1,
        product_price: 25.5,
        product_discount: 0,
        show_pix: false,
        show_units_left: false,
        show_discount: false,
    }
]

//* @note types for props
type ProductProps = {
    product_image: string
    product_name: string
    product_company_brand: string
    product_short_description: string
    product_qtd: number
    product_price: number
    product_discount: number
    show_pix: boolean
    show_units_left: boolean
    show_discount: boolean
}

type Props = {
    isOpen: boolean
    toggler: () => void
}

type CheckoutProps = {
    total: number
}


//* @note ShoppingKartOverlay component
export default function ShoppingKartOverlay({
    isOpen,
    toggler
}: Props) {

    const [style, setStyle] = React.useState({})
    // const windowSize = useWindowSize();

    useEffect(() => {
        if (isOpen) setStyle({ width: '100%' })
        else setStyle({ width: '0%' })
    }, [isOpen])

    return (
        <div
            className={Style.holder}
            style={style}
            onClick={toggler}
        >
            <div className={Style.left}>
            </div>
            <div className={Style.right}>
                <div className={Style.top}>
                    {
                        ProductsOnKart(products)
                    }
                </div>
                {
                    <CheckoutPricePreview total={150.99} />
                }
            </div>
        </div>
    )
}


//* @note Checkout price preview
const CheckoutPricePreview = ({ total }: CheckoutProps) => {
    const price = total.toString().split('.');
    if (price[1] === undefined) price[1] = '00'
    if (price[1].length === 1) price[1] += '0'
    return (
        <div className={Style.bottom}>
            <div>
                <div><span>Total</span></div>
                <div><p>R$ {price[0]},<span>{price[1]}</span></p></div>
            </div>
            <div>
                <button>Finalizar Compra</button>
            </div>
        </div>
    )
}

const ProductsOnKart = (product_list: [ProductProps]) => {
    let res = [];
    for (let i = 0; i < product_list.length; i++) {
        res.push(
            <ShoppingKartProductCard
                product_image={product_list[i].product_image}
                product_name={product_list[i].product_name}
                product_company_brand={product_list[i].product_company_brand}
                product_short_description={product_list[i].product_short_description}
                product_qtd={product_list[i].product_qtd}
                product_price={product_list[i].product_price}
            />
        )
    }
    return res;
}