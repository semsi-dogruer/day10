import { useState } from "react";

export default function RaceCar() {
  const [carPosition, setCarPosition] = useState(0);

  function handleKeyPress(e) {
    if (e.key === "ArrowLeft") {
      setCarPosition(carPosition - 5);
    } else if (e.key === "ArrowRight") {
      setCarPosition(carPosition + 5);
    }
  }
  return (
    <div>
      <h1>Race</h1>
      <p>Move car to the right by pressing the right arrow</p>
      <p
        tabIndex='0'
        id='car'
        onKeyDown={handleKeyPress}
        style={{ marginLeft: carPosition + "px" }}>
        🏎
      </p>
    </div>
  );
}
