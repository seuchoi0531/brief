import { SlideProp } from "./Slide";

export default function ClosingSlide({ data, handle, children }: SlideProp) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-5xl font-extrabold">{data.title}</h1>
    </div>
  );
}
