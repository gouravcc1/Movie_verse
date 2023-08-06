import React, { useState,useEffect } from "react";
import "./Header.css";
import { Link , useNavigate} from "react-router-dom";
import { BsBackspace, BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
export default function Header() {
  const [name, setName] = useState("");
  const navigate = useNavigate()


  function handleChange(events) {
    setName(events.target.value);
  }
  useEffect(() => {
      if (name !== "") {
        navigate("/Search/" + name);
      }else{
        navigate("/");

    }
  }, [name, navigate]);
  console.log(name);
  return (
    <div className="Header">
      <div className="homeicondiv">
        <Link to={"/"} className="link">
          <FaHome className="homeicon" />
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
        {/* <Link to={"/Search/" + name} className="link">
        </Link> */}
        {/* <BsSearch className="icon" /> */}
      </div>
    </div>
  );
}
