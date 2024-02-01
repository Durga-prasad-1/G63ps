import React from "react";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../images/login.png";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/fireBase";
import google1 from "../images/search.png";

function Login(props){

    const navigate = useNavigate();

    const [user, setLogin] = useState({
        username: "",
        password: "",
        });

    const [showPassword, setShowPassword] = useState(false);
    
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
            setLogin({
            ...user,
            [name]: value,
            });
        };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
    
    /*login */
    const handleGoogleLogin = (e) =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(`credential ${credential}`)
        const token = credential.accessToken;
        // The signed-in user info.
        console.log(`token ${token}`);
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)'
        props.func(true);
        console.log(user.accessToken);
        localStorage.setItem('token',user.accessToken);
        // setTimeout(navigate('/'),4000);

        // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(`${errorCode} ${errorMessage} ${email} ${credential}`)
        // ...
        });

    }

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(user);
        try {
            const response = await fetch("http://localhost:5000/auth/login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data);
            if(response.ok){
                // alert(data.msg);
                localStorage.setItem('token',data.token);
                props.func(true);
                setLogin({username: "", password: ""});
                navigate('/?message=Login%20Successful');  // add query params to url to show the toastify msg
                
            }else{
                // alert(data.msg);
                toast.error(data.msg,{
                    position:"top-center"
                })
            }
        } catch (error) {
            console.log(error);
        }
    };


    function showPermission(){
        let show = document.querySelector("#permission1");
        show.classList.remove("active1");
    }

    function notShowPermission(){
        let show = document.querySelector("#permission1");
        show.classList.add("active1");
    }
    
    return(
        <div className="flexes">
            <img src={loginImg} alt="loginImage"  className="imagePos" />
        <div className="div_box" id="outerbox">
        <div id="top">
            <div className="div_box" id="Login"><Link to="/login" className="none">Login</Link></div>
            <div  id="Sign"><Link to="/register" className="none">Sign Up</Link></div>
        </div>
        <div  className="form div_box">
            <form onSubmit={handleLogin}>
                <div className="div_box" id="username">
                    <label htmlFor="name">Enter Username:</label>
                    <input id="user" className="putted" onChange={handleInput} type="text" placeholder="Username" name="username"/>
                </div>
                <div className="div_box" id="password">
                    <label htmlFor="pass">Enter Password:</label>
                    <input id="pass" className="putted" type={showPassword ? "text" : "password"} onChange={handleInput} placeholder="Password" name="password"/>
                </div>

                <div className="div_box" id="Showpass1">
                    <label htmlFor="showPass">
                    <input
                    type="checkbox"
                    id="showPass"
                    checked={showPassword}
                    onChange={handleTogglePassword}
                    />
                    Show Password
                    </label>
                </div>
                <a className="forgot" onClick={showPermission}>Forgot Me?</a>
                <button type="submit" id="login">Login</button>
                <div className="div_box" id="extra">------------------or sign in with-------------------</div>
                <ToastContainer/>
            </form>
        </div>
        <div className="div_box" id="bottom">
        <button className="google_button" onClick={handleGoogleLogin}><img className="login_google_img" src={google1}/> Google</button>
        </div>
    </div>

    <div className="permission1 active1" id="permission1">
            <div className="enter_mail">
                <div className="email_box">
                <h6>Enter your email ID ?</h6>
                <button style={{height:"20px",cursor:"pointer",backgroundColor:"white",border:"0"}} onClick={notShowPermission}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                </button>
                </div>                
                <div className="mail_btn">
                    <input placeholder="Eg: Rishi@gmail.com" className="login_mail" style={{ fontSize: '20px' }}/>
                    <button className="butn1">Submit</button>
                </div>
            </div>
            </div>

            
    </div>
    );

}
export default Login;
