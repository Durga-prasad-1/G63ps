import React from "react";
import "./profile.css";
import Avatar from '@mui/material/Avatar';
import { jwtDecode } from "jwt-decode";

function Profile(){
    let user;
    if (localStorage.getItem('token')){
    user = jwtDecode(localStorage.getItem('token'));
    }
    // console.log(token);
    return(
        <div className="rishi_body">
        <div className="profile-container">
        <h3 className="profile_heading">PROFILE</h3>
        <div className="profile-picture">
            <Avatar src={user.picture} alt="profile pic" sx={{ width: 150, height: 150 }} />
        </div>
        <h1 className="profile_name">{user.name}</h1>
        <p className="profile_email">{user.email}</p>
        <p className="profile_phone">9827827842</p>
        <p className="profile_gender">Male</p>
        <button type="submit" className="profile_button">Update Profile</button>
    </div>
    </div>
    )

}

export default Profile;