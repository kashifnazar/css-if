import { useEffect, useRef, useState } from "react";
import "./styles.css";

const signals = ["stop", "ready", "go"];

function TrafficLight() {
  const [state, setState] = useState(0);

  const nextLight = () => {
    setState((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    setTimeout(nextLight, 1000);
  }, [state]);

  return (
    <div className="App">
      <div className={["main", "state"].join(" ")}>
        <div className="light red" data-state={signals[state]}></div>
        <div className="light orange" data-state={signals[state]}></div>
        <div className="light green" data-state={signals[state]}></div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}
