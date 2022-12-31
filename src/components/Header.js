import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  const [name, setName] = useState("");
  function handleChange(events) {
    setName(events.target.value);
  }
  console.log(name);
  return (
    <div className="Header">
      <h1 className="demoFont">The Entertainment Commynity</h1>
      <Link to={"/Search/" + name} className="link">
        <input
          className="search"
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Search"
        />
      </Link>
    </div>
  );
}
