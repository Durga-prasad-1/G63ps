import React,{useState} from 'react';
import './resetpassword.css';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword(){
  const [data,setData] = useState({
    Password:"",
    NewPassword:"",
    ConfirmPassword:""
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword((show) => !show);

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword3 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };



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
      const response = await fetch("https://thyro-aid.onrender.com/passwords/resetPassword",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const res_data = await response.json();
      if(response.ok){
        toast.success(res_data.msg,{position:"top-center"});
      }else{
        toast.error(res_data.msg,{position:"top-center"
        });
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
          {/* <label htmlFor="pass" className='resetlabel'>Enter Password:</label> */}
          {/* <input className="pass" type="text" placeholder="Password" name="Password" onChange={handleChange} required/> */}

          <FormControl sx={{ m: 1,width: '95%' }}>
          <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="Password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Current Password"
          />
        </FormControl>        


        </div>
        <div className="npassword">
          {/* <label htmlFor="npass" className='resetlabel'>Enter New Password:</label> */}
          {/* <input className="npass" type="password" placeholder="New Password" onChange={handleChange} name="NewPassword" required/> */}

          <FormControl sx={{ m: 1, width: '95%' }}>
          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
            name="NewPassword"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
          />
        </FormControl>


        </div>
        <div className="conform_npass">
          {/* <label htmlFor="cnpass" className='resetlabel'>Confirm Password:</label>
          <input
            className="cnpass"
            type="text"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            onChange={handleChange}
            required /> */}

            <FormControl sx={{ m: 1, width: '95%' }}>
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword1 ? 'text' : 'password'}
            name="ConfirmPassword"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword3}
                  onMouseDown={handleMouseDownPassword3}
                  edge="end"
                >
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

        </div>
        <button type="submit" onClick={handleSubmit} className='resetbutton'>Reset Password</button>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
