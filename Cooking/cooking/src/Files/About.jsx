import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./About.css";
import Chief2 from '../Images/Cheif2.jpg'
export default function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="photo">
          <img src={Chief2}></img>
        </div>
        <div className="content"> 
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            soluta eveniet hic qui sunt illum sit quae dicta impedit totam
            tempore vitae fugit consectetur, eaque facere fugiat. Voluptatibus,
            facilis voluptate?
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
