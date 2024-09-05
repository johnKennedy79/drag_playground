"use client";

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "../globals.css";
import shuffledImages from "../components/shuffledImages";
import Image from "next/image";
import NavBar from "../components/navBar";

const App = () => {
  const [imageTiles, setImageTiles] = useState([]);

  useEffect(() => {
    setImageTiles(shuffledImages);
  }, []);

  return (
    <div className="container">
      <NavBar />
      <h1>Puzzle</h1>
      <main
        className="puzzle-box"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          className="puzzle-container"
          style={{
            width: "780px",
            height: "780px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 195px)",
            gap: "10px",
          }}
        >
          {imageTiles.length > 0 ? (
            imageTiles.map((imageName, index) => (
              <Draggable key={index} grid={[5, 5]} bounds="main">
                <div className="puzzletile">
                  <Image
                    src={`/cutups/${imageName}`}
                    alt={`Image ${index}`}
                    width={195}
                    height={195}
                  />
                </div>
              </Draggable>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
