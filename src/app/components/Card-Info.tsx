"use client"
import React, { useState } from 'react';

import pointIcon from '@/app/assets/icon-point.svg';
import Image from 'next/image';
import useCardStore from '../stores/CardStore';

type CardProps = {
  isActive: boolean;
  id: string;
  title: string;
  date?: string;
  content: string;
  image: string;
};

export function CardInfo({ isActive, id, title, date, content = "test", image }: CardProps) {
  const setActive = useCardStore(state => state.setActive)
  const activeID = useCardStore(state => state.activeId);
  const setTarget = useCardStore(state => state.setTarget);
  const setTitle = useCardStore(state => state.setTitle);
  const [isOpen, setIsOpen] = useState(isActive);

  function handler(id: string){
    setActive(id);    
    setTarget(`target${parseInt(id) + 1}`);
    setTitle(title)
    
  }

  return (
    <div className="relative flex items-center text-sand-500 mx-auto">
      <div className="absolute flex items-center justify-between w-1/2 top-[18px] sm:top-[40px] right-[-80px] sm:right-[-280px] cursor-pointer z-10" onClick={() => handler(id)}>


        <div className="absolute w-8 sm:w-10 h-8 sm:h-10 left-[-36px] select-none">
          <Image
            src={pointIcon}
            alt='Point Icon'
            layout="fill" // Faz a imagem preencher o contêiner
            objectFit="contain" // Ajusta a imagem para cobrir o contêiner            
          />
        </div>
        <div className="absolute w-28 sm:w-36 h-36 sm:h-36 ml-3  animate-pulse select-none" onClick={() => handler(id)}>
          <Image
            src={image}
            alt={title}
            layout="fill" // Faz a imagem preencher o contêiner
            objectFit="contain" // Ajusta a imagem para cobrir o contêiner      
          />
        </div>




      </div>

      <div id="card-content" className="w-full sm:w-[650px]">
        <div className={`py-2 mb-3 border-b-[1px] w-[72%] sm:w-[85%] overflow-hidden transform scale-x-0 origin-right ${activeID == id ? 'scale-x-100 transition-transform duration-[800ms] ease-in-out' : 'scale-x-0 transition-transform duration-[800ms] ease-in-out'}`}>
          <h1 className=' font-bold text-xl w-[80%] '>{title}  <br /><span className='text-base'>{date}</span></h1>
        </div>
        <div className={` w-full sm:w-[85%] mt-5 shadow-solid rounded-2xl overflow-hidden transform scale-x-0 origin-right ${activeID == id? 'scale-x-100 transition-transform duration-1000 ease-in-out' : 'scale-x-0 transition-transform duration-1000 ease-in-out'}`}>
          <div id="box-container" className="h-full p-5 bg-gradient-to-r from-sand-300 to-sand-100  ">
            <div className="text-base text-sand-500 ">
              <p>{content}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};