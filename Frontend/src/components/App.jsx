import React,{useState} from "react";
import Form from "./forms/Form";
import Login from "./login/login";
import Navbar from "./navbar/navbar"
import Home from "./home/Home";
import Contact from "./contact/contact";
import Register from "./register/register";
import Navbar2 from  "./navbar/navlink2";
import Profile from "./profile/profile";
import {
    BrowserRouter as Router,
    Route,
    Routes
    
    } from "react-router-dom";



function App(){
    const [setNav,handleNav] = useState(false);
    // handleNav(setNav);
    let kk = "";
    function changeToken(){
        kk = localStorage.getItem('token');
    }
    console.log()
    kk = localStorage.getItem('token');
    // console.log(kk);
    // console.log(jwtDecode(kk));
    const [googleProfile,handleGoogle] = useState(null);
    return(
        
            
        <Router>
            {kk||setNav ?<Navbar2 set={setNav} func={handleNav} googleProfile={googleProfile} googlefunc={handleGoogle}/>:<Navbar/>} {/**kk for token and setNav for first time navbar change */}
            <Routes>
                
            <Route path="/about" element={<Contact/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login set={setNav} func={handleNav} googleProfile={googleProfile} googlefunc={handleGoogle}/>} />
            <Route path="/register" element={<Register/>} />
            <Route  path="/form" element={<Form />} />     
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            </Routes>
        </Router>
        
        
    );
}

export default App;
