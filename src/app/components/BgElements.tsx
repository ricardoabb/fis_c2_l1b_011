"use client"
import React from 'react';

import Image from 'next/image';

type BgElementProps = {
  image: string;
  rotation?: string;
  positionBotton?: string;
  positionTop?: string;
  positionRight?: string;
  positionLeft?: string;
};

export function BgElement({ image, rotation = "0deg", positionTop = "auto", positionBotton = "auto", positionLeft = "auto", positionRight = "auto" }: BgElementProps) {

  return (
    <>
      <div className={`absolute -z-20 top-[400px] sm:top-[300px]   bottom-[] left-[] right-[-300px] sm:right-0  rotate--[${rotation}]  w-[600px] h-[600px] select-none`}>
        <Image
          src={image}
          alt=''
          layout="fill" 
          objectFit="contain" 
        />
      </div>
      <div className={`absolute -z-20 top-[-80px]  bottom-[150px]  left-[-400px] sm:left-[-100px] right-[]  rotate-[100deg]  w-[600px] h-[600px] select-none`}>
        <Image
          src={image}
          alt=''
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  );
};