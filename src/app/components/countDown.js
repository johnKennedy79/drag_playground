import "./countDown.css";
import { useState, useEffect } from "react";
const countDown_target = new Date("2024-09-06T09:00:00");
const getTimeLeft = () => {
  const totalTimeLeft = countDown_target - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const min = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const sec = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hrs, min, sec };
};

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="countdown">
        <h1>Count Down</h1>
        <div className="content">
          {Object.entries(timeLeft).map((el) => {
            const label = el[0];
            const value = el[1];
            return (
              <div className="box" key={label}>
                <div className="value">
                  <span>{value}</span>
                </div>
                <span className="label">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
