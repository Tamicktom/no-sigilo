import Image, { StaticImageData } from 'next/image';
import { useId, useState } from 'react'
import { NavBar } from '../../components/NavBar/NavBar';
import GlobalHead from '../../components/GlobalHead/GlobalHead';
import NoSigiloFooter from '../../components/NoSigiloFooter/NoSigiloFooter';
import { UnitsLeft } from '../../components/MicroComponents/MicroComponents';

import Style from './Product.module.sass'

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import default_img_1 from '../../public/images/default_img_1.png';
import default_img_2 from '../../public/images/default_img_2.png';
import default_img_3 from '../../public/images/default_img_3.png';
import default_img_4 from '../../public/images/default_img_4.png';
import default_img_5 from '../../public/images/default_img_5.png';

const ProductImages: StaticImageData[] = [
    default_img_1, default_img_2, default_img_3, default_img_4, default_img_5
]

export default function index() {
    return (
        <div>
            <GlobalHead />
            <NavBar />

            <main className={Style.product_page}>
                <div className={Style.holder}>
                    <Top />
                    <ImageHolder
                        image_list={ProductImages} />
                    <div className={Style.price_info_holder}>
                        <PriceInfo />
                        <div className={Style.right}>
                            {UnitsLeft(10)}
                        </div>
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

const BuildImageGallery = (image_list: any, change_image: (num: number) => void) => {
    const keyValue = useId();
    let image_gallery = []
    for (let i = 0; i < image_list.length; i++) {
        image_gallery.push(
            <SwiperSlide
                key={'productImage_' + keyValue + i}
                className={Style.image_gallery_item}
                onClick={() => change_image(i)}
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

    const changeImage = (index: number) => {
        console.log('trocado para ' + index);
        setActualImage(image_list.image_list[index]);
    }

    return (
        <div className={Style.image_holder}>
            <Swiper
                modules={[Pagination, A11y]}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={3}
                loop={false}
                speed={300}
                height={200}
                width={150}
                className={Style.image_gallery}
            >
                {BuildImageGallery(image_list.image_list, changeImage)}
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
