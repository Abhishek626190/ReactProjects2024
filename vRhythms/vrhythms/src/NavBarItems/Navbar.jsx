import React from "react";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
// import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Import the desired icon
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li className="vRhythms">
             <Link to={"/"}>vRhythms</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/approach"}>Approach</Link>
          </li>
          <li>
            <Link to={"/insights"}>Insights</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact </Link>
          </li>
          <li>
            <Link to={"/carrier"}>Carrier</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
