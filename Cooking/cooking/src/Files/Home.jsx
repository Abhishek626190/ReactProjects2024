import React from "react";
import Navbar from "./Navbar";
import "./Home.css"
import GirlImage from "../Images/GirlImage.png"
import Footer from "./Footer";
import About from "./About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="div1">
        <h4>SMART COOKERS</h4>
        <h2>BEST COOKING TOOLS</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, natus.</p>
        <button>Explore us</button>
        </div>
        <div className="div2">
           <img src={GirlImage}>
           </img>
        </div>
      </div>
      {/* <About/> */}
      <Footer/>
    </>
  );
}
