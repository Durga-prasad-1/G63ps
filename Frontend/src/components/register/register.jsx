import React from "react";
import "./register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../images/discuss2.png"
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
            const response = await fetch("http://localhost:5000/auth/register", {
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
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

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
            {/* <p className="titles">Username</p> */}
            {/* <input type="text"  name="username" className="input_box" value={user.username} onChange={handleInput} placeholder="Enter username" required/> */}
            <FormControl sx={{ width: '120%', height:'70%'}} >
            <InputLabel htmlFor="outlined-adornment-password" className="box3">Create Username</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                name="username"
                value={user.username}
                onChange={handleInput}
                className="box3"
                endAdornment={
                <InputAdornment position="end"></InputAdornment>
                }
                label="Create Username"
            />
            </FormControl>

            {/* <p className="titles">Email address</p> */}
            {/* <input type="email" name="email" className="input_box" value={user.email} onChange={handleInput} placeholder="Enter Email address" required/> */}

            <FormControl sx={{ width: '120%', height:'70%'}}>
            <InputLabel htmlFor="outlined-adornment-password" className="box4">Email address</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type='email'
                className="box4"
                name="email"
                value={user.email}
                onChange={handleInput}
                endAdornment={
                <InputAdornment position="end"></InputAdornment>
                }
                label="Email address"
            />
            </FormControl>

            {/* <p className="titles">Password</p> */}
            {/* <input type="password" name="password" className="input_box" value={user.password} onChange={handleInput} placeholder="Enter password" required/> */}

            <FormControl sx={{width: '120%', height:'70%'}}>
            <InputLabel htmlFor="outlined-adornment-password" className="box4">Enter password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword1 ? 'text' : 'password'}
                name="password"
                className="box4"
                onChange={handleInput}
                value={user.password}
                endAdornment={
                <InputAdornment position="end" >
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    edge="end"
                    >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Enter password"
            />
            </FormControl>

            {/* <p className="titles">Confirm password</p> */}
            {/* <input type="password" name="confirmPassword" className="input_box" value={user.confirmPassword} onChange={handleInput} placeholder="Re-enter your password" required/> */}

            <FormControl sx={{width: '120%', height:'70%'}}>
            <InputLabel htmlFor="outlined-adornment-password">Re-enter your password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword2 ? 'text' : 'password'}
                name="confirmPassword"
                onChange={handleInput}
                // className="box3"
                value={user.confirmPassword}
                endAdornment={
                <InputAdornment position="end" >
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    edge="end"
                    >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Re-enter your password"
            />
            </FormControl>

            <button type="submit" id="reg">Register</button>
        </div>
        </div>
        </form>
        {/* <ToastContainer autoClose={3000} limit={1}/> */}

        </div>
    );
};
export default Register;
