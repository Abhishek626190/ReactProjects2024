import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 vRhythms Software Private Limited</p>
      <p>Contact us: vRhythms@gmail.com</p>
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faFacebook} style={{marginLeft:'10px'}}  />

    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
