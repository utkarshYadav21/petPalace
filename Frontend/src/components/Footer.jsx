import React from "react";
import "../css/Footer.css";
import { Link} from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-top">
        <div className="footer-top-left">
          <h4 className="footer-head">Pet Palace</h4>
          <p className="footer-left-content">
            One of the best place in india to adopt pets. Take a pledge with us
            to take of these lonely pets.
          </p>
          <button className="footer-adopt-btn"><Link to="/donate">Donate Now</Link></button>
        </div>
        <div className="footer-top-center">
          <h3>Get In Touch</h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <IoLocationSharp />
            <p>Indian Institute of Information Technology-177209</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <IoMdMail />
            <p>utkarshyadav329@gmail.com</p>
          </div>
          <p style={{ marginTop: "5px" }}>Follow Us</p>
          <div style={{ display: "flex", marginTop: "8px", gap: "10px" }}>
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="footer-top-right">
          <h3>Quick Links</h3>
          <a>Home</a>
          <a>Adopt</a>
          <a>Giveaway</a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Pet Palace. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
