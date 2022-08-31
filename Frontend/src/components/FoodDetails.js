import React, { useEffect } from "react";
import DisplayImage from '../assets/images/nick-karvounis-jN_M0McVNeI-unsplash.jpg'
import DeliveryImage from '../assets/images/cherry-delivery-2.png'
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { BsPeople } from 'react-icons/bs';
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {GroupButton} from './Button/CustomBtn';


const useStyles = makeStyles({
  backButton:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    color: '#00CCBC',
    gridColumnStart: '1',
    gridColumnEnd: '3',
    cursor: 'pointer',
    '@media only screen and (max-width: 540px)': {
      position: 'absolute',
      backgroundColor: '#fff',
      borderRadius: '50px',
      margin: '10px',
      padding: '10px',
    },
  },
  backButtonTxt:{
    '@media only screen and (max-width: 540px)': {
      display: 'none',
    },
  },
    RatingFlex:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    starRating:{
      color: '#4d7c1b',
    },
    starIcon:{
        fontSize:"18px",
        color: '#4d7c1b',
        padding: '3px 8px 0px 0px',
    },
    infoFlex:{
        display: 'flex',
        alignItems: 'center',
    },
    infoIcon: {
        fontSize: '30px',
        color: '#9b9b9b',
        marginRight: '10px',
    },
    arrowIcon: {
        color: "#00CCBC",
    },
    locationIcon: {
        fontSize: '30px',
        color: '#4d7c1b',
        marginRight: '10px',
    },
    discountBox: {
        marginTop: "16px",
        backgroundColor: "#F34848",
        padding: "15px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "flex-start",
        color: "#fff",
        width: "fit-content",
        boxSizing: "border-box",
        '@media only screen and (max-width: 540px)': {
          marginBottom: "15px",
          fontSize: "14px",
          '& > $discountTxt': {
            fontSize: "14px",
          },
        },

    },
    discountIcon: {
        rotate: "90deg",
        marginRight: "12px",
        fontSize: "2px",
    },
    discountTxt: {
        fontSize: "16px",
        fontWeight: "600",
        
    },
    actionBox: {
        maxWidth: "200px",
        justifyContent: "flex-end",
        zIndex: "3",
        backgroundColor: "#fff",
        '@media only screen and (min-width: 1280px)': {
            maxWidth: "300px",
            position: "absolute",
            right: "0px",
            top: "0px",
            padding:"16px",
        },
        '@media (max-width: 1275px)': {
        //    display:'none',
        }
    },
    actionBoxDelivery: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBlock: "15px",
    },
    deliveryIcon:{
        width:"28px",
        height:"28px",
        backgroundImage: `url(${DeliveryImage})`,
        backgroundSize: "cover",
        margin: '0px 15px 0px 0px',
    },
    groupButtonImg:{
      margin:'10px',
      '@media only screen and (min-width: 960px)': {
        display: 'none',
    },
    },
    groupButton:{
      '@media only screen and (max-width: 960px)': {
        display: 'none',
      },
    },
    titleTxt: {
      fontWeight: '600',
      color: '#2e3333',
      fontFamily: " stratos,sans-serif",
      fontSize: "28px",
      lineHeight: "36px",
      marginTop:'2px',
      '@media only screen and (min-width: 960px) and (min-width: 540px)': {
          fontSize: "40px",
          lineHeight: "48px",
      },
    },
    subtitleTxt: {
      paddingTop: '4px',
      color: "#2e3333",
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "200",
      whiteSpace: "wrap",
      fontFamily: "plex-sans,sans-serif",
      '@media only screen and (min-width: 540px)':{
          paddingTop: '8px',
      }
    },
    bodyTxt: {
      paddingBottom: "5px",
      color: "#585c5c",
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "200",
      fontFamily: "plex-sans,sans-serif",
    }
   
})


