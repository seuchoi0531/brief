export default function Slide14() {
  const cls = "font-bold text-lg py-4 px-8 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-[0_4px_6px_rgba(128,0,128,0.5)] hover:scale-105 hover:shadow-[0_6px_10px_rgba(255,192,203,0.5)] focus:scale-105 focus:shadow-[0_6px_10px_rgba(255,192,203,0.5)] focus:outline-none focus:ring-4 focus:ring-purple-300 active:translate-y-1 transition-all duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out focus:transition-all focus:duration-500 focus:ease-in-out active:transition-all active:duration-500 active:ease-in-out";
  return (
    <>
      <h1 className="absolute top-8 left-8 text-4xl font-semibold">클래스 분리하기</h1>
      <div className="grid grid-cols-2 w-full h-full">
        <div className="justify-self-center content-center">
          <button className={cls}>버튼</button>
        </div>
        <div className="flex flex-col pt-50">
          <p className="text-2xl font-bold pb-4">클래스 목록</p>
          <p className="text-xl font-bold">base</p>
          <p className="pb-2">font-bold text-lg py-4 px-8 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-[0_4px_6px_rgba(128,0,128,0.5)] transition-all duration-500 ease-in-out</p>
          <p className="text-xl font-bold">hover</p>
          <p className="pb-2">scale-105 shadow-[0_6px_10px_rgba(255,192,203,0.5)] transition-all duration-500 ease-in-out</p>
          <p className="text-xl font-bold">focus</p>
          <p className="pb-2">scale-105 shadow-[0_6px_10px_rgba(255,192,203,0.5)] outline-none ring-4 ring-purple-300 transition-all duration-500 ease-in-out</p>
          <p className="text-xl font-bold">active</p>
          <p className="pb-2">translate-y-1 transition-all duration-500 ease-in-out</p>
        </div>
      </div>
    </>
  );
}
