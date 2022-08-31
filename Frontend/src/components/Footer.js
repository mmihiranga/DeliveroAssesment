import React from 'react'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    footerBox:{
        height:'350px',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        backgroundColor:'hsla(0,0%,100%,.1)',
        padding:'30px',
        minWidth:'200px',
        borderRadius:'3px',
        color:'#fff',
        fontFamily:'plex-sans, sans-serif',
        '@media only screen and (max-width: 540px)': {
            flex:1,
        },
    },
    footerBoxTitle:{
        fontSize:'18px',
        fontWeight:'700',

    },
    footerBoxSubTitle:{
        fontSize:'14px',
        fontWeight:'200',
        '&:hover':{
            color:'#00b8a9',
        }
    }
})
const Footer = () => {
  const classes = useStyles()
  return (
    <Box  sx={{
        width: "100%",
        height: "100%",
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        gap:'24px',
        boxSizing: "border-box",
        padding:'16px',
        backgroundColor:'#2e3333',
    }}>
        <Box className={classes.footerBox}>
            <div className={classes.footerBoxTitle}>Discover Deliveroo</div>
            <div className={classes.footerBoxSubTitle}>Investors</div>
            <div className={classes.footerBoxSubTitle}>About us</div>
            <div className={classes.footerBoxSubTitle}>Takeaway</div>
            <div className={classes.footerBoxSubTitle}>More</div>
            <div className={classes.footerBoxSubTitle}>Newsroom</div>
            <div className={classes.footerBoxSubTitle}>Foodscene blog</div>
            <div className={classes.footerBoxSubTitle}>Engineering blog</div>
            <div className={classes.footerBoxSubTitle}>Design blog</div>
            <div className={classes.footerBoxSubTitle}>Gift Cards</div>
            <div className={classes.footerBoxSubTitle}>Careers</div>
            <div className={classes.footerBoxSubTitle}>Restaurant signup</div>
            <div className={classes.footerBoxSubTitle}>Become a rider</div>
        </Box>
        <Box className={classes.footerBox}>
            <div className={classes.footerBoxTitle}>Legal</div>
            <div className={classes.footerBoxSubTitle}>Terms and conditions</div>
            <div className={classes.footerBoxSubTitle}>Privacy</div>
            <div className={classes.footerBoxSubTitle}>Cookies</div>
            <div className={classes.footerBoxSubTitle}>Modern Slavery Statement</div>
            <div className={classes.footerBoxSubTitle}>Tax Strategy</div>
            <div className={classes.footerBoxSubTitle}>Section 172 Statement</div>
        </Box>
        <Box className={classes.footerBox}>
            <div className={classes.footerBoxTitle}>Help</div>
            <div className={classes.footerBoxSubTitle}>Contact</div>
            <div className={classes.footerBoxSubTitle}>FAQs</div>
            <div className={classes.footerBoxSubTitle}>Cuisines</div>
            <div className={classes.footerBoxSubTitle}>Brands</div>
        </Box>
        <Box className={classes.footerBox}>  
            <div className={classes.footerBoxTitle}>Take Deliveroo with you</div>
        </Box>
    </Box>
  )
}

export default Footer