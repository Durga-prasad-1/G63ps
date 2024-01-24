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
    console.log()
    kk = localStorage.getItem('token');
    console.log(kk);
    // console.log(jwtDecode(kk));
    const [googleProfile,handleGoogle] = useState(null);
    return(
        
            
        <Router>
            {kk ?<Navbar2 set={setNav} func={handleNav} googleProfile={googleProfile} googlefunc={handleGoogle}/>:<Navbar/>}
            <Routes>
                
            <Route path="/about" element={<Contact/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login set={setNav} func={handleNav} googleProfile={googleProfile} googlefunc={handleGoogle}/>} />
            <Route path="/register" element={<Register/>} />
            <Route  path="/form" element={<Form set={setNav} func={handleNav}/>} />     
            <Route path="/" element={<Home set={setNav} func={handleNav}/>} />
            <Route path="/profile" element={<Profile set={setNav} func={handleNav}/>} />
            </Routes>
        </Router>
        
        
    );
}

export default App;
