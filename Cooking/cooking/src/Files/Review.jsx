import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Review.css";
import jan21_11 from "../Images/jan21_11.jpg";
import { data } from "./ReviewData";

export default function Review() {
  let cusrev = data.map((v, i) => {
    return (
      <>
        <div className="customer">
          <div className="photos">
            <img src={v.image} alt="image"   />
          </div>
          <div className="text">
            <h6>
              {v.review}
            </h6>
            <h5>{v.name}</h5>
            <p>{v.expert} </p>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <Navbar />
      <div className="review">
        <h3>What customer says about us ?</h3>
        <p>105 Review with 5 star rating</p>
      </div>
      <div className="customers">
        {cusrev}
      </div>

      <Footer />
    </>
  );
}
