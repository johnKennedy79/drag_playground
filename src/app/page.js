"use client";
import Draggable from "react-draggable";
import "./globals.css";
import Clock from "./components/clock";
import CountDown from "./components/countDown";
import { useState } from "react";
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
    <main>
      <Draggable>
        <div>
          <CountDown />
        </div>
      </Draggable>
      <Draggable onDrag={handleDrag} {...dragHandlers}>
        <div>
          <p>
            x:{deltaPossition.x.toFixed(0)}, y:{deltaPossition.y.toFixed(0)}
          </p>
          <Clock />
        </div>
      </Draggable>
      <Draggable grid={[50, 50]}>
        <div className="tile">A</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">B</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">C</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">D</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">E</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">F</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">G</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">H</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">I</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">J</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">K</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">L</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">M</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">N</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">O</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">P</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">Q</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">R</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">S</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">T</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">U</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">V</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">W</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">X</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">Y</div>
      </Draggable>
      <Draggable grid={[10, 10]}>
        <div className="tile">Z</div>
      </Draggable>
    </main>
  );
}
