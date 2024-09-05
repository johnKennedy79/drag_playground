"use client";

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "../globals.css";
import shuffledImages from "../components/shuffledImages";
import Image from "next/image";

const App = () => {
  const [imageTiles, setImageTiles] = useState([]);

  useEffect(() => {
    setImageTiles(shuffledImages);
  }, []);

  return (
    <div className="container">
      <h1>Puzzle</h1>
      <div
        className="puzzle-container"
        style={{ height: "780px", width: "780px", padding: "10px" }}
      >
        {imageTiles.map((imageName, index) => (
          <Draggable key={index} grid={[5, 5]} bounds="parent">
            <div className="puzzletile">
              <Image
                src={`/jigsaw/cutups/${imageName}`}
                alt={`Image ${index}`}
                width={195} // Set appropriate width
                height={195} // Set appropriate height
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default App;
