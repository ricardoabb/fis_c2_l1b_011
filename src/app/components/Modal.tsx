"use client"
import Image from 'next/legacy/image';
import React, { useState } from 'react';
import { useModalStore } from "../stores/useModalStore";
import { motion, AnimatePresence } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';






export function Modal() {
    const { isOpen, image1, subtitle, video, closeModal } = useModalStore();
    const [loading, setLoading] = useState(true);
    if (!isOpen) return null;

    const handleImageLoad = () => {
        setLoading(false);
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900 bg-opacity-50 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-modal bg-no-repeat bg-cover bg-opacity-50 p-6 rounded shadow-lg w-full h-full flex items-center justify-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        onClick={closeModal}
                    >
                        <div className="relative w-full md:w-auto ">
                            <button onClick={closeModal} className="absolute top-[-80px] md:top-[-90px] right-0 md:right-[-0px] bg-[white!important] shadow-md rounded-full p-6 z-50">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5858 0.585786C13.3668 -0.195262 14.6332 -0.195262 15.4142 0.585786C16.1953 1.36684 16.1953 2.63316 15.4142 3.41421L10.8284 8L15.4142 12.5858C16.1953 13.3668 16.1953 14.6332 15.4142 15.4142C14.6332 16.1953 13.3668 16.1953 12.5858 15.4142L8 10.8284L3.41421 15.4142C2.63317 16.1953 1.36683 16.1953 0.585786 15.4142C-0.195262 14.6332 -0.195262 13.3668 0.585786 12.5858L5.17157 8L0.585787 3.41421C-0.195262 2.63316 -0.195262 1.36684 0.585787 0.585786C1.36684 -0.195262 2.63317 -0.195262 3.41421 0.585786L8 5.17157L12.5858 0.585786Z" fill="#81411F" />
                                </svg>

                            </button>
                            <div className="relative ">

                                <div className='relative'>
                                        {loading && (
                                            <div className="absolute inset-0 flex items-center justify-center">                                                
                                                <div className="w-10 h-10 border-t-4 border-t-sand-200 border-4 border-sand-500 rounded-full  animate-spin"></div>
                                            </div>
                                        )}
                                    <div className="select-none mx-auto w-[90%] md:w-[600px] h-fit h-[600px] bg-[#fff]  border-8 border-white overflow-hidden rounded-3xl">
                                        <Image
                                            src={image1!}
                                            alt=""
                                            width={0}
                                            height={0}
                                            objectFit='cover'
                                            sizes='100vh'
                                            quality={100}
                                            priority={true}
                                            unoptimized={true}
                                            onLoad={handleImageLoad}
                                            className={`transition-opacity duration-500 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}
                                        />
                                    </div>

                                    {subtitle !== 'undefined' && (

                                        <h3 className='w-[85%] md:w-[500px] bg-opacity-80 mt-2 mx-auto text-[14px] text-center text-white bg-[#804C11] rounded-md font-bold py-4 px-8'>{subtitle}</h3>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};    
