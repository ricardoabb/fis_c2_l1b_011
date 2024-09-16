"use client"
import React, { useState } from 'react';
import { card } from '../utils/info';
import { CardInfo } from './Card-Info';




export function ListCard() {

  const [cardId, setCardId] = useState("")
  return (
    <ul >
      {card.map((item, index) => (
        <li id={`target${index + 1}`} key={index} className="my-20 sm:my-14">
          <CardInfo isActive={false} id={index.toString()} title={item.title} date={item.date} content={item.content} image={item.image} />
        </li>
      ))}
    </ul>

  );
};