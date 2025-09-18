"use client";
import Slide, { SlideData } from "@/components/Slide";
import { useState, useEffect } from "react";

export default function PPT() {
  const slides: SlideData[] = [
    { type: 0, title: "Set.prototype.has()는 왜 O(1)일까?", cell: 0 },
    { type: 1, title: "aaaaaaaaaaa", cell: 0 },
    { type: 1, title: "bbbbbbbbbbb", cell: 0 },
    { type: 2, title: "감삼당~", cell: 0 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  return <Slide data={slides[currentIndex]} handle={() => {}} />;
}
