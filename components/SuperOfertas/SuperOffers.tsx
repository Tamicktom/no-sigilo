import React from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import Style from './SuperOffers.module.sass'

type Props = {
    section_name: string;
}

export default function SuperOffers({ section_name }: Props) {
    return (
        <div className={Style.holder}>
            <h2 className={Style.tittle}>{section_name.toLocaleUpperCase()}</h2>
            <HorizontalCard
                product_price={0.5}
                product_company_brand='Teste'
                product_name='Gel'
                product_short_description='Descrição breve, Descrição breve, Descrição breve, Descrição breve, '
                product_qtd={10}
                product_image=''
                show_pix={true}
                show_units_left={true}
                show_discount={true}
                product_discount={0.25}
            />
            <HorizontalCard
                product_price={0.5}
                product_company_brand='Teste'
                product_name='Gel'
                product_short_description='Descrição breve, Descrição breve, Descrição breve, Descrição breve, '
                product_qtd={10}
                product_image=''
                show_pix={true}
                show_units_left={true}
                show_discount={true}
                product_discount={0.15}
            />
            <HorizontalCard
                product_price={0.5}
                product_company_brand='Teste'
                product_name='Gel'
                product_short_description='Descrição breve, Descrição breve, Descrição breve, Descrição breve, '
                product_qtd={10}
                product_image=''
                show_pix={true}
                show_units_left={true}
                show_discount={true}
                product_discount={0.05}
            />
            <HorizontalCard
                product_price={0.5}
                product_company_brand='Teste'
                product_name='Gel'
                product_short_description='Descrição breve, Descrição breve, Descrição breve, Descrição breve, '
                product_qtd={10}
                product_image=''
                show_pix={true}
                show_units_left={true}
                show_discount={true}
                product_discount={0.05}
            />
        </div>
    )
}