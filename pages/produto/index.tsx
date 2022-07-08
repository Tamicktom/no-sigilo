import Image from 'next/image';
import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar';
import GlobalHead from '../../components/GlobalHead/GlobalHead';

import Style from './Product.module.sass'

import defaultImage from '../../public/images/default_img_product.png';

// const ProductImages: [Object] = [
//     defaultImage, defaultImage, defaultImage
// ]

type Props = {}

export default function index({ }: Props) {

    return (
        <div>
            <GlobalHead />
            <NavBar />
            <main style={{ color: 'white', marginTop: '75px', width: '100%' }}>

                <div className={Style.holder}>

                    <div className={Style.top}>
                        <div className={Style.top_top}>
                            <div className={Style.left}>
                                <p className={Style.brand}>MARCA DO PRODUTO</p>
                                <p className={Style.product_code}>Código: <span>xxxxxx</span></p>
                            </div>
                            <div className={Style.right}>
                            </div>
                        </div>
                        <div className={Style.top_bottom}>
                            <p><span>Nome do Produto</span> - Descrição Curta, Descrição Curta, Descrição Curta, Descrição Curta, Descrição Curta.</p>
                        </div>
                    </div>

                    <div className={Style.image_holder}>
                        <div className={Style.sub_pictures}>
                            <div>
                                <Image
                                    src={defaultImage}
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </div>
                            <div>
                                <Image
                                    src={defaultImage}
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </div>
                            <div>
                                <Image
                                    src={defaultImage}
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </div>
                        </div>
                        <div className={Style.main_image}>
                            <Image
                                src={defaultImage}
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>

                    <div className={Style.price_info_holder}>
                        <div className={Style.left}>

                        </div>
                        <div className={Style.right}>

                        </div>
                    </div>

                    
                </div>

            </main>
        </div>
    )
}