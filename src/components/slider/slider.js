import React, {useEffect,  useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'react-id-swiper';
import SwiperCore, {Navigation, Pagination, Controller} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import SlideItem from "./sliderItem";

import "./slider.scss"

SwiperCore.use([Navigation, Pagination, Controller]);

const Slider = ({slides}) => {

    const slideItems= slides.map((slide, i) => (
        <SwiperSlide key={i}>
            <SlideItem key={`slide_${[i]}`} className="">
                <div className="slider__item">
                    <img
                        className="slider__img"
                        src={slide.imgUrl}
                        alt="slide"
                    />
                    <p className="slider__desc">
                        {slide.desc}
                    </p>
                </div>
            </SlideItem>
        </SwiperSlide>

        )
    );

    const slideImgThumbs = slides.map((slide, i) => (
        <SwiperSlide key={i}>
            <SlideItem key={`slide_${i}`} className="">
                <img
                    className="slider__thumbs"
                    src={slide.imgUrl}
                    alt="preview slide"
                />
            </SlideItem>
        </SwiperSlide>
        )
    );

    const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);

    let thumbsParams = {
        slideToClickedSlide: true,
        slidesPerView: 2,
    };

    let params = {
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {clickable: true},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            900:
                {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 2,
                },
            1300:
                {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    slidesPerGroup: 3,
                },
        },
    };

    useEffect(() => {
        const gallerySwiper = gallerySwiperRef.current.swiper;
        const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
        if (gallerySwiper.controller && thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, []);

    return (
        <div className="slider">
            <div className="slider__container">
                    <Swiper {...params} ref={gallerySwiperRef}>
                        {slideItems}
                    </Swiper>

            </div>
            <div className="slider__containerThumbs">
                <Swiper {...thumbsParams} ref={thumbnailSwiperRef}>
                    {slideImgThumbs}
                </Swiper>
            </div>

            <div className="swiper-button-prev"/>
            <div className="swiper-button-next"/>
        </div>
    );
};

export default Slider;