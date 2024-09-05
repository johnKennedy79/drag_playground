// Photo by Richard Beatson on Unsplash
"use client";

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "../globals.css";
import shuffledImages from "@/src/app/jigsaw/cutups";
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
        style={{ height: "1560px", width: "1560px", padding: "10px" }}
      >
        {imageTiles.map((imageName, index) => (
          <Draggable key={index} grid={[5, 5]} bounds="parent">
            <div className="puzzletile">
              <Image
                src={`@/src/app/jigsaw/cutups/${imageName}`}
                alt={`Image ${index}`}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default App;
