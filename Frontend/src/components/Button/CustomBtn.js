import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const SignAndLoginButton = styled(Button)(() => ({
    borderRadius: "4px",
    fontSize: "15px",
    fontWeight: "400",
    background: "none",
    border: "1px solid #e8ebeb",
    color: "#2e3333",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    WebkitFontSmoothing: "antialiased",
    fontFamily: "plex-sans,sans-serif",
    padding: " 8px 16px",
    textTransform: "none",
    elevation: "0",
    '&:hover': {
        border: "1px solid #e8ebeb",
        background: "none",
    },
    '@media only screen and (max-width: 600px)':{
        display:"none",
    }
}));

export const MenuButton = styled(Button)(() => ({
    borderRadius: "4px",
    fontSize: "15px",
    fontWeight: "400",
    background: "none",
    border: "1px solid #e8ebeb",
    color: "#2e3333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    padding: " 8px 16px",
    textTransform: "none",
    elevation: "0",
    '&:hover': {
        border: "1px solid #e8ebeb",
        background: "none",
    },

}));

export const MiniSearchButton = styled(Button)(() => ({
    borderRadius: "4px",
    background: "none",
    border: "1px solid #e8ebeb",
    color: "#00ccbc",
    paddingInline: " 2px 2px",
    minWidth: "48px",
    minHeight: "45px",
    cursor: "pointer",
    transitionProperty: "box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
    elevation: "0",
    '&:hover': {
        border: "1px solid #00ccbc",
    },
    '@media only screen and (min-width: 850px)':{
        display:"none",
    }

}));

export const GroupButton = styled(Button)(() => ({
    color: "#585c5c",
    textTransform: "none", 
    padding: "7px 14px 7px 14px",
    background: "none",
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "plex-sans,sans-serif",
    border: "1px solid #a3afaf",
    backgroundColor: "#fff",
    '&:hover': {
        backgroundColor: "#fff",
    }
}));

export const FacebookButton = styled(Button)(() => ({
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: "bold",
    background: "#4c69ba",
    border: "none",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "plex-sans, sans-serif",
    outline: "none",
    cursor: "pointer",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        backgroundColor: "#4c69ba",
    },

}));

export const GoogleButton = styled(Button)(() => ({
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: "600",
    background: "none",
    border: "1px solid #a3afaf",
    color: "#2e3333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    outline: "none",
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "plex-sans, sans-serif",
    minHeight: "48px",
    padding: " 12px 24px",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        background: "none",
    },

}));


export const ManualRegisterButton = styled(Button)(() => ({
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: "bold",
    background: "#00ccbc",
    border: "none",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "plex-sans, sans-serif",
    outline: "none",
    cursor: "pointer",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        background: "#00ccbc",
    },

}));


export const ForgetPasswordButton = styled(Button)(() => ({
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: 'normal',
    border: "none",
    background: "#fff",
    color: "#00ccbc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "plex-sans, sans-serif",
    outline: "none",
    cursor: "pointer",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        border: "1px solid  #585c5c",
        background: "#fff",
    },

}));

export const CheckoutButton = styled(Button)(() => ({
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
