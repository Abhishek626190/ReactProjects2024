import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <hr />
      <div className="footer">
        <div>
          <h2>Contact us</h2>
          <p>Street name,omuk state</p>
          <p>1234 , Tomuk Area</p>
          <p>Uganda</p>

          <p>
             
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"10px"}} />
            support@smart-cookers.com
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          <p>About</p>
          <p>Product</p>
          <p>Review</p>
          <p>Faq</p>
          <p>Contact</p>
        </div>
        <div>
          <h2>Help & Info</h2>
          <p>FAQ</p>
          <p>Term & Condition</p>
          <p>Return Policy</p>
          <p>Return & Exchange</p>
          <p>Return Centre</p>
        </div>
        <div>
          <h2>Follow us</h2>
          <p>We are available in social media</p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: "10px" }} />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ marginLeft: "10px" }}
            />
          </p>
        </div>
      </div>
      <hr />

      <div className="last">
        <p>@smartcookers.com 2020 | All rights reserved</p>
      </div>
    </>
  );
}
