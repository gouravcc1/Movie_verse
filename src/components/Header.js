import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
export default function Header() {
  const [name, setName] = useState('');
  
  function handleChange(events) {
    setName(events.target.value);
  }
  console.log(name);
  return (
    <div className="Header">
        <div className="homeicondiv">
      <Link to={"/"} className="link">  
      <FaHome  className="homeicon"/>
      </Link>
      </div>
      <h1 className="demoFont">The Entertainment Commynity</h1>
    
        <div className="search">
        <input
          className="search"
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Search"
        />
      <Link to={"/Search/" + name} className="link">
        <BsSearch className="icon" />
      </Link>
      </div>

    </div>
  );
}
