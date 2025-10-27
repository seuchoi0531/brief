import Link from "next/link";

export default function Slide19() {
  return (
    <>
      <h1 className="absolute top-8 left-8 text-4xl font-semibold">동적 클래스 사용 금지</h1>
      <div className="w-full h-full flex justify-center items-center">
        <Link href="https://tailwindcss.com/docs/detecting-classes-in-source-files#dynamic-class-names" target="_blank" rel="noopener noreferer">
          TailwindCSS Docs
        </Link>
      </div>
    </>
  );
}
