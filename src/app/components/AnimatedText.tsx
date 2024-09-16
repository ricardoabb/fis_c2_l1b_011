"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';


import iconRight from '@/app/assets/icon-arrow-right.svg';
import useCardStore from "../stores/CardStore";
import { image } from "framer-motion/client";
import { useModalStore } from "../stores/useModalStore";

type TextBoxProps = {
  text: string;
  limit?: number;
  delay?: number;
};

export function AnimatedText({ text, limit = 140, delay = 5 }: TextBoxProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [remainingText, setRemainingText] = useState<string>(text);
  const [baseText, setBaseText] = useState<string>(text);

  const [displayBtn, setDisplayBtn] = useState<string>('hidden');
  const [animationNextBtn, setAnimationNextBtn] = useState<string>('animate-fade-in-out');
  const { isImageActive, setImageActive, } = useCardStore();
  const { image1 } = useModalStore();

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < baseText.length) {
        currentText += baseText[currentIndex];
        if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

          setDisplayedText(currentText);
          baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          baseText.length <= limit ? setAnimationNextBtn('') : setAnimationNextBtn('animate-fade-in-out');
          baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          baseText.length <= limit && image1 !== 'undefined' ? setImageActive(true) : setImageActive(false);





        } else {
          setRemainingText(baseText.slice(currentIndex));
          setDisplayedText(currentText + '...');
          clearInterval(intervalId);
        }
        currentIndex++;
      } else {
        clearInterval(intervalId);

      }
    }, delay);


    return () => clearInterval(intervalId);
  }, [baseText, limit, delay]);

  function handlerLoadText() {
    setBaseText(remainingText);

  }

  function handlerBack() {
    setBaseText(text);

  }

  return (
    <div className="h-full flex flex-col justify-between">
      <p>{displayedText}</p>
      {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}
      <div className="flex items-center ml-auto gap-3">
        {

          

            <>
              <a onClick={handlerBack} className={`${displayBtn} cursor-pointer animate-fade-in-out`}>voltar</a><div className={`w-4 py-3  none cursor-pointer ${animationNextBtn}  `}>
                <a onClick={handlerLoadText}><Image width={100} height={100} src={iconRight} alt="carregar restante do texto..." /></a>
              </div>
            </>
          

        }
      </div>

    </div>
  );
};


