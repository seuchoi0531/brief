"use client";

import useSlideNavigation from "@/hooks/useSlideNavigation";

export default function ClosingPage() {
  useSlideNavigation();
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">감삼동~</h1>
    </main>
  );
}
