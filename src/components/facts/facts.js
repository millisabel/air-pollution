import React from "react";

import FactsItem from "./factsItem";

import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import "./facts.scss";

SwiperCore.use([Navigation, Pagination]);

const Facts = ({title, slides}) => {
    const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
        <FactsItem item={slideInfo}/>
    </SwiperSlide>);

    return (
        <section className="facts" id="facts">
            <div className="container">
                <h2 className="facts__title">{title}</h2>
                <Swiper
                    slidesPerView = {1}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints = {
                        {
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                slidesPerGroup: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                slidesPerGroup: 3,
                            },
                        }
                    }
                >
                    {factsSlides}
                </Swiper>
                <div className="swiper-button-prev"/>
                <div className="swiper-button-next"/>
            </div>
        </section>
    );
};

export default Facts;