 
import { FooterMenu } from "./components/FooterMenu";
import { BgElement } from "./components/BgElements";
import { Intro } from "./components/Intro";
import { InfoSlider } from "./components/InfoSlider";
import { Modal } from "./components/Modal";
import Image from "next/image";
import iconBalance from '@/app/assets/icon-scale.svg';




export default function Home() {

  return (
    <main id="top" className={`relative overflow-hidden bg-main bg-no-repeat bg-cover bg-center w-screen min-h-screen p-0 z-0 `}>      
      <div id="title" className={`flex items-center flex-col justify-center gap-2 p-4 `}>
          <div className="w-36">
            <Image
              src={iconBalance}
              alt=""
              width={0}
              height={0}
              sizes='100vh'
              quality={100}
              priority={true}
              unoptimized={true}
            />
          </div>
          
          <div id="text" className="mt-8">
            <p className="text-sand-500 text-[1.7rem] md:text-6xl leading-normal font-bold md:font-semibold text-center mb-0">GRANDEZAS FÍSICAS</p>
            <h1 className="text-sand-500 text-[1.9rem] leading-none  text-center md:text-6xl">Massa e a Balança</h1>
          </div>
        </div>
      <InfoSlider />
         
      <div className="flex flex-col items-start p-4 z-10">
    <Modal />
        {/* <div id="card-container" className="mx-auto my-20">
          <ListCard />
        </div> */}
      </div>
      <div className="absolute bottom-0 w-full">
        <FooterMenu />
      </div>

      <BgElement
        
        image="/bg-element.svg"   
        />
    </main>
  );
}
