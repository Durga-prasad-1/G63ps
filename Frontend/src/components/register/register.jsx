import React from "react";
import "./register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../images/discuss2.png"
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch("https://thyro-aid.onrender.com/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            //console.log("register data : ", response);
            const data = await response.json();
            if (response.ok) {
                //const responseData = await response.json();
                // alert(data.msg);
                setUser({ username: "", email: "", password: "", confirmPassword: ""});
                navigate('/login?message=Registration%20Successful');
            } else {
                toast.error(data.msg,{
                    position:"top-center"
                })
                //console.log(response.json());
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    return(
        <div className="flex">
            
            <img src={registerImg} className="imgFix" alt="discussion"  />

            <form onSubmit={handleSubmit}>
        <div className="main">
        <div className="panel">
            <div className="login" ><Link to="/login" style={{textDecoration: "none", color: "white"}}>Login</Link></div>
            <div className="sign"><Link  to="/register" style={{textDecoration: "none", color: "black"}}>Sign up</Link></div>
        </div>
        <div className="inputs">
            <p className="titles">Username</p>
            <input type="text"  name="username" className="input_box" value={user.username} onChange={handleInput} placeholder="Enter username" required/>
            <p className="titles">Email address</p>
            <input type="email" name="email" className="input_box" value={user.email} onChange={handleInput} placeholder="Enter Email address" required/>
            <p className="titles">Password</p>
            <input type="password" name="password" className="input_box" value={user.password} onChange={handleInput} placeholder="Enter password" required/>
            <p className="titles">Confirm password</p>
            <input type="password" name="confirmPassword" className="input_box" value={user.confirmPassword} onChange={handleInput} placeholder="Re-enter your password" required/>
            <button type="submit" id="reg">Register</button>
        </div>
        </div>
        </form>
        {/* <ToastContainer autoClose={3000} limit={1}/> */}

        </div>
    );
};
export default Register;
