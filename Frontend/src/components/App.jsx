import React,{useState} from "react";
import Form from "./forms/Form";
import Login from "./login/login";
import Navbar from "./navbar/navbar"
import Home from "./home/Home";
import Contact from "./contact/contact";
import Register from "./register/register";
import Navbar2 from  "./navbar/navlink2";
import {
    BrowserRouter as Router,
    Route,
    Routes
    
    } from "react-router-dom";


function App(){
    const [setNav,handleNav] = useState(false);
    return(
        
            
        <Router>
            {setNav?<Navbar2/>:<Navbar/>}
            <Routes>
                
            <Route path="/about" element={<Contact/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login set={setNav} func={handleNav}/>} />
            <Route path="/register" element={<Register/>} />
            <Route  path="/form" element={<Form/>} />     
            <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        
        
    );
}

export default App;