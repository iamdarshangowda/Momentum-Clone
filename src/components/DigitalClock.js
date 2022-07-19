import React, { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5));

  useEffect(() => {
    const timeId = setInterval(
      () => setTime(new Date().toLocaleTimeString().slice(0, 5)),
      1000
    );
    return function () {
      clearInterval(timeId);
    };
  });

  return (
    <div className="time-container">
      <h1 className="time">{time}</h1>
    </div>
  );
}
