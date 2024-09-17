"use client"
import React from 'react';
import { card } from '../utils/info';
import { useModalStore } from '../stores/useModalStore';

export function FooterMenu() {
  const { activeId, title  } = useModalStore();

  return (
    <div className='relative bg-sand-200 rounded-none  lg:rounded-t-[80px] w-full lg:w-[750px] pt-4 pb-4  mx-auto bg-opacity-60'>
      <h2 className='absolute hidden md:block -top-12 text-sand-500 text-2xl left-1/2 -translate-x-1/2 w-[80%] text-center border-b-[1px] border-white'>{title}</h2>
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