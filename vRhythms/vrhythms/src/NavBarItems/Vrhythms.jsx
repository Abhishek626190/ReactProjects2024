import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Vrhythms.css";

export default function Vrhythms() {
  return (
    <>
      <Navbar />
      <div className="main">
        <p className="para">
          You want to increase productivity to strengthen global
          competitiveness. You may want to take advantage of international
          talent pool, diversify geographic risks, and reduce costs.
        </p>
        <p className="para1">
          vRhythms is a global provider of software solutions, and information
          technology integration. vRhythms helps you to provide innovative
          software solutions to your customers through quick turnaround time. Our
          expertise across technology matrix allows us to be objective when it
          comes to creating solutions that fit our client's requirements. With
          agile development and collaborative process, we help you in creating
          value as quickly as possible, thereby improving your bottom line.
        </p>
      </div>
      <Footer />
    </>
  );
}
