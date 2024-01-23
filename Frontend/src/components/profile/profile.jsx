import React from "react";
import "./profile.css";
import pic1 from "../images/login.png";
import { Link } from "react-router-dom";

function Profile(){

    return(
        <div class="profile-container">
        <h3>PROFILE</h3>
        <div className="profile-picture">
            <img src={pic1.png} alt="Profile Picture" />
        </div>
        <h2>Arjun</h2>
        <p>Arjunreddy@gmail.com</p>
        <p>9827827842</p>
        <p>Male</p>
        <button type="submit">Update Profile</button>
    </div>
    )

}

export default Profile;