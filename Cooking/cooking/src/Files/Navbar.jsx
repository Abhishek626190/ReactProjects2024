import React from "react";
import "./Navbar.css";
// import ChiefCap from '../Images/ChiefCap.png';
import Chief from "../Images/Chief.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="title">
          <h3>SMART </h3>
          <img src={Chief} alt="ChiefCap" />
          <h3> COOKING</h3>
        </div>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/products"}>PRODUCTS</Link>
          </li>
          <li>
            <Link to={"/review"}>REVIEW</Link>
          </li>
          <li>
            <Link to={"/faq"}  >
              FAQ
            </Link>
          </li>
          <li>
            <Link to={"/contact"}  >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
