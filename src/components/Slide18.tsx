import { appendPrefix } from "@/functions/appendPrefix";
import Image from "next/image";

export default function Slide15() {
  // const cls = "font-bold text-lg py-4 px-8 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-[0_4px_6px_rgba(128,0,128,0.5)] hover:scale-105 hover:shadow-[0_6px_10px_rgba(255,192,203,0.5)] focus:scale-105 focus:shadow-[0_6px_10px_rgba(255,192,203,0.5)] focus:outline-none focus:ring-4 focus:ring-purple-300 active:translate-y-1 transition-all duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out focus:transition-all focus:duration-500 focus:ease-in-out active:transition-all active:duration-500 active:ease-in-out";

  const styles = {
    base: "font-bold text-lg py-4 px-8 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-[0_4px_6px_rgba(128,0,128,0.5)] transition-all duration-500 ease-in-out",
    hover: "scale-105 shadow-[0_6px_10px_rgba(255,192,203,0.5)] transition-all duration-500 ease-in-out",
    focus: "scale-105 shadow-[0_6px_10px_rgba(255,192,203,0.5)] outline-none ring-4 ring-purple-300 transition-all duration-500 ease-in-out",
    active: "translate-y-1 transition-all duration-500 ease-in-out",
  };

  console.log(styles);
  return (
    <>
      <h1 className="absolute top-8 left-8 text-4xl font-semibold">클래스 분리하기</h1>
      <div className="grid grid-rows-[300px_100px_300px] pt-20 w-full h-full">
        <div className="justify-self-center content-center">
          <Image className="self-center" src="/assets/img1.png" alt="" width="1525" height="117" />
        </div>
        <div className="flex flex-col">
          <Image className="self-center" src="/assets/img4.png" alt="" width="1525" height="117" />
        </div>
        <div className="justify-self-center content-center">
          <button className={`${styles.base} ${appendPrefix("hover", styles.hover)} ${appendPrefix("focus", styles.focus)} ${appendPrefix("active", styles.active)}`}>버튼</button>
        </div>
      </div>
    </>
  );
}
