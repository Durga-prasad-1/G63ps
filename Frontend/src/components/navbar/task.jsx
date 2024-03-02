import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useNavigate  } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import { popoverClasses } from '@mui/material';



// import Resetpass from "../Resetpassword/resetpass.jsx";

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    let text="";
    setAnchorEl(null);
    console.log(event.target.innerText);
    text = event.target.innerText;
    if (text === "Profile" ){
      navigate("/profile");
    }
    if (text === "Reset password" ){
      navigate("/resetPassword");
    }
    if(text==="History"){
      navigate("/history");
    }
    // <Resetpass />
    // <Link to="/login" className="none">Login</Link>
  };
 
    function showPermission(){
    setAnchorEl(null);

        let show = document.querySelector("#permission");
        show.classList.remove("active1");
    }
    // function notShowPermission(){
    //     let show = document.querySelector("#permission");
    //     show.classList.add("active1");
    // }
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
            </Menu>     
    </React.Fragment>
  );
}
