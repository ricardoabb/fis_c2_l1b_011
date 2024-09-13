"use client"
import Image from "next/image";
import iconBalance from '@/app/assets/icon-scale.svg';


import React, { useState, useEffect } from 'react';
import { AnimatedText } from "./AnimatedText";

type textInfoProp = {
  content: string;
  
};





export function Footer({ content = "",}: textInfoProp) {


  
  return (
    <div id="container" className="w-[350px] md:w-[750px] mx-auto">

      <div id="box-container" className={`px-5 pt-8 pb-28 bg-gradient-to-r from-sand-300 to-sand-100 rounded-t-[20px] mt-5 shadow-solid-up  `}>
        <div className={`h-80 md:h-44 text-xl text-sand-500`}>
          <AnimatedText text={content} limit={350} />          
        </div>
      </div>
      
    </div>
  )
}