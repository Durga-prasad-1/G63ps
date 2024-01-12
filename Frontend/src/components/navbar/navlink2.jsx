import React,{ useState } from "react";
import { NavLink,useNavigate  } from "react-router-dom";
import Menu from "./menu";
import "./navbar.css"


function Navbar2(props){
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const navigate = useNavigate();
    function showPermission(){
        let show = document.querySelector("#permission");
        show.classList.remove("active1");
    }
    function notShowPermission(){
        let show = document.querySelector("#permission");
        show.classList.add("active1");
    }
    function nav(){
        notShowPermission();
        props.func(false) // changes the navbar
        navigate("/");
    }

    return(
        <div>
        <nav className="nav">
            <div className="nav__logo">Thyroid Detection</div>
                <ul className={
                showMediaIcons ? "nav__links mobile_menu_links" : "nav__links"
                }>
                <li className="link"><NavLink className="bb" to="/"  onClick={props.func(true)}>Home</NavLink></li>
                <li className="link"><NavLink className="bb" to="/about">About Us</NavLink></li>
                <li className="link"><NavLink className="bb" to ="/contact">Contact</NavLink></li>
                <li className="link" ><button className="btn" onClick={showPermission} >Logout</button></li>
                </ul>            
                <div className="show" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <Menu />               
                </div>                
        </nav>
        <div className="permission active1" id="permission">
            <div className="decisionMaking">
                <div className="hanuman">
                <h6>Are you sure you want to log out?</h6>
                <button style={{height:"20px",cursor:"pointer",backgroundColor:"white",border:"0"}} onClick={notShowPermission}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                </button>
                {/* <button>aut</button> */}
                </div>                
                <div className="yesOrNo">
                    <button className="butn" onClick={nav}>Yes</button>
                    <button className="butn" onClick={notShowPermission}>No</button>
                </div>
            </div>
            </div>                        
        </div>
    );
}

export default Navbar2;