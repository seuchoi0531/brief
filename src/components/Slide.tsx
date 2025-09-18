"use client";

import ClosingSlide from "./ClosingSlide";
import CommonSlide from "./CommonSlide";
import OpeningSlide from "./OpeningSlide";

export interface SlideData {
  type: number;
  title?: string;
  cell: number;
  kind?: number;
}
export interface SlideProp {
  data: SlideData;
  handle: React.Dispatch<React.SetStateAction<boolean[]>>;
  children?: React.ReactNode;
}
export default function Slide({ data, handle, children }: SlideProp) {
  console.log(data.type);
  console.log(data.title);
  return (
    <>
      {data.type === 0 && <OpeningSlide data={data} handle={handle} />}
      {data.type === 1 && (
        <CommonSlide data={data} handle={handle}>
          {children}
        </CommonSlide>
      )}
      {data.type === 2 && <ClosingSlide data={data} handle={handle} />}
    </>
  );
}
