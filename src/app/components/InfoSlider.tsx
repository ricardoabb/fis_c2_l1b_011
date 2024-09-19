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
            <div className="flex items-center justify-around mt-12 mb-28  w-[350px] md:w-[750px] h-[133px] mx-auto">


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
                    {/* <Image
                        src={iconImage}
                        alt=""
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}

                    /> */}
                    <svg className="w-[120px]" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="66.5" cy="66.5" r="55.5" fill="#804C11" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M66.5 127C99.9132 127 127 99.9132 127 66.5C127 33.0868 99.9132 6 66.5 6C33.0868 6 6 33.0868 6 66.5C6 99.9132 33.0868 127 66.5 127ZM66.5 133C103.227 133 133 103.227 133 66.5C133 29.7731 103.227 0 66.5 0C29.7731 0 0 29.7731 0 66.5C0 103.227 29.7731 133 66.5 133Z" fill="#804C11" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M61.1418 42C59.1227 42 57.2599 43.087 56.2665 44.8449L55.5007 46.2H44.9714C41.8786 46.2 39.3714 48.7072 39.3714 51.8V85.4C39.3714 88.4928 41.8786 91 44.9714 91H86.9714C90.0642 91 92.5714 88.4928 92.5714 85.4V51.8C92.5714 48.7072 90.0642 46.2 86.9714 46.2H75.0422L74.2764 44.8449C73.283 43.087 71.4202 42 69.401 42H61.1418ZM65.2714 81.2C72.6168 81.2 78.5714 75.2454 78.5714 67.9C78.5714 60.5546 72.6168 54.6 65.2714 54.6C57.926 54.6 51.9714 60.5546 51.9714 67.9C51.9714 75.2454 57.926 81.2 65.2714 81.2Z" fill="white" />
                    </svg>

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