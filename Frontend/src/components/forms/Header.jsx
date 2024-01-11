import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <header className="head">                    
                <div class="con">
                    <div id="space_even">
                        <h1 className="title">{"Thyroid Detection"}</h1>
                    <nav className="nav">
                        <ul class="nodes">
                            <li><Link to="/" className="anchor" target="_parent">{"Home"}</Link></li>            
                        </ul>
                    </nav> 
                </div>
                </div>
        </header> 

    );
}

export default Header;