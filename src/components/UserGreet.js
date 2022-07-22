import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";

export default function UserGreet() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [isName, setIsName] = useState(name ? true : false);
  const [isEdit, setIsEdit] = useState(false);
  const [greet, setGreet] = useState("");

  const handleUserName = (e) => {
    e.preventDefault();
    setIsName(true);
    JSON.stringify(localStorage.setItem("name", name));
  };

  useEffect(() => {
    const hrs = new Date().getHours();
    if (hrs < 12) {
      setGreet("Good Morning");
    } else if (hrs >= 12 && hrs <= 17) {
      setGreet("Good Afternoon");
    } else if (hrs >= 17 && hrs <= 24) {
      setGreet("Good Evening");
    }
  }, []);

  if (isName) {
    return (
      <div
        className="greet-container"
        onMouseEnter={(e) => setIsEdit(true)}
        onMouseLeave={(e) => setIsEdit(false)}
      >
        <h1 className="greet">
          {greet}, {name}
        </h1>
        {isEdit && (
          <span className="username-edit" onClick={() => setIsName(false)}>
            <GrEdit style={{ fontSize: 18 }} />
          </span>
        )}
      </div>
    );
  } else {
    return (
      <div className="greet-container">
        <h1 className="greet">Enter your name</h1>
        <form onSubmit={handleUserName}>
          <input
            type="text"
            required
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
