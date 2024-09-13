"use client"
import Image from "next/image";
import iconBalance from '@/app/assets/icon-scale.svg';
import iconImage from '@/app/assets/icon-image.png';

import React from 'react';
import { AnimatedText } from "./AnimatedText";
import { TextBox } from "./Text-Box";
import { info } from "../utils/info";

type textInfoProp = {
  content?: string;
  hide?: boolean;
};

export function Intro({ content = "", hide = false }: textInfoProp) {



  return (
    <>
      <div id="container" className="w-[350px] md:w-[750px] mx-auto">
        <div id="title" className={`flex items-center flex-col justify-center gap-2 p-4 ${hide ? "hidden" : "block"} `}>
          <div className="w-36">
            <Image
              src={iconBalance}
              alt=""
              width={0}
              height={0}
              sizes='100vh'
              quality={100}
              priority={true}
              unoptimized={true}
            />
          </div>
          <hr className="w-full mt-4 border-b-1 border-sand-500" />
          <div id="text">
            <p className="text-sand-500 text-[1.7rem] md:text-6xl leading-normal font-bold md:font-semibold text-center mb-0">GRANDEZAS FÍSICAS</p>
            <h1 className="text-sand-500 text-[1.9rem] leading-none  text-center md:text-6xl">Massa e a Balança</h1>
          </div>
        </div>

        <div id="box-container" className={`px-5 py-7 bg-gradient-45 from-[#804C11] to-[#C58961] rounded-2xl mt-5 shadow-solid `}>
          <div className={`h-64 md:h-44 text-base text-white`}>
            <AnimatedText text={content} limit={250} />
          </div>
        </div>
        <nav className="flex items-center justify-center gap-3 mt-12 mb-5">
        
        </nav>
      </div>
    </>
  )
}