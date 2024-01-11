import React from "react";
import "./menu.css";

export default function Menu(){
    

    function black(event){
        let divBox;
            if (event.target.classList.contains('bi')) {
            divBox=event.target.parentElement.style;
            console.log(divBox)
        }
        else if(event.target.classList.contains('menu_bar')){
            divBox=event.target.style;
        }
        else{
            divBox=event.target.parentElement.parentElement.style;
        }
        divBox.backgroundColor = "rgb(105, 105, 105)";
        setTimeout(()=>{
            divBox.backgroundColor = "white";
        },200);
        // const newPage = document.createElement('div');
        

    }
    

    return(
        <div className="menu_bar">
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list" style={{width:30,height:30}} fill="currentColor"  viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            
        </div>
    );
}