const FoodDetails = () => {
  const classes = useStyles();

  useEffect(() => {
    console.log("FoodDetails");
  }, []);


  return (
    <Box
      sx={{
        maxWidth:"100%",
        display: "grid",
        gridGap: "24px",
        position: "relative",
        gridTemplateAreas:"image info",
        gridTemplateColumns: "30% 1fr",
        gridTemplateRows: "auto",
        margin:"30px",
        '@media only screen and (min-width: 540px)': {
            paddingInline:"15px"
        },
        '@media only screen and (max-width: 540px)': {
            margin:"0px",
            gridTemplateRows: "2fr 3fr",
            gridTemplateColumns: "1fr",
        },
      }}
    >
      <div className={classes.backButton}>
                <KeyboardBackspaceIcon/> <span className={classes.backButtonTxt}>Back</span>
      </div>
      <Box
        sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${DisplayImage})`,
            backgroundPosition:"50%",
            backgroundSize:"cover",
            transition: "opacity .5s ease-out",
            borderRadius:"4px",
            display:"flex",
            justifyContent:"flex-end",
            alignItems:"flex-end",
            '@media only screen and (max-width: 540px)': {
              borderRadius:"0px",
            },
        }}
      > 
        <div className={classes.groupButtonImg}>
         <GroupButton  startIcon={<BsPeople style={{ color: "#00b8a9", fontSize: "18px" }} />}>
                Start group order
          </GroupButton>
          </div>
      </Box>
      <Box
        sx={{
            width: "100%",
            height: "100%",
            display:"flex",
            flexWrap:"wrap",
            alignItems:"flex-start",
            justifyContent:"flex-start",
            flexDirection:"column",
            gap:"5px",
            position:"relative",
            boxSizing:"border-box",
            '@media only screen and (min-width: 1280px)': {
                // paddingRight:"20px",
            },
            '@media only screen and (max-width: 540px)': {
              paddingInline:"10px",
            },
        }}
      >
        <div>
          <div className={classes.titleTxt}>
            Tossed - St Martin&apos;s Lane
          </div>
          <div className={classes.subtitleTxt}>
            Chicken · Salads · Healthy
          </div>

          <div className={classes.RatingFlex}>
            <StarIcon className={classes.starIcon} fontSize='18px'/>
            <div className={classes.subtitleTxt}>
              <span className={classes.starRating}>4.7 Excellent</span> (500+) · 0.20 miles away·Closes at 21:00 · £1.99 delivery · £7.00 minimum
            </div>
          </div>

          <div className={classes.infoFlex}>
            <InfoOutlinedIcon className={classes.infoIcon}/>
            <div style={{display:"flex",flexDirection:"column",padding:"8px 5px 0px 10px"}}>
              <div className={classes.subtitleTxt}>Info</div>
              <div className={classes.bodyTxt}>
                Map, allergens and hygiene rating
              </div>
            </div>
                <ArrowForwardIosIcon fontSize="10px" className={classes.arrowIcon}/>
            </div>


          <div className={classes.infoFlex}>
            <PlaceOutlinedIcon className={classes.locationIcon} />
            <div style={{display:"flex",flexDirection:"column",padding:"8px 5px 0px 10px"}}>
              <div className={classes.subtitleTxt}>
                This place is close to you
              </div>
              <div className={classes.bodyTxt}>
                Local places are likely to give you the best experience.
              </div>
            </div>
          </div>

          <div className={classes.actionBox}>
            <div className={classes.actionBoxDelivery}>
                <div style={{ display: "flex", alignItems: "center" }}> 
                    <span className={classes.deliveryIcon}/>Delivery
                </div>
                <div style={{ color: "#00b8a9" }}>Change</div>
            </div>
            <div className={classes.groupButton} >
            <GroupButton startIcon={<BsPeople style={{ color: "#00b8a9", fontSize: "18px" }} />}>
                Start group order
            </GroupButton>
            </div>

          </div>

          <div className={classes.discountBox}>
            <span className={classes.discountIcon}>
              <LocalOfferOutlinedIcon />
            </span>
            <span className={classes.discountTxt} >20% off entire menu - </span>For
            orders over £35. T&Cs apply
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default FoodDetails;


