import Image from "next/image";

export default function Slide20() {
  return (
    <>
      <h1 className="absolute top-8 left-8 text-4xl font-semibold">TailwindCSS 동작 방식 - 토큰화</h1>
      <div className="grid grid-cols-2 grid-rows-1 w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl">import, from, export, div, h1, absolute, top-8, flex, hight 등등...</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image className="self-center" src="/assets/img5.png" alt="" width="1380" height="346" />
        </div>
      </div>
    </>
  );
}
