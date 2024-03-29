import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chief2 from "../Images/Cheif2.jpg";
import "./Faq.css";
import { faqData } from "./FaqData";

export default function Faq() {
  let [showans, setans] = useState(faqData[0].id);

  return (
    <>
      <Navbar />
      <div className="faq">
        <div className="photo">
          <img src={Chief2} alt="image" />
        </div>
        <div className="faq-text">
          <h3>Have question in your mind?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nihil, quidem libero hic molestiae expedita quaerat modi repellat
            perspiciatis cumque.
          </p>
          <div className="qa">
            {faqData.map((v, i) => {
              return (
                <>
                  <h3 onClick={() => setans(v.id)}>{v.ques}</h3>

                  <p className={showans === v.id ? "activeAns" : ""}>{v.ans}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
