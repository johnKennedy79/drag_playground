"use client";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "../globals.css";
import NavBar from "../components/navBar";

const randomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters.charAt(Math.floor(Math.random() * letters.length));
};

const App = () => {
  const [letters, setLetters] = useState([]);

  const generateRandomLetters = () => {
    const newLetters = Array.from({ length: 15 }, randomLetter);
    setLetters(newLetters);
  };

  return (
    <div className="container">
      <NavBar />
      <h1>Fridge Magnets</h1>
      <button onClick={generateRandomLetters} className="generate-btn">
        Generate Letters
      </button>

      <div
        className="letters-container"
        style={{ height: "500px", width: "500px", padding: "10px" }}
      >
        {letters.map((letter, index) => (
          <Draggable key={index} grid={[10, 10]} bounds="parent">
            <div className="tile">{letter}</div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default App;
