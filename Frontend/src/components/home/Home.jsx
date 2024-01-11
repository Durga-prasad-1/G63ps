import React from "react";
import "./style_home.css";
import homePhoto from "../images/original.png";
import { Link } from "react-router-dom";


function Home(){
    return(
    <div className="container body">
        
        
        <header className="header grided">
            <div className="content ">
            <h1><span>Get Quick</span><br />Results</h1>
            <p >
                {"Step into a world where advanced medical technology meets simplicity, unlocking a remarkable achievement:"} 
                <span style={{ fontSize: "medium", fontWeight: 900 }}> {"'Here, we've made thyroid detection easy and accurate.'"}</span>{" Imagine a place where science seamlessly combines with precision offering a breakthrough in healthcare. This is where the once complicated task of thyroid detection becomes straightforward, bringing a new level of simplicity and reliability to the forefront of medical advancements."}
            </p>
            </div>
            <div className="image">
            <span className="image__bg span"><img className="img" src={homePhoto} alt="fhv"/></span>
            </div>
            <div className="responsive_button">
            <Link to="/form" target="_blank"><button className="form_button">Form</button></Link>
            </div>
        </header>
        
        </div>

        );
    }
export default Home;