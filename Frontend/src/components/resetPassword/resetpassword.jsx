import React,{useState} from 'react';
import './resetpassword.css';

function ResetPassword(){
  const [data,setData] = useState({
    Password:"",
    NewPassword:"",
    ConfirmPassword:""
  });
  const handleChange=(event)=>{
    setData({
      ...data,
      [event.target.name]:event.target.value
    });

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setData({...data});
    console.log(data);
  }

  return (
    <div className='outerarea'>
    <div className="reset_box">
      <h2 className='heading'>Password Reset</h2>
      <form className="reset_form">
        <div className="password">
          <label htmlFor="pass" className='resetlabel'>Enter Password:</label>
          <input className="pass" type="text" placeholder="Password" name="Password" onChange={handleChange} required/>
        </div>
        <div className="npassword">
          <label htmlFor="npass" className='resetlabel'>Enter New Password:</label>
          <input className="npass" type="password" placeholder="New Password" onChange={handleChange} name="NewPassword" required/>
        </div>
        <div className="conform_npass">
          <label htmlFor="cnpass" className='resetlabel'>Confirm Password:</label>
          <input
            className="cnpass"
            type="text"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            onChange={handleChange}
            required />
        </div>
        <button type="submit" onClick={handleSubmit} className='resetbutton'>Reset Password</button>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
