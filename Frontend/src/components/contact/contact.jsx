import React,{useState} from "react";
import imag from "../images/thinkpng.png";
import { useNavigate } from "react-router-dom";
import "./contact.css";


function Contact(){
    const naviagte = useNavigate();
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
            const response = await fetch("https://thyro-aid.onrender.com/contact",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactdata),
            });
            console.log(response);
            if(response.ok){
                alert(response.msg);
                naviagte("/");
            }else{
                alert(response.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className="box1">
            <div className="contactGrid">
            
            <img src={imag} alt="think" />
            <div className="contact_con">
                <h1 className="heading">Contact us</h1>
            <form onSubmit={contactSubmit} >
                
                <label className="sideheading"  htmlFor="username">Name</label>
                <input type="text"  onChange={contactInput} name="username" class="contact_username" placeholder="Your Name"/>
                
                <label className="sideheading"  htmlFor="email">Email</label>
                <input type="email" name="email" class="contact_email" placeholder="Your Email" onChange={contactInput}/>
                                    
                <label className="sideheading"  htmlFor="comment">Message:</label>
                <textarea rows="6" cols="50" placeholder="Message" name="message" class="contact_comment" onChange={contactInput}/> 
                
                <button type="submit" class="contact_button">Submit</button>
                
                
            </form>
            </div>

        </div>
        </div>
    );

}

export default Contact;
