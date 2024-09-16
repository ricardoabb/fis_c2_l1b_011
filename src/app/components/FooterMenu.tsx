"use client"
import React, { useState } from 'react';
import { card } from '../utils/info';
import { CardInfo } from './Card-Info';
import useCardStore from '../stores/CardStore';
import iconArrowUp from '@/app/assets/icon-arrow-up.svg';
import Image from 'next/image';
import { Console, log } from 'console';
import { useModalStore } from '../stores/useModalStore';




export function FooterMenu() {
  const setActiveId = useModalStore(state => state.setActiveId)

  const setTarget = useCardStore(state => state.setTarget);
  const setTitle = useCardStore(state => state.setTitle);
  const activeID = useModalStore(state => state.activeId);
  const activeTitle = useCardStore(state => state.activeTitle);
  const [cardId, setCardId] = useState("");

  const { activeId, title  } = useModalStore();

  

  // function handler(id: number, title: string) {
  //   setActiveId(id);
  //   setTarget(`target${parseInt(id) + 1}`);
  //   setTitle(title)
  // }

  return (
    <div className='relative bg-sand-200 rounded-none  lg:rounded-t-[80px] w-full lg:w-[750px] pt-4 pb-4  mx-auto bg-opacity-60'>
      <h2 className='absolute -top-12 text-sand-500 text-2xl left-1/2 -translate-x-1/2 w-[80%] text-center border-b-[1px] border-white'>{title}</h2>
      <ul className='w-auto flex gap-5 lg:gap-10 justify-center items-center  ' >
        {card.map((item, index) => (  
        index >= 2 ? (
          <li id={`target${index + 1}`} key={index} className="my-3 sm:my-4 ">
            <div className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${activeId === index ? "bg-sand-500" : "bg-[#fff]"} `}></div>
          </li>
        ) : null
        ))}              

      </ul>
    </div>

  );
};