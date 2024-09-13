"use client"
import React, { useState } from 'react';
import { card } from '../utils/info';
import { CardInfo } from './Card-Info';
import useCardStore from '../stores/CardStore';
import iconArrowUp from '@/app/assets/icon-arrow-up.svg';
import Image from 'next/image';
import { Console, log } from 'console';




export function FooterMenu() {
  const setActive = useCardStore(state => state.setActive)

  const setTarget = useCardStore(state => state.setTarget);
  const setTitle = useCardStore(state => state.setTitle);
  const activeID = useCardStore(state => state.activeId);
  const activeTitle = useCardStore(state => state.activeTitle);
  const [cardId, setCardId] = useState("");

  function handler(id: string, title: string) {
    setActive(id);
    setTarget(`target${parseInt(id) + 1}`);
    setTitle(title)
  }

  return (
    <div className='bg-sand-200 rounded-none  lg:rounded-t-[80px] w-full lg:w-[650px] pt-4 pb-4  mx-auto bg-opacity-60'>
      {/* <h2 className='text-3xl text-center mb-5'>{activeTitle}</h2> */}
      <ul className='w-auto flex gap-5 lg:gap-10 justify-center items-center  ' >
        {card.map((item, index) => (  
          <li id={`target${index + 1}`} key={index} className="my-3 sm:my-4 ">
            <div className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${activeID === index.toString() ? "bg-sand-500" : "bg-[#fff]"} `}></div>
          </li>
        ))}
              
        <li className="my-3 sm:my-4 ">
          <a href="#top" className='cursor-pointer animate-fade-in-out'  >
          <div className='w-8 '>
            <Image src={iconArrowUp}
              alt='voltar ao topo'
             width={100}
             height={100}
            />
          </div>
        </a>
        </li>
      </ul>
    </div>

  );
};