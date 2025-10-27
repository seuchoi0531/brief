export default function Slide5() {
  const cls = "font-bold text-lg py-4 px-8 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-[0_4px_6px_rgba(128,0,128,0.5)]";
  return (
    <>
      <h1 className="absolute top-8 left-8 text-4xl font-semibold">너무 긴 TailwindCSS</h1>
      <div className="grid grid-cols-2 w-full h-full">
        <div className="justify-self-center content-center">
          <button className={cls}>버튼</button>
        </div>
        <div className="flex flex-col pt-50">
          <p className="text-2xl font-bold pb-4">클래스 목록</p>
          <p>{cls}</p>
        </div>
      </div>
    </>
  );
}
