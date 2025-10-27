import Link from "next/link";

export default function Slide20() {
  return (
    <>
      <h1 className="absolute top-8 left-8 text-4xl font-semibold">TailwindCSS 동작 방식 - base</h1>
      <div className="grid grid-cols-2 grid-rows-1 w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-5xl">base</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link className="font-bold text-xl" href="https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css" target="_blank" rel="noopener noreferer">
            Modern-Normalize
          </Link>
          <Link className="font-bold text-xl" href="https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/preflight.css" target="_blank" rel="noopener noreferer">
            Preflight
          </Link>
        </div>
      </div>
    </>
  );
}
