import React,{useState} from "react";
import imag from "../images/thinkpng.png"
import "./contact.css"
//import { stringify } from "querystring";


function Contact(){
    const [contactdata, setContact] = useState({
        username:"",
        email:"",
        message:"",
    });

    const contactInput=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setContact({
            ...contactdata,
            [name]: value,
            });
    }
    
    const contactSubmit= async (event)=>{
        event.preventDefault();
        console.log(contactdata);
        try {
            const response = await fetch("http://localhost:5000/contact",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactdata),
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div>
            <h1 style={{fontFamily: "Nunito Sans", padding:"20px"}}> Contact Us</h1>
            <div className="contactGrid">
            
            <img src={imag} alt="think" />
            <div className="contact_con">
            <form onSubmit={contactSubmit} >
                <label>
                    Name
                    <br />
                    <input type="text"  onChange={contactInput} name="username" id="username" placeholder="Your Name"/>
                    <br />
                </label>
                <label htmlFor="contactEmail">
                    Email
                    <br />
                    <input type="email" name="email" id="email" placeholder="Your Email" onChange={contactInput}/>
                    <br />
                </label>
                <label htmlFor="comment">
                    Your message
                    <br />
                    <textarea rows="6" cols="50" placeholder="Message" name="message" id="comment" onChange={contactInput}/> 
                
                    <button type="submit">Submit</button>
                </label>
                
            </form>
            </div>

        </div>
        </div>
    );

}

export default Contact;