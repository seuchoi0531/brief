"use client";

import useSlideNavigation from "@/hooks/useSlideNavigation";

export default function OpeningPage() {
  useSlideNavigation();
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">TailwindCSS에서 동적 클래스 사용하기</h1>
    </main>
  );
}
