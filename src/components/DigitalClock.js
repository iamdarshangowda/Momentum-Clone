import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function DigitalClock() {
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .slice(0, 5)
  );
  const [showBtn, setShowBtn] = useState(false);
  {
    /*const [timeFormat, setTimeFormat] = useState(false); */
  }

  {
    /* function handleTime() {
    setTimeFormat((prev) => !prev);
  }
*/
  }

  useEffect(() => {
    const timeId = setInterval(
      () =>
        setTime(
          new Date()
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })
            .slice(0, 5)
        ),
      1000
    );
    return function () {
      clearInterval(timeId);
    };
  });

  return (
    <div
      className="time-container"
      onMouseOver={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      <h1 className="time">{time}</h1>
      {/* Below Time Format to be implimented */}
      {/*  {showBtn && (
        <div className="clock-format">
          <button className="btn-clock" onClick={handleTime}>
            12hr/24hr
          </button>
        </div>
      )}  */}
    </div>
  );
}
