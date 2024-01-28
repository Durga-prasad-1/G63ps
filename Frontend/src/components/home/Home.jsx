import React from "react";
import "./style_home.css";
import about from "../images/about1.png"
import homePhoto from "../images/original.png";
import { Link } from "react-router-dom";
import Test from "../images/test.png"

function Home(props){
    function setNav(){
    props.func(true); // this is for navbar status 
    }
    return(
        <div>
    <div className="container body">
        
        
        <header className="header grided">
            <div className="content ">
            <h1><span>Get Quick</span><br />Results</h1>
            <p >
                {"Welcome to Thyroid Detection Center, a platform dedicated to providing personalized thyroid diagnosis. Our mission is to empower individuals by offering accurate predictions regarding various types of thyroid conditions based on user-provided information."} 
                <span style={{ fontSize: "medium", fontWeight: 900 }}> {"'Here, we've made thyroid detection easy and accurate.'"}</span>{" Imagine a place where science seamlessly combines with precision offering a breakthrough in healthcare. Start your journey today towards a better understanding of your thyroid health."}
            </p>
            </div>
            <div className="image">
            <span className="image__bg span"><img className="img" src={homePhoto} alt="fhv"/></span>
            </div>
            <div className="responsive_button">
            <Link to="/form" ><button className="form_button" onClick={setNav}>Form</button></Link>
            </div>
        </header>
        </div>
        <div className="about" id="about">
            <img src={about} alt="about" />
            <p>
                <span className="abt">ABOUT US</span>            
                We leverage advanced machine learning algorithms trained on comprehensive thyroid datasets to deliver insightful predictions. These sophisticated algorithms form the backbone of our platform, enabling us to provide users with invaluable predictions about potential thyroid conditions.
            </p>

            
        </div>
        <div className="test" id="test">
            <img src={Test} alt="test"/>
            <p>
                    <span className="tst">CONFUSED ABOUT TAKING THYROID TEST?</span>
                    Feeling hesitant? Many people have similar feelings when faced with medical tests. Your health is precious, and taking this step showcases your commitment to self-care. Remember to seek support from healthcare professionals who can guide you through this process with care and expertise.Here's a test that can provide valuable insight into your thyroid health.
            </p> 
            <Link to="/test"><button className="form_button" onClick={setNav}>Take Test</button></Link>
        </div>
        </div>

        );
    }
export default Home;   