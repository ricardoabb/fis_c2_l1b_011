"use client"
import Image from "next/image";
import iconImage from '@/app/assets/icon-image.png';
import React, { useState, useRef, useEffect } from 'react';
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { register, SwiperContainer } from "swiper/element/bundle";
register();

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Intro } from "./Intro";
import { card } from "../utils/info";
import useCardStore from "../stores/CardStore";
import { useModalStore } from "../stores/useModalStore";

export function InfoSlider() {

    const sliderRef: any = useRef<SwiperClass>()
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const { isImageActive } = useCardStore();
    const { setActiveId, setModal, openModal, image1 } = useModalStore();

    useEffect(() => {
        setModal({ image1: card[0].image, title: card[0].title, subtitle: card[0].subtitle });


        register();
    }, [])

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
        setModal({ image1: `${card[swiper.activeIndex].image}`, title: `${card[swiper.activeIndex].title}`, subtitle: `${card[swiper.activeIndex].subtitle}` });
        setActiveId(swiper.activeIndex <= 2 ? 2 : swiper.activeIndex);

    };

    function handleImage() {

        openModal();

    }



    return (
        <>
            <Swiper onSlideChange={handleSlideChange}
                modules={[Navigation, A11y]}
                ref={sliderRef}
                //navigation
                onInit={(swiper: any) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                spaceBetween={50}

                slidesPerView={1}
                allowTouchMove={false}

            >

                {card.map((item, index) => (
                    <SwiperSlide key={index}>
                        {activeIndex === index ? <Intro key={activeIndex} id={activeIndex} title={item.title} date={item.date} content={item.content} hide={false} /> : null}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex items-center justify-around mt-12 mb-12 w-[350px] md:w-[750px] h-[133px] mx-auto">


                <button className={`${realIndex == 0 ? "bg-opacity-[.5]" : "opacity-100"} scale-x-[-1] flex justify-center items-center w-14 h-14 bg-[#fff] rounded-full`}
                    //ref={prevRef}
                    disabled={realIndex == 0}
                    onClick={() => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd);
                        sliderRef.current?.swiper.slidePrev();



                    }}>
                    <div >
                        <svg className="fill-[#804C11]" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2263 9.60883C14.2579 10.6533 14.2579 12.3467 13.2263 13.3912L4.50948 22.2166C3.47787 23.2611 1.80531 23.2611 0.773705 22.2166C-0.257901 21.1722 -0.257902 19.4788 0.773705 18.4343L7.62263 11.5L0.773705 4.5657C-0.257901 3.52123 -0.2579 1.82782 0.773705 0.783349C1.80531 -0.261117 3.47788 -0.261117 4.50948 0.783349L13.2263 9.60883Z" />
                        </svg>
                    </div>
                </button>

                <div className={`transition-all ease-in-out  ${isImageActive && image1 ? 'opacity-100 cursor-pointer' : 'opacity-0 overflow-hidden w-0 h-0'} w-36 `} onClick={handleImage}>
                    <Image
                        src={iconImage}
                        alt=""
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}

                    />
                </div>

                <button className={`${isEnd ? "bg-opacity-[.5]" : "opacity-100"} flex justify-center items-center w-14 h-14 bg-[#fff] rounded-full`}
                    //ref={nextRef}
                    disabled={isEnd}
                    onClick={(swiper: any) => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd)
                        sliderRef.current?.swiper.slideNext();


                    }}>
                    <div >
                        <svg className="fill-[#804C11]" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2263 9.60883C14.2579 10.6533 14.2579 12.3467 13.2263 13.3912L4.50948 22.2166C3.47787 23.2611 1.80531 23.2611 0.773705 22.2166C-0.257901 21.1722 -0.257902 19.4788 0.773705 18.4343L7.62263 11.5L0.773705 4.5657C-0.257901 3.52123 -0.2579 1.82782 0.773705 0.783349C1.80531 -0.261117 3.47788 -0.261117 4.50948 0.783349L13.2263 9.60883Z" />
                        </svg>
                    </div>

                </button>
            </div>
        </>
    )
}