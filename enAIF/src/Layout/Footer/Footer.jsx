import React from "react";
import "./Footer.scss";
import enai from "../../assets/logo2.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="top-left">
          <img src={enai} alt="" />
          <p>Earn up to 30% Lifetime Commission as an Affiliate!</p>
          <button>Button</button>
        </div>
        <div className="top-right">
          <h3>CONTACTS</h3>
          <p>Give your suggestions and comments for further development of the site</p>
          <a href="mailto: elipenahov04@gmail.com">elipenahov04@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-left">
          <p>
            © 2023 EnAI. Created by <a href="https://www.instagram.com/huz3yn/">Huz3yn.</a>
          </p>
        </div>
        <div className="bottom-right">
          <InstagramIcon className="social-icon" />
          <WhatsAppIcon className="social-icon" />
          <YouTubeIcon className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
