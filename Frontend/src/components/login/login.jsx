import React from "react";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../images/login.png";
import { jwtDecode } from "jwt-decode"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/fireBase";

function Login(props){

    const navigate = useNavigate();

    const [user, setLogin] = useState({
        username: "",
        password: "",
        });

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
            setLogin({
            ...user,
            [name]: value,
            });
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
        navigate("/");

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
                alert(data.msg);
                localStorage.setItem('token',data.token);
                props.func(true);
                setLogin({username: "", password: ""});
                navigate("/");
            }else{
                alert(data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    };



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
                    <input id="pass" className="putted" type="password" onChange={handleInput} placeholder="Password" name="password"/>
                    <i className="fa fa-lock"></i>
                </div>

                <div className="div_box" id="Remember">
                    <label htmlFor="rem">
                        <input type="radio" className="putted" id="rem"/>Remember me
                    </label>
                </div>
                <a className="forgot" href="#">Forgot Me?</a>
                <button type="submit" id="login">Login</button>
                <div className="div_box" id="extra">------------------or sign in with-------------------</div>
            </form>
        </div>
        <div className="div_box" id="bottom">
        <button onClick={handleGoogleLogin}>sign in</button>
        </div>
    </div>
    </div>
    );

}
export default Login;
