import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Utensil2 from "../Images/Utensil2.png";
import { items } from "./ProductData";

export default function Products() {
  let item = items.map((v, i) => {
    return (
      <div className="product1">
        <p>
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faHeart} />
        </p>

        <img src={v.image} alt="imag" />
        <div className="price">
          <h4>{v.item}</h4>
          <p>
            <del>{v.orgPrice}</del>
          </p>
          <p>{v.disPrice}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <Navbar />
      <div className="products-content">
        <h1>Featured Products</h1>
      </div>
      <div className="para">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint
          repudiandae sequi fuga ipsam, dolorum a eveniet dolores ad officiis!
        </p>
      </div>
      <div className="products">{item}</div>

      <Footer />
    </>
  );
}
