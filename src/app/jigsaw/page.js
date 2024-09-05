// Photo by Richard Beatson on Unsplash
"use client";

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./globals.css";
import shuffledImages from "./jigsaw/cutups";
import Image from "next/image";

const App = () => {
  const [imageTiles, setImageTiles] = useState([]);
  //Initialising imageTiles as an array holding the image_part filenames.

  useEffect(() => {
    setImageTiles(shuffledImages);
  }, []);
  //Assigning shuffledImages

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
                src={`./jigsaw/cutups/${imageName}`}
                alt={`Image ${index}`}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};
//Creating the container

export default App;
