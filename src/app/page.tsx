 
import { info } from "@/app/utils/info";

import { FooterMenu } from "./components/FooterMenu";
import { BgElement } from "./components/BgElements";
import { Intro } from "./components/Intro";
import { InfoSlider } from "./components/InfoSlider";



export default function Home() {

  return (
    <main id="top" className={`relative overflow-hidden bg-main bg-no-repeat bg-cover bg-center w-screen min-h-screen p-0 z-0 `}>
      {/* <TextBox content={info.intro} hide={false} /> */}
      <InfoSlider />
         
      <div className="flex flex-col items-start p-4 z-10">

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
