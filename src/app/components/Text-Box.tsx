"use client"
import Image from "next/image";
import iconBalance from '@/app/assets/icon-scale.svg';


import React, { useState, useEffect } from 'react';
import { AnimatedText } from "./AnimatedText";

type textInfoProp = {
  content: string;
  hide: boolean;
};





export function TextBox({ content = "", hide= false }: textInfoProp) {


  
  return (
    <div id="container" className="w-[350px] md:w-[750px] mx-auto">
      <div id="title" className={`flex items-center justify-center gap-2 p-4 border-b border-sand-500  ${hide ? "hidden" : "block"} `}>
        <div className="w-28">
          <Image width={100} height={100} src={iconBalance} alt="" />
        </div>
        <div id="text">
          <p className="text-sand-500 text-base md:text-3xl">GRANDEZAS FÍSICAS</p>
          <h1 className="text-sand-500 text-4xl md:text-7xl">BALANÇA</h1>
        </div>
      </div>

      <div id="box-container" className={`px-5 py-7 bg-gradient-to-r from-sand-300 to-sand-100 rounded-2xl mt-5 shadow-solid `}>
        <div className={`h-80 md:h-44 text-base text-sand-500`}>
          <AnimatedText text={content} limit={350} />          
        </div>
      </div>
      
    </div>
  )
}