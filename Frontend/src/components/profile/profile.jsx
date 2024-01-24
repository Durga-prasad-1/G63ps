import React from "react";
import "./profile.css";
import pic1 from "../images/login.png";

function Profile(){

    return(
        <div className="profile_body">
        <div className="profile-container">
        <h3 className="profile_heading">PROFILEPROFILE</h3>
        <div className="profile-picture">
            <img src={pic1.png} alt="Profile Picture" />
        </div>
        <h1 className="profile_name">Arjun</h1>
        <p className="profile_email">Arjunreddy@gmail.com</p>
        <p className="profile_phone">9827827842</p>
        <p className="profile_gender">Male</p>
        <button type="submit" className="profile_button">Update Profile</button>
        </div>
        </div>
    )

}

export default Profile;
