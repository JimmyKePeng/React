import React, { useState, useContext } from "react";
import { bgContext } from "../contexts/BackgroundColor";

function RandomColor() {
  // "#1BD1CF"
  // "RGB(11,119,22)"
  const [color, setColor] = useState("");
  const [HEX, setHEX] = useState(true);
  const { bgColor, setBgColor } = useContext(bgContext); // useContext to set color on different area

  function generateRandomColor(defaultHEX = HEX) {
    function getRandom(length) {
      return Math.floor(Math.random() * length);
    }
    const hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    if (defaultHEX) {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        let index = getRandom(hexNum.length);
        hexColor += hexNum[index];
      }
      setColor(hexColor);
      setBgColor(hexColor);
    } else {
      const R = getRandom(256);
      const G = getRandom(256);
      const B = getRandom(256);
      const RGB = `RGB(${R}, ${G}, ${B})`;
      setColor(RGB);
      setBgColor(RGB);
    }
  }
  return (
    <div className="h-50" style={{ background: color }}>
      <div className="flex justify-evenly mx-70" name="backgroundColor">
        <button
          className="btn"
          onClick={() => {
            setHEX(true);
            generateRandomColor(true);
          }}
        >
          Create HEX Color
        </button>
        <button
          className="btn"
          onClick={() => {
            setHEX(false);
            generateRandomColor(false);
          }}
        >
          Create RGB Color
        </button>
        <button className="btn" onClick={() => generateRandomColor(HEX)}>
          Generate Random Color
        </button>
      </div>
      <div className="flex justify-center flex-col items-center mt-10">
        <h1 className=" text-2xl text-white font-bold">
          {HEX ? "HEX Color" : "RBG Color"}
        </h1>
        <h1 className=" text-5xl text-white font-bold my-5">{color}</h1>
      </div>
    </div>
  );
}
export default RandomColor;
