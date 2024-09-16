"use client"
import React, { useState } from 'react';

import pointIcon from '@/app/assets/icon-point.svg';
import Image from 'next/image';
import useCardStore from '../stores/CardStore';

type BgElementProps = {
  image: string;
  rotation?: string;
  positionBotton?: string;
  positionTop?: string;
  positionRight?: string;
  positionLeft?: string;
};

export function BgElement({ image, rotation = "0deg", positionTop = "auto", positionBotton = "auto", positionLeft = "auto", positionRight = "auto" }: BgElementProps) {
  const setActive = useCardStore(state => state.setActive)
  const activeID = useCardStore(state => state.activeId);
  const setTarget = useCardStore(state => state.setTarget);
  const setTitle = useCardStore(state => state.setTitle);



  return (
    <>
      <div className={`absolute -z-20 top-[400px] sm:top-[300px]   bottom-[] left-[] right-[-300px] sm:right-0  rotate--[${rotation}]  w-[600px] h-[600px] select-none`}>
        <Image
          src={image}
          alt=''
          layout="fill" // Faz a imagem preencher o contêiner
          objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
        />
      </div>
      <div className={`absolute -z-20 top-[]  bottom-[150px]  left-[-400px] sm:left-[-100px] right-[]  rotate-[100deg]  w-[600px] h-[600px] select-none`}>
        <Image
          src={image}
          alt=''
          layout="fill" // Faz a imagem preencher o contêiner
          objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
        />
      </div>
    </>
  );
};