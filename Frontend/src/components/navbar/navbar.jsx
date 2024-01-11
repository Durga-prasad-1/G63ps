import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./menu";
import "./navbar.css"


function Navbar(){
    const [showMediaIcons, setShowMediaIcons] = useState(false);


    return(
        <nav className="nav">
            <div className="nav__logo">Thyroid Detection</div>
            <ul className={
            showMediaIcons ? "nav__links mobile_menu_links" : "nav__links"
            }>
            <li className="link"><NavLink className="bb" to="/" target="_parent">Home</NavLink></li>
            <li className="link"><NavLink className="bb" to="/about">About Us</NavLink></li>
            <li className="link"><NavLink className="bb" to ="/contact">Contact</NavLink></li>
            
            <li className="link" ><NavLink to="/login"   target="_parent"><button className="btn" id="log">Log in</button></NavLink></li>
            
            <li className="link" ><NavLink to="/register"  target="_parent"><button className="btn">Register Now</button></NavLink></li>
            </ul>            
            <div className="show" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            
                <Menu />
            
          </div>
        </nav>
    );
}

export default Navbar;