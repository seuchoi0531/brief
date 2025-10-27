export default function Slide1() {
  return (
    <>
      <h1 className="absolute top-8 left-8 text-4xl font-semibold">너무 긴 TailwindCSS</h1>
      <div className="grid grid-cols-2 w-full h-full">
        <div className="justify-self-center content-center">
          <button>버튼</button>
        </div>
        <div className="justify-self-center content-center">{/* <p>클래스 목록</p> */}</div>
      </div>
    </>
  );
}
