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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/passwords/resetPassword",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const res_data = await response.json();
      if(response.ok){
        alert(res_data.msg);
      }else{
        alert(res_data.msg);
      }
    } catch (error) {
      console.log(error);
    }
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
