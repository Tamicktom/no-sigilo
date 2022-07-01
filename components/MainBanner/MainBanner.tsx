import React from 'react'
import Style from './MainBanner.module.sass'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import carouselImage_1 from '../../pages/images/banner-1-768-500.png'

export default function MainBanner(props: any) {
    let count = 0;
    const slideImg = [
        {
            key: ('slide_' + count++),
            src: carouselImage_1,
            width: '768px',
            height: '500px',
        }
    ]

    return (
        <div className={Style.mainBanner}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={Style.carousel}
            >
                <SwiperSlide>
                    <Image
                        key={slideImg[0].key}
                        src={slideImg[0].src}
                        width={slideImg[0].width}
                        height={slideImg[0].height}
                        layout="responsive"
                    />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
        </div>
    )
}