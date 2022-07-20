import React, { useState } from "react";

export default function UserGreet() {
  const [name, setName] = useState(
    JSON.stringify(localStorage.getItem("name")) | "Darshan"
  );
  const [isName, setIsName] = useState(false);

  if (isName) {
    return (
      <div className="greet-container">
        <h1 className="greet">Good evening, {name}</h1>
      </div>
    );
  } else {
    return (
      <div className="greet-container">
        <h1 className="greet">Enter your name</h1>
        <input
          type="text"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
  }
}
