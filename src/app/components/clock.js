"use client";
import { useState } from "react";
import "@/app/globals.css";

export default function Clock() {
  let time = new Date().toLocaleTimeString();
  const [currTime, setCurrTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="clock">
      <h1 suppressHydrationWarning>{currTime}</h1>
    </div>
  );
}
