// Footer.js
import React from "react";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_container">        
      <div>
        <h1>Thyro-Aid:</h1>
        <p className="tagline">Your Thyroid Detector</p>
      </div>

        <div className="main2">
          <p className="matter1">Follow Us</p>
          <div className="icons1">
            <FacebookIcon />
            <InstagramIcon />
             <YouTubeIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="phone">    
          <p className="matter1">Call Us</p>
          <a>123-456-7899</a>      
        </div>         
      </div>
      <hr />
    
      <div className="last">
      <p>&copy; {currentYear} Thyroid Detection. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;

