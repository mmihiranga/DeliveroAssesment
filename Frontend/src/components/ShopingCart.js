import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
    cartContainer:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        margin:"10px",
        padding:"10px",
        border: "1px solidrgba(0,0,0,.04)",
        borderRadius: '4px',
        boxShadow: '0 6px 20px rgba(0,0,0,.08)',
        '@media (max-width: 860px)': {

                display:'none',
            
        }
    }
})

const CheckoutButton = styled(Button)(() => ({
    transitionProperty: "box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: "600",
    background: "#e2e5e5",
    color: "#abadad",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    outline: "none",
    cursor: "pointer",
    WebkitFontSmoothing: "antialiased",
    textDecoration: "none",
    webkitAppearance: "none",
    mozAppearance: "none",
    appearance: "none",
    fontFamily: "plex-sans, sans-serif",
    minHeight: "48px",
    padding: " 12px 24px",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        background: "#e2e5e5",
        color: "#abadad",
    },

}));
const ShoppingCart = () => {
const classes = useStyles();
  return (
    <div className={classes.cartContainer}>
        <ShoppingCartIcon style={{color:"#abadad", fontSize:"45px",marginTop:"15px"}}/>
        <div style={{color:"#abadad", fontSize:"16px",marginBlock:"10px 40px"}}>Your basket is empty</div>
        <CheckoutButton>Go to Checkout</CheckoutButton>
    </div>
  )
}

export default ShoppingCart