import React,{ useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Menu from "./menu";
import "./navbar.css"


function Navbar(){
    const navigate = useNavigate();
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const scrollToDiv = () => {
        navigate('/');
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <nav className="nav">
            <div className="nav__logo">Thyro-Aid</div>
                <ul className={
                showMediaIcons ? "nav__links mobile_menu_links" : "nav__links"
                }>
                <li className="link"><NavLink className="bb" to="/" target="_parent">Home</NavLink></li>
                <li className="link " onClick={scrollToDiv}><span className="bb">About Us</span></li>
                <li className="link"><NavLink className="bb" to ="/contact">Contact</NavLink></li>
                
                <li className="link" ><NavLink to="/login"   target="_parent"><button className="btn" id="log">Log in</button></NavLink></li>
                
                <li className="link" ><NavLink to="/register"  target="_parent"><button className="btn">Register</button></NavLink></li>
                </ul>            
                <div className="show" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                
                    <Menu />
                
            </div>
        </nav>
    );
}

export default Navbar;