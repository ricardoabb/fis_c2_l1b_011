"use client"
import Image from "next/image";
import iconBalance from '@/app/assets/icon-scale.svg';
import iconImage from '@/app/assets/icon-image.png';
import iconArrow from '@/app/assets/icon-arrow-right.svg';

import React, { useState, useRef } from 'react';
import { AnimatedText } from "./AnimatedText";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Intro } from "./Intro";
import { info } from "../utils/info";




export function InfoSlider() {

    const sliderRef: any = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(false);



    return (
        <>
            <Swiper
                modules={[Navigation, A11y]}
                ref={sliderRef}
                onInit={(swiper: any) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                spaceBetween={50}
                slidesPerView={1}

                allowTouchMove={false}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><Intro content={info.intro} hide={false} /></SwiperSlide>
                <SwiperSlide><Intro content={info.intro} hide={false} /></SwiperSlide>
                <SwiperSlide><Intro content={info.intro} hide={false} /></SwiperSlide>


            </Swiper>
            <div className="flex items-center justify-around mt-12 mb-5 w-[350px] md:w-[750px] mx-auto">


                <button
                    ref={prevRef}
                    disabled={realIndex == 0}
                    onClick={() => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd)
                        setIsBeginning(sliderRef.current?.swiper.isBeginning)
                    }}>
                    <div className={`${isBeginning? "bg-opacity-[.5]" : "opacity-100"} scale-x-[-1] flex justify-center items-center w-14 h-14 bg-[#fff] rounded-full`}>
                        <svg className="fill-[#804C11]" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2263 9.60883C14.2579 10.6533 14.2579 12.3467 13.2263 13.3912L4.50948 22.2166C3.47787 23.2611 1.80531 23.2611 0.773705 22.2166C-0.257901 21.1722 -0.257902 19.4788 0.773705 18.4343L7.62263 11.5L0.773705 4.5657C-0.257901 3.52123 -0.2579 1.82782 0.773705 0.783349C1.80531 -0.261117 3.47788 -0.261117 4.50948 0.783349L13.2263 9.60883Z" />
                        </svg>
                    </div>
                </button>

                <div className="w-36">
                    <Image
                        src={iconImage}
                        alt=""
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>


                <button
                    ref={nextRef}
                    disabled={isEnd}
                    onClick={() => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd)
                    }}>
                    <div className={` ${isEnd ? "bg-opacity-[.5]" : "opacity-100"} flex justify-center items-center w-14 h-14 bg-[#fff] rounded-full`}>
                        <svg className="fill-[#804C11]" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2263 9.60883C14.2579 10.6533 14.2579 12.3467 13.2263 13.3912L4.50948 22.2166C3.47787 23.2611 1.80531 23.2611 0.773705 22.2166C-0.257901 21.1722 -0.257902 19.4788 0.773705 18.4343L7.62263 11.5L0.773705 4.5657C-0.257901 3.52123 -0.2579 1.82782 0.773705 0.783349C1.80531 -0.261117 3.47788 -0.261117 4.50948 0.783349L13.2263 9.60883Z" />
                        </svg>
                    </div>

                </button>
            </div>
        </>
    )
}