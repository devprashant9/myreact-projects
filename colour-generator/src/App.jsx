import {React, useState} from 'react'

export default function App() {
  const [colourType, setColourType] = useState("HEX");
  const [colour, setColour] = useState("#000000");

  function generateRandomColour(length){
    return(Math.floor(Math.random() * length));
  }
  function generateHEX() {
    const codeHEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colourHEX = "#";

    for(let i = 0; i < 6; i++){
      colourHEX += codeHEX[generateRandomColour(codeHEX.length)];
    }

    setColour(colourHEX)
  }

  function generateRGB() {
    let r = generateRandomColour(256);
    let g = generateRandomColour(256);
    let b = generateRandomColour(256);

    // console.log(`rgb(${r},${g},${b})`);
    setColour(`rgb(${r},${g},${b})`);
  }
  return (
    <>
      <div className="container" style={{backgroundColor: colour}}>
        <button onClick={() => setColourType("HEX")}>Click to Choose HEX</button>
        <button onClick={() => setColourType("RGB")}>Click to Choose RGB</button>
        <button onClick={colourType === "HEX" ? generateHEX : generateRGB}>Generate</button>
      </div>
      <div className='display'>
        <h3>{colourType === "HEX" ? " " : ""}</h3>
        <h1>{colour}</h1>
      </div>
    </>
  )
}
