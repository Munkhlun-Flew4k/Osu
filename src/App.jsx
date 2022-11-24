import "./App.css";
import { React } from "react";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countback, setCountback] = useState(0);

  useEffect(() => {}, [count]);

  const handleClick = () => {
    document.getElementById("circle").style.left = Math.random() * 90 + "vw";
    document.getElementById("circle").style.top = Math.random() * 40 + "vw";
    setCount(count + 1);
  };
  const handleClick2 = () => {
    document.getElementById("circle2").style.left = Math.random() * 90 + "vw";
    document.getElementById("circle2").style.top = Math.random() * 40 + "vw";
    setCount(count + 1);
  };
  const handleClick3 = () => {
    document.getElementById("circle3").style.left = Math.random() * 90 + "vw";
    document.getElementById("circle3").style.top = Math.random() * 40 + "vw";
    setCount(count + 1);
  };
  const handleClick4 = () => {
    document.getElementById("circle4").style.left = Math.random() * 90 + "vw";
    document.getElementById("circle4").style.top = Math.random() * 40 + "vw";
    setCount(count + 1);
  };

  const handleClickback = () => {
    setCountback(countback + 1);
  };

  // if (count + countback === 100) {
  //   document.getElementById("circle").style.left = "49vw";
  //   document.getElementById("circle").style.top = "70vw";
  //   document.getElementById("circle2").style.left = "20vw";
  //   document.getElementById("circle2").style.top = "13vw";
  //   document.getElementById("circle3").style.left = "41vw";
  //   document.getElementById("circle3").style.top = "50vw";
  //   document.getElementById("circle4").style.left = "80vw";
  //   document.getElementById("circle4").style.top = "78vw";
  // }
  return (
    <div>
      <div id="something" onClick={handleClickback}></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 10,
          display: "flex",
          gap: 10,
        }}
      >
        <h1
          style={{
            color: "white",
            background: "green",
            fontSize: 50,
          }}
        >
          {count}
        </h1>
        <h1
          style={{
            color: "white",
            background: "red",
            fontSize: 50,
          }}
        >
          {countback}
        </h1>
      </div>
      <div id="circle" onClick={handleClick}></div>
      <div id="circle2" onClick={handleClick2}></div>
      <div id="circle3" onClick={handleClick3}></div>
      <div id="circle4" onClick={handleClick4}></div>
    </div>
  );
}

export default App;
