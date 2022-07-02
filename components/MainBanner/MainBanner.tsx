import React from 'react'
import Style from './MainBanner.module.sass'
import { Pagination, A11y } from 'swiper';
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
            src: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            width: '768px',
            height: '500px',
        },
        {
            key: ('slide_' + count++),
            src: 'https://images.pexels.com/photos/15386/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            width: '768px',
            height: '500px',
        },
    ]

    const [slides, setSlides] = React.useState('');

    const imgHandler = () => {
        const slides: any = [];
        slideImg.forEach(e => {
            slides.push(
                <SwiperSlide>
                    <div className={Style.img_holder}>
                        <Image
                            key={e.key}
                            src={e.src}
                            width={e.width}
                            height={e.height}
                            layout="intrinsic"
                        />
                    </div>
                </SwiperSlide>
            )
        })
        setSlides(slides);
        return slides;
    }
    return (
        <div className={Style.mainBanner}>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={5}
                slidesPerView={1}
                loop={true}
                speed={300}
                className={Style.carousel}
            >
                {
                    slides ? slides : imgHandler()
                }
            </Swiper>
        </div>

    )
}