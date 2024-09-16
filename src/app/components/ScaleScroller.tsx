'use client'
import React, { useRef, useEffect } from 'react';
import useCardStore from '../stores/CardStore';
import Image from 'next/image';
import ScaleImg from '@/app/assets/image-scale.webp';

interface VerticalScrollerProps {
  targetId?: string;

}

export function ScaleScroller({ targetId = 'taget1' }: VerticalScrollerProps) {
  const target = useCardStore(state => state.targetId);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = document.getElementById(target);
    if (targetElement && scrollerRef.current) {
      const targetPosition = targetElement.offsetTop;
      scrollerRef.current.style.transform = `translateY(${targetPosition}px)`;
    }
  }, [target]);

  return (
    <div ref={scrollerRef} className="relative transition-transform duration-500 -z-10">      
        
      <div className='absolute flex-col top-[-3750px] lg:top-[-4700px] 2xl:top-[-8700px] left-2 lg:left-32 2xl:left-80 w-[80px] lg:w-[100px] 2xl:w-[194px]  h-[3762px] lg:h-[4703px]  2xl:h-[9129px]'>
        <Image
          src={ScaleImg}
          alt={"scale"}
          layout="fill" // Faz a imagem preencher o contêiner
          objectFit="contain" // Ajusta a imagem para cobrir o contêiner      
        />

      </div>

    </div>
  );
};

