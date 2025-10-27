"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useSlideNavigation() {
  const router = useRouter();

  // 여기서 마지막 슬라이드 번호 직접 정의
  const slideCnt = 23;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;

      e.preventDefault();
      const currentPath = window.location.pathname;

      if (currentPath === "/opening") {
        router.push("/slides/1");
        return;
      }

      if (currentPath === "/closing") return;

      const match = currentPath.match(/^\/slides\/(\d+)$/);
      if (match) {
        const currentNum = parseInt(match[1], 10);

        if (currentNum >= slideCnt) {
          router.push("/closing");
        } else {
          router.push(`/slides/${currentNum + 1}`);
        }
        return;
      }

      router.push("/opening");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);
}
