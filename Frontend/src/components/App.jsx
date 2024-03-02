import React,{useState} from "react";
import Form from "./forms/Form";
import Login from "./login/login";
import Navbar from "./navbar/navbar"
import Home from "./home/Home";
import Contact from "./contact/contact";
import Register from "./register/register";
import Profile from "./profile/profile";
import Navbar2 from  "./navbar/navlink2";
import ThyroidTestForm from "./test/test";
import ResetPassword from "./resetPassword/resetpassword";
import Report from "./outputPage/output";
import {
    BrowserRouter as Router,
    Route,
    Routes
    } from "react-router-dom";
    import { ToastContainer } from "react-toastify";


function App(){
    const [setNav,handleNav] = useState(false);
    // handleNav(setNav);
    let kk = "";
    kk = localStorage.getItem('token');
    // console.log(kk);
    // console.log(jwtDecode(kk));
    const [googleProfile,handleGoogle] = useState(null);
    return(
        
            
        <Router>
            <div style={{'position':'sticky', 'top':0 ,'zIndex':80 }}>
            {kk||setNav ?<Navbar2 set={setNav} func={handleNav} googleProfile={googleProfile} googlefunc={handleGoogle}/>:<Navbar/>} {/**kk for token and setNav for first time navbar change */}
            </div>
            <Routes>
                
            <Route path="/about" element={<Contact/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login set={setNav} func={handleNav} googleProfile={googleProfile} googlefunc={handleGoogle}/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/form" element={<Form />} /> 
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path ="/test" element = {<ThyroidTestForm />} />  
            <Route path ="/outputPage" element = {<Report />} /> 
            <Route path="/" element={<Home />} />
            
            </Routes>
            <div><ToastContainer autoClose={3000} limit={1}/></div>
        </Router>
        
        
    );
}

export default App;