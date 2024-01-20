import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useNavigate  } from "react-router-dom";


// import Resetpass from "../Resetpassword/resetpass.jsx";

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.innerText);
    // <Resetpass />
    // <Link to="/login" className="none">Login</Link>
  };
  const navigate = useNavigate();
    function showPermission(){
    setAnchorEl(null);

        let show = document.querySelector("#permission");
        show.classList.remove("active1");
    }
    function notShowPermission(){
        let show = document.querySelector("#permission");
        show.classList.add("active1");
    }
    function nav(){
        notShowPermission();
        props.func(false) // changes the navbar
        navigate("/");
    }
  return (
    <React.Fragment>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={props.link}/>
          </IconButton>
        </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> Reset password
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> History
        </MenuItem>
        <MenuItem className='logout' onClick={showPermission}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      
      <div className="permission active1" id="permission">
            <div className="decisionMaking">
                <div className="hanuman">
                <h6>Are you sure you want to log out?</h6>
                <button style={{height:"20px",cursor:"pointer",backgroundColor:"white",border:"0"}} onClick={notShowPermission}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                </button>
                {/* <button>aut</button> */}
                </div>                
                <div className="yesOrNo">
                    <button className="butn" onClick={nav}>Yes</button>
                    <button className="butn" onClick={notShowPermission}>No</button>
                </div>
            </div>
            </div> 
            </Menu>     
    </React.Fragment>
  );
}
