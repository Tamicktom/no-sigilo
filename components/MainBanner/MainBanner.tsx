import React from 'react'
import Style from './MainBanner.module.sass'
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function MainBanner(props: any) {
    const id = React.useId();

    const slideImg = [
        {
            src: '/images/teste.png',
            width: '768px',
            height: '500px',
        },
        {
            src: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            width: '768px',
            height: '500px',
        },
        {
            src: 'https://images.pexels.com/photos/15386/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            width: '768px',
            height: '500px',
        },
    ]

    const [slides, setSlides] = React.useState(false);

    const imgHandler = () => {
        const slides: any = [];
        let counter = 0;
        slideImg.forEach(e => {
            slides.push(
                <SwiperSlide key={id + '_slide_key_' + counter}>
                    <div className={Style.img_holder}>
                        <Image
                            src={e.src}
                            width={e.width}
                            height={e.height}
                            layout="intrinsic"
                        />
                    </div>
                </SwiperSlide>
            );
            counter++;
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