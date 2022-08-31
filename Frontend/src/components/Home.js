import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import MenuData from '../assets/data/menu dishes sample.json'
import { useSelector, useDispatch } from 'react-redux';
import { addMenu } from '../redux/Menus'
import Menubar from './Menubar';
import { Element } from 'react-scroll';
import StickyBox from 'react-sticky-box';
import Cart from './ShopingCart';
import Box from '@mui/material/Box';
import FoodDetails from './FoodDetails';
import ItemCard from './ItemCard';


const useStyles = makeStyles({
    backButton:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '10px',
        color: '#00CCBC',
    },
    menuTitle: {
        fontWeight: '700',
        color: '#2e3333',
        fontFamily: " stratos,sans-serif",
        fontSize: "22px",
        lineHeight: "28px",
    },
    menuContainer: {
        marginInline: '30px',
        width: 'fit-content',
        display: 'block',
        paddingInline: '30px',
        '@media (max-width: 575px)': {
            padding:'0px',
            marginInline:"0px",
        }
    },
    menuDesc:{
        fontWeight: '200',
        fontFamily: " stratos,sans-serif",
        fontSize: "15px",
        paddingBlock: '10px',
        color: '#585c5c',
    },
    menuTitleContainer: {
        margin: '30px 0px 0px 0px',
        zIndex:-1,
    }
});


const Home = () => {
    const classes = useStyles();
    const menuList = useSelector((state) => state.menus)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!menuList.value.length > 0) {
            for (let i = 0; i < MenuData.length; i++) {
                dispatch(addMenu(MenuData[i]))
            }
        }
        
    }, []);

    // useEffect(() => {
    //     console.log(menuList.value[0])
    // }, [menuList]);
    
    return (
        <div>
            <FoodDetails/>
            <StickyBox> <Menubar/></StickyBox>
            <Box sx={
                { 
                display: 'grid',
                gridGap: '32px 24px',
                gridTemplateColumns: '60% 1fr',
                gridTemplateRows: 'auto 1fr',
                padding: '50px',
                '@media only screen and (min-width: 960px)': {
                    gridTemplateColumns: 'minmax(50%,60%) minmax(420px,1fr)',
                },
                '@media (max-width: 860px)': {
                    gridTemplateColumns: '1fr',
                },
                '@media only screen and (max-width: 540px)': {
                    padding: '5px',
                },
              }
            }>
               <div>
                {menuList.value.length > 0 && menuList.value.map((menu,i) =>
                    <Element
                    name={menu.id.toString()}
                    className={menu.id}
                    key={"display" + i}
                    >
                        <br/>
                        <div className={classes.menuTitleContainer}>
                            <div className={classes.menuTitle} > {menu.title}</div>
                            <div className={classes.menuDesc} > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus a ex vitae facilisis. </div>
                        </div>
                        <Box sx={{
                            display: 'grid',
                            gridGap: '16px',
                            gridTemplate: 'auto/repeat(2,1fr)',
                            gridTemplateRows: 'auto',
                            '@media only screen and (max-width: 860px)': {
                                gridTemplateColumns: '1fr',
                                gridGap: '0px',
                            }
                            
                        }}>
                            {menu.data.map((item, i) =>
                         
                            <ItemCard key={i}  title={item.dishName} description={item.description} amount={item.displayPricing} img={item.imageUrl} />
                          
                                    )}
                        </Box>

                   
                    </Element>
                )
                }
                </div>
                <div className={classes.cartBox}>
                    <StickyBox style={{paddingInline:"50px",paddingTop:70,zIndex:-1}}>
                        <Cart/>
                    </StickyBox>
                </div>
            </Box>
        
        </div>
    )
}

export default Home

