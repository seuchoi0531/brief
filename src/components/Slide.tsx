"use client"

import styles from "./slide.module.css";

export interface SlideData {
  type: number;
  title?: string;
  cell: number;
  kind?: number;
}
interface SlideProp {
  data: SlideData;
  handle: React.Dispatch<React.SetStateAction<boolean[]>>;
  children?: React.ReactNode;
}
export default function Slide({ data, handle, children }: SlideProp) {
  console.log(data.type);
  console.log(data.title);
  return (
    <>
      {
        (Number(data.cell) < 5) && (
          <div className={`${styles.slide} ${data.type === 0 ? `${styles['opening-slide']}` : (data.type === 2 ? "closing-slide" : "")}`}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={`${data.type !== 2 ? "hidden" : `slide-type-${Number(data.cell)}${Number(data.kind)}`}`}>{children}</div>
          </div>
        )
      }
    </>
  )
}