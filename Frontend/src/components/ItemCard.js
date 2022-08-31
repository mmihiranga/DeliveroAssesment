import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
/* eslint-disable react/prop-types */


const ItemCard = ({ title, description, amount, img }) => {
  return (
    <Card sx={{ 
        width: "100%",
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer',
        borderRadius:'4px',
        boxSizing: "border-box",
        padding:'16px',
        transition:'box-shadow .2s ease-in-out',
        '&:hover':{
            boxShadow:'0px 4px 20px rgba(0,0,0,.08)',
        },
        '@media only screen and (max-width: 860px)': {
          borderRadius:'0px',
          borderTop: '1px solid rgb(0 0 0 / 5%)',
          
      }

        }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
        sx={{
            width: "100px",
            flexShrink: 0,
            borderRadius: '3px',
            boxSizing: "border-box",
            marginLeft: "16px",
            height: "100px",
            backgroundSize: "cover",
            padding: "0",
            border:'1px solid rgba(0,0,0,.08)',
        }}
      />
      <CardContent   sx={{
            marginRight:'auto',
            height:'100%',
            width: "100%",
            whiteSpace:'pre-line',
            display:'flex',
            boxSizing:'border-box',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'strech',
            padding:'0 !important',
        }}>
        <div style={{
            fontSize:'16px',
            fontWeight:'600',
            lineHeight:'22px',
            color:'#2e3333',
            fontFamily:'plex-sans, sans-serif',
            paddingBottom:'4px',
        }}>
          {title.substring(0, 12)}
        </div>
        <div style={{
            fontSize:'13px',
            fontWeight:'200',
            color:'#585c5c',
            fontFamily:'plex-sans, sans-serif',
            marginBottom:'10px',
            textOverflow:'ellipsis',
            overflow:'hidden',
            display:' -webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            whiteSpace:'normal',
        }}>
          {description}
        </div>
        <div style={{
            fontSize:'16px',
            fontWeight:'200',
            lineHeight:'19px',
            color:'#585c5c',
            fontFamily:'plex-sans, sans-serif',
        }}>
            LKR {amount}
        </div>
      </CardContent>
    </Card>
  )
}

export default ItemCard