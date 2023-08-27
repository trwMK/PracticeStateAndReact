import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Steps />
      {/* <Counter /> */}
    </div>
  );
}

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const [dateStr, setDateStr] = useState(0);

  function handleMinus() {
    setCounter((count) => count - props.stepValue);
  }

  function handlePlus() {
    setCounter((count) => count + props.stepValue);
  }

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    setDateStr(formattedDate);
  }, []);

  return (
    <>
      <div className="stepCon">
        <button onClick={handleMinus}>-</button>
        <h3>Counter: {counter}</h3>
        <button onClick={handlePlus}>+</button>{" "}
      </div>
      <div>
        <h3>{counter === 0 && `Hello, today's date is: ${dateStr}`}</h3>
        <h3>{counter < 0 && `${Math.abs(counter)} days before: ${dateStr}`}</h3>
        <h3>{counter > 0 && `${counter} days after: ${dateStr}`}</h3>
      </div>
    </>
  );
}

function Steps() {
  const [steps, setSteps] = useState(1); // Use useState to manage state
  return (
    <>
      <div className="stepCon">
        <button onClick={() => setSteps((step) => step - 1)}>-</button>
        <h3>Step: {steps}</h3>
        <button onClick={() => setSteps((step) => step + 1)}>+</button>
      </div>
      <Counter stepValue={steps} />
    </>
  );
}
