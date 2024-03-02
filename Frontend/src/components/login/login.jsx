import React from "react";
import "./login.css";
import { useState,useEffect } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import loginImg from "../images/login.png";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/fireBase";
import google1 from "../images/search.png";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Login(props){
    const navigate = useNavigate();
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const message = searchParams.get('message');
    useEffect(() => {
        
        // Parse the query parameter from the URL
        
        console.log(searchParams);
        console.log(message);
        if (message=="Registration Successful") {
          // Show toast with the message
            toast.success(message,{
                position:"top-center"
            });
        }
        else{
            toast.info(message,{
                position:"top-center"
            });
        }
        navigate('.', { replace: true }); // this is to remove query params from url
        }, []);
    
    const [user, setLogin] = useState({
        username: "",
        password: "",
        });

    //forgot password
    const [forgotMail,setMail] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    
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
        navigate('/?message=Login%20Successful');

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
            const response = await fetch("https://thyro-aid.onrender.com/auth/login",{
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

    // this is for show forgot password display
    function showPermission(){
        let show = document.querySelector("#permission1");
        show.classList.remove("active1");
    }

    function notShowPermission(){
        let inputValue = document.querySelector("#bfg");
        inputValue.value = "";
        let show = document.querySelector("#permission1");
        show.classList.add("active1");
    }

    function emailSent(event){
        let show = document.querySelector("#permission1");
        show.classList.add("active1");
        // the event is for button but i need to check for input so previousElement is used
        
        console.log(forgotMail); // this forgotMail is from the useState
        if (forgotMail === ""){
            toast.warn("You didn't enter the email",{
                position:"top-center"
            });
        }
        else{
            toast.success("Link is sent to your mail",{
                position:"top-center"
            });
        }
        
        let inputValue = document.querySelector("#bfg");
        inputValue.value = "";  // this is for default text value is empty
    }

    const handleClickShowPassword1 = () => setShowPassword((show) => !show);

    const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword2 = () => setShowPassword((show) => !show);

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    // this is for handle forgot mail
    function handleSetMail(event){
        setMail(event.target.value);
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
                    {/* <label htmlFor="name">Enter Username:</label> */}
                    {/* <input id="user" className="putted" onChange={handleInput} type="text" placeholder="Username" name="username"/> */}

                    <FormControl sx={{ width: '120%', height:'40%'}}>
          <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
            name="username"
            onChange={handleInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Username"
          />
        </FormControl>

                </div>
                <div className="div_box" id="password">
                    {/* <label htmlFor="pass">Enter Password:</label> */}
                    {/* <input id="pass" className="putted" type={showPassword ? "text" : "password"} onChange={handleInput} placeholder="Password" name="password"/> */}

                    <FormControl sx={{width: '110%', height:'40%'}}>
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleInput}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>        


                </div>

                {/* <div className="div_box" id="Showpass1">
                    <label htmlFor="showPass">
                    <input
                    type="checkbox"
                    id="showPass"
                    checked={showPassword}
                    onChange={handleTogglePassword}
                    />
                    Show Password
                    </label>
                </div> */}

                <div className="div_box" id="Remember">
                    <label htmlFor="rem">
                        <input type="radio" className="putted" id="rem"/>Remember me
                    </label>
                </div>

                <a className="forgot" onClick={showPermission}>Forgot Me?</a>
                <button type="submit" id="login">Login</button>
                <div className="div_box" id="extra">------------------or sign in with-------------------</div>
            </form>
        </div>
        <div className="div_box" id="bottom">
        <button className="google_button" onClick={handleGoogleLogin}><img className="login_google_img" alt="googlePic" src={google1}/> Google</button>
        </div>
    </div>

    <div className="permission1 active1" id="permission1">
        <form onSubmit={emailSent}>
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
                    <input name="forgotMail" type="email" placeholder="Eg:abc123@gmail.com" id="bfg" className="login_mail" onChange={handleSetMail}  />
                    <button className="butn1" type="submit">Submit</button>
                </div>
            </div>
            </form>
            </div>

            
    </div>
    );

}
export default Login;
