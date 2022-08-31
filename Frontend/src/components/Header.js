import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DeliverooLogo from "../assets/images/Deliveroo-logo.png";
import { HiOutlineHome } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {MenuButton,MiniSearchButton,SignAndLoginButton} from './Button/CustomBtn';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';
import { register } from '../redux/userRedux';


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F5F5F5",
    margin: "2px 10px 2px 10px",
    paddingBlock:'2px',
    width: "100%",
   '@media only screen and (max-width: 1920px)':{
        maxWidth: "650px",
    },
    '@media only screen and (max-width: 850px)':{
        display:"none",
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9ea0a0",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    color: "#9ea0a0",
    width: "100%",
  },
}));

const useStyles = makeStyles({
    logoImg:{
        width:'120px',
        height:'60px',
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"50%",
        cursor:"pointer",
        borderRadius:"3px",
        WebkitTransitionDuration: "0.15s",
        WebkitTransitionTimingFunction: "ease-out",
        transitionProperty:"box-shadow",
    },
    appBarButtonContainer:{
        display:"flex",
        gap:"10px",
        justifyContent:"flex-end",
        alignItems:"center",
    },
    avatar: {
        display: "flex",
    },
    profileBox: {
        display:"flex",
        margin:'10px',
        alignItems:"center",
        justifyContent:"space-evenly",
        gap:"10px",
    },
    profileEmail: {
        fontWeight: "400",
        color: "#2e3333",
        fontFamily: " stratos,sans-serif",
        fontSize: "12px",
        lineHeight: "18px",
    },
});



const Header = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toggle, setToggle] = React.useState(true);

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    console.log(token);
    if (token) {
      dispatch(register({username:token.username,email: token.email,phone: token.phone,image:token.image}));
    }
  }, []);

  useEffect(() => {
      console.log("user_values.", user.value);
      setUserDetails(user.value[0]);
    
  }, [user,toggle]);
  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("LOGOUT!")
    dispatch(logout());
    navigate("/");
    setToggle(!toggle);
    sessionStorage.clear();
    handleClose();
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} 
        sx={{
        paddingInline:"60px",
        borderBottom:'1px solid rgba(0,0,0,.08)',
        background:'white'
        , 
        '@media only screen and (max-width: 600px)':{
            paddingInline:"15px",
        }
        }}>
            <Toolbar sx={{
                width:'100%',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "white",
                padding: "0px !important",
            }}>
                <img
                    onClick={() => navigate("/")}
                    src={DeliverooLogo}
                    alt="Logo"
                    className={classes.logoImg}
                />
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Tossed - St Martin's Lane"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
                <MiniSearchButton><SearchIcon/></MiniSearchButton>
                <div className={classes.appBarButtonContainer}>
                {userDetails ?
                   <Avatar 
                   onClick={handleMenu}
                   alt={userDetails.username}
                   src={userDetails.image}
                   sx={{ width: 45, height: 45 }}
                   />
                 :  <SignAndLoginButton startIcon={<HiOutlineHome style={{color:"#00ccbc"}}/>} onClick={() => { return navigate('/login') }}> Sign up or log in</SignAndLoginButton>
                }
                    <MenuButton startIcon={<MenuIcon style={{color:"#00ccbc"}}/>}>Menu</MenuButton>
                </div>
                {userDetails &&
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                    top:45,
                }}
              > 
              
                <div className={classes.profileBox}>
                    <Avatar alt={userDetails.username} src={userDetails.image} sx={{ width: 55, height: 55 }}/>
                    <div>
                        <div>{userDetails.username}</div>
                        <div className={classes.profileEmail}>{userDetails.email}</div>
                    </div>
                </div>
                {userDetails &&
                <MenuItem onClick={handleLogout} sx={{justifyContent:"flex-end"}}>Logout</MenuItem> }
              </Menu>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
