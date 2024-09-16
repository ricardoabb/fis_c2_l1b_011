"use client"


import iconImage from '@/app/assets/icon-image.png';

import React from 'react';
import { AnimatedText } from "./AnimatedText";


type textInfoProp = {
  title?: string;
  date?: string;
  content?: string;
  id: number;
  hide?: boolean;
};

export function Intro({ title, date, content = "", hide = false, id }: textInfoProp) {



  return (
    <>
      <div id="container" className="relative w-[350px] md:w-[750px] mx-auto ">


        <div id="box-container" className={`relative px-5 py-7 ${title == 'Atualidade' ? 'bg-[#000]' : 'bg-gradient-45 from-[#804C11] to-[#C58961]'}  rounded-2xl mt-5  overflow-hidden shadow-md z-9 `}>
          <h1 className={`relative uppercase font-bold ${title == 'Atualidade' ? 'text-white' : 'text-white'} text-[1.5rem] border-b-[1px] border-white mb-1 z-10`}>{title}</h1>
          <span >{date}</span>
          <div className={`relative h-64 md:h-44 mt-4 text-base ${title == 'Atualidade' ? 'text-white' : 'text-white'} z-10`}>
            <AnimatedText text={content} limit={250} />
          </div>
          {
            title == 'Atualidade' && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute opacity-30 blur-[2px] top-0 left-0 w-full h-full object-cover z-0"
              >
                <source src="/conclusion-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          }
        </div>

      </div>
    </>
  )
}