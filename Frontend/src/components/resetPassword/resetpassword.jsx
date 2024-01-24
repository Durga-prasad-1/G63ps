import React from 'react';
import './resetpassword.css';

function ResetPassword(){

  return (
    <div className='outerarea'>
    <div className="reset_box">
      <h2 className='heading'>Password Reset</h2>
      <form className="reset_form">
        <div className="password">
          <label htmlFor="pass" className='resetlabel'>Enter Password:</label>
          <input className="pass" type="text" placeholder="Password" name="user" required/>
        </div>
        <div className="npassword">
          <label htmlFor="npass" className='resetlabel'>Enter New Password:</label>
          <input className="npass" type="password" placeholder="New Password" name="user" required/>
        </div>
        <div className="conform_npass">
          <label htmlFor="cnpass" className='resetlabel'>Confirm Password:</label>
          <input
            className="cnpass"
            type="text"
            placeholder="Confirm Password"
            required />
        </div>
        <button type="submit" className='resetbutton'>Reset Password</button>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
