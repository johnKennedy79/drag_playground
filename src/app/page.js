"use client";
import Draggable from "react-draggable";
import "./globals.css";
import Clock from "./components/clock";
import CountDown from "./components/countDown";
import { useState } from "react";
import AxisX from "./components/axisx";
import AxisY from "./components/axisy";
import Link from "next/link";
import NavBar from "./components/navBar";
export default function Home() {
  const [activeDrags, SetactiveDrags] = useState(0);
  const [deltaPossition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [controledPosition, setControledPosition] = useState({
    x: -400,
    y: 200,
  });
  const eventHandler = (e, data) => {
    console.log("Event Type", e.type);
    console.log({ e, data });
  };
  const handleDrag = (e, ui) => {
    console.log(ui.deltaX);
    setDeltaPosition((prev) => ({
      x: prev.x + ui.deltaX,
      y: prev.y + ui.deltaY,
    }));
  };
  const onStart = () => {
    SetactiveDrags((prev) => prev + 1);
  };
  const onStop = () => {
    SetactiveDrags((prev) => prev - 1);
  };
  const dragHandlers = { onStart, onStop };
  return (
    <main className="homePage">
      <nav>
        <NavBar />
      </nav>
      <div className="timeContainer">
        <div style={{ width: "300px" }}>
          <Draggable handle="handle" bounds="main">
            <div>
              <handle className="handle">handle</handle>
              <CountDown />
            </div>
          </Draggable>
        </div>

        <div style={{ width: "200px" }}>
          <Draggable handle="handle" onDrag={handleDrag} {...dragHandlers}>
            <div>
              <div className="clockHead">
                <p>
                  x:{deltaPossition.x.toFixed(0)}, y:
                  {deltaPossition.y.toFixed(0)}
                </p>
                <handle>
                  <div className="handle">handle</div>
                </handle>
              </div>
              <Clock />
            </div>
          </Draggable>
        </div>
      </div>

      <Draggable
        axis="x"
        bounds={{ top: -100, left: -0, right: 500, bottom: 100 }}
      >
        <div
          className="dragx"
          style={{ position: "absolute", bottom: "500px", left: "40px" }}
        >
          <AxisX />
        </div>
      </Draggable>
      <Draggable
        axis="y"
        bounds={{ top: -0, left: -100, right: 100, bottom: 500 }}
      >
        <div
          className="dragy"
          style={{ position: "absolute", bottom: "320px", left: "10px" }}
        >
          <AxisY />
        </div>
      </Draggable>
    </main>
  );
}
