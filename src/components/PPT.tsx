"use client"
import Slide, { SlideData } from "@/components/Slide";
import { useState } from "react";
export default function PPT() {
  const [interactionArr, setInteractionArr] = useState([false, false, false]);
  const obj: SlideData = { type: 0, title: '11' };
  return (
    <>
      <Slide data={{ type: 0, title: "Set.prototype.has()는 왜 O(1)일까?", cell: 0 }} handle={setInteractionArr}>
      </Slide>
    </>
  )
}