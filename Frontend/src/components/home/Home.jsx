import React from "react";
import "./style_home.css";
import about from "../images/about1.png"
import homePhoto from "../images/original.png";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home(props){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
    // Parse the query parameter from the URL
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get('message');
    console.log(searchParams);
    console.log(message);
    if (message) {
      // Show toast with the message
        toast.success(message,{
            position:"top-center"
        });
        navigate('.', { replace: true }); // this is to remove query params from url
    }
    }, []);

    function setNav(){
     // this is for navbar status 
    }
    return(
        <div>
    <div className="container body">
        
        
        <header className="header">
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
            <Link to="/form" ><button className="form_button" onClick={setNav}>Form</button></Link>
            </div>
        </header>
        </div>
        <div className="aboutContainer" id="about">
            <div className="about content" >
                <img src={about} alt="about" />
                <div>
                <p>
                    <span className="abt">ABOUT US:</span>            
                    We leverage advanced machine learning algorithms trained on comprehensive thyroid datasets to deliver insightful predictions. These sophisticated algorithms form the backbone of our platform, enabling us to provide users with invaluable predictions about potential thyroid conditions.
                </p>
                </div>
            </div>
            <ToastContainer autoClose={3000}/> {/*this is for toast msg*/}
        </div>
        </div>

        );
    }
export default Home;