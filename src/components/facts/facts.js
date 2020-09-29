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
                <div className="facts__slider">
                    <Swiper
                        autoHeight = {true}
                        spaceBetween={10}
                        slidesPerView = {1}
                        slidesPerGroup = {1}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints = {
                            {
                                900: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                    slidesPerGroup: 2,
                                },
                                1400: {
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
            </div>
        </section>
    );
};

export default Facts;