import React from 'react'
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CheckoutButton } from './Button/CustomBtn';

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