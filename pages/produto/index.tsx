import Image, { StaticImageData } from 'next/image';
import { useId, useState } from 'react'
import { NavBar } from '../../components/NavBar/NavBar';
import GlobalHead from '../../components/GlobalHead/GlobalHead';
import NoSigiloFooter from '../../components/NoSigiloFooter/NoSigiloFooter';

import Style from './Product.module.sass'

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import defaultImage from '../../public/images/default_img_product.png';

const ProductImages: StaticImageData[] = [
    defaultImage, defaultImage, defaultImage, defaultImage
]

type Props = {}

export default function index({ }: Props) {

    return (
        <div>
            <GlobalHead />
            <NavBar />
            <main style={{ color: 'white', marginTop: '75px', width: '100%' }}>
                <div className={Style.holder}>
                    <Top />
                    <ImageHolder
                        image_list={ProductImages} />
                    <div className={Style.price_info_holder}>
                        <PriceInfo />
                        <UnitsLeft />
                    </div>
                    <ProductDescription />
                </div>
            </main>

            <NoSigiloFooter />
        </div>
    )
}

const Top = () => {
    return (
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
    )
}

const BuildImageGallery = (image_list: StaticImageData[]) => {
    const keyValue = useId();
    let image_gallery = []
    for (let i = 0; i < image_list.length; i++) {
        image_gallery.push(
            <SwiperSlide
                key={'productImage_' + keyValue + i}
                className={Style.image_gallery_item}
            >
                <Image
                    src={image_list[i]}
                    alt="Produto"
                    width={'100%'}
                    height={'100%'}
                />
            </SwiperSlide>
        )
    }
    return image_gallery;
}

const ImageHolder = (image_list: any) => {
    const [actualImage, setActualImage] = useState(ProductImages[0]);

    return (
        <div className={Style.image_holder}>
            <Swiper
                modules={[Pagination, A11y]}
                direction="vertical"
                spaceBetween={5}
                slidesPerView={3}
                loop={false}
                speed={300}
                className={Style.image_gallery}
            >
                {BuildImageGallery(image_list.image_list)}
            </Swiper>
            <div className={Style.main_image}>
                <Image
                    src={actualImage}
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}

const PriceInfo = () => {
    return (
        <div className={Style.left}>
            <div className={Style.above}>
                <div>
                    <p>de</p>
                </div>
                <div>
                    <p>R$ XX<span>,xx</span></p>
                </div>
            </div>
            <div className={Style.below}>
                <div>
                    <p>por</p>
                </div>
                <div>
                    <p>R$ XX<span>,xx</span></p>
                </div>
            </div>
        </div>
    )
}

const UnitsLeft = () => {
    return (
        <div className={Style.right}>
            <p>Restam</p>
            <p>XX</p>
            <p>unidades</p>
        </div>
    )
}

const ProductDescription = () => {
    return (
        <div className={Style.product_description}>
            <h2>Descrição do Produto</h2>
            <p>Descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada.</p>
            <p>Descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada.</p>
            <p>Descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada, descrição longa e detalhada.</p>
        </div>
    )
}
