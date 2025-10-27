"use client";

import { use } from "react";
import useSlideNavigation from "@/hooks/useSlideNavigation";
import Slide1 from "@/components/Slide1";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";
import Slide4 from "@/components/Slide4";
import Slide5 from "@/components/Slide5";
import Slide6 from "@/components/Slide6";
import Slide7 from "@/components/Slide7";
import Slide8 from "@/components/Slide8";
import Slide9 from "@/components/Slide9";
import Slide10 from "@/components/Slide10";
import Slide11 from "@/components/Slide11";
import Slide12 from "@/components/Slide12";
import Slide13 from "@/components/Slide13";
import Slide14 from "@/components/Slide14";
import Slide15 from "@/components/Slide15";
import Slide16 from "@/components/Slide16";
import Slide17 from "@/components/Slide17";
import Slide18 from "@/components/Slide18";
import Slide19 from "@/components/Slide19";
import Slide20 from "@/components/Slide20";
import Slide21 from "@/components/Slide21";
import Slide22 from "@/components/Slide22";
import Slide23 from "@/components/Slide23";

export default function SlidePage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const id = parseInt(params.id, 10);

  useSlideNavigation();

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-100">
      {id === 1 && <Slide1 />}
      {id === 2 && <Slide2 />}
      {id === 3 && <Slide3 />}
      {id === 4 && <Slide4 />}
      {id === 5 && <Slide5 />}
      {id === 6 && <Slide6 />}
      {id === 7 && <Slide7 />}
      {id === 8 && <Slide8 />}
      {id === 9 && <Slide9 />}
      {id === 10 && <Slide10 />}
      {id === 11 && <Slide11 />}
      {id === 12 && <Slide12 />}
      {id === 13 && <Slide13 />}
      {id === 14 && <Slide14 />}
      {id === 15 && <Slide15 />}
      {id === 16 && <Slide16 />}
      {id === 17 && <Slide17 />}
      {id === 18 && <Slide18 />}
      {id === 19 && <Slide19 />}
      {id === 20 && <Slide20 />}
      {id === 21 && <Slide21 />}
      {id === 22 && <Slide22 />}
      {id === 23 && <Slide23 />}
    </main>
  );
}
