import React,{useState} from "react";
import Form from "./forms/Form";
import Login from "./login/login";
import Navbar from "./navbar/navbar"
import Home from "./home/Home";
import Contact from "./contact/contact";
import Register from "./register/register";
import Navbar2 from  "./navbar/navlink2";
import ThyroidTestForm from "./test/test";
import {
    BrowserRouter as Router,
    Route,
    Routes
    
    } from "react-router-dom";


function App(){
    const [setNav,handleNav] = useState(false);
    // handleNav(setNav);
    return(
        
            
        <Router>
            {setNav?<Navbar set={setNav} func={handleNav}/>:<Navbar/>}
            <Routes>
                
            <Route path="/about" element={<Contact/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login set={setNav} func={handleNav}/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/form" element={<Form set={setNav} func={handleNav}/>} /> 
            <Route path ="/test" element = {<ThyroidTestForm set={setNav} func={handleNav}/>} />   
            <Route path="/" element={<Home set={setNav} func={handleNav}/>} />
            </Routes>
        </Router>
        
        
    );
}

export default App;