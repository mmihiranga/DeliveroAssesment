import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Link } from "react-scroll";
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

const useStyles = makeStyles({
    menuContainer: {
        justifyContent: 'space-around',
        padding: '10px 20px 10px 20px',
        overflow: "hidden",
        height: '50px',
        color: '#00CCBC',
        borderTop: '1px solid rgb(0 0 0 / 5%)',
        boxShadow: '0 2px 4px rgb(0 0 0 / 5%)',
        zIndex:10,
        backgroundColor: '#fff',
        position: "sticky",
        display:"initial",
        
    },
    menuItem: {
        width: 'max-content',
        padding: "4px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&:hover": {
            backgroundColor: '#00CCBC',
            color: '#fff',
            borderRadius: '35px',
        
        },

    },
    activeLink:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'max-content',
        height: 'max-content',
        backgroundColor: '#00CCBC',
        color: '#ffffff',
        borderRadius: '35px',
        marginInline:'5px',
        '& > $tab': {
            color: '#ffffff',
        }
    },
})

const Menubar = () => {
    const classes = useStyles();
    const menuList = useSelector((state) => state.menus)
  

    useEffect(() => {
        console.log(menuList)
    }, []);

    return (
        <Box sx={{ 
                maxWidth:"100%",
                bgcolor: 'background.paper',
                zIndex:10,
                padding: '10px 20px 10px 20px',
                height: '50px',
                color: '#00CCBC',
                fontWeight:'200',
                fontFamily: "plex-sans,sans-serif",
                borderTop: '1px solid rgb(0 0 0 / 5%)',
                boxShadow: '0 2px 4px rgb(0 0 0 / 5%)',
                
              }}>
            <Tabs
                value={5}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                TabIndicatorProps={{
                    style: {
                        display: 'none',
                    }
                    }}
                sx={{
                    display:'flex',
                    alignItems: 'center',
                }}
            >
            {menuList.value.length > 0 && menuList.value.map((menu, i) =>

                <div key={i}>
                            <Link
                                activeClass={classes.activeLink}
                                className={menu.id}
                                to={menu.id.toString()}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-50}
                                >
                                <Tab className={classes.tab} sx={{
                                    minWidth: 'max-content',
                                    minHeight: 'max-content',
                                    textTransform: 'none',
                                    padding: "5px 12px 5px 12px",
                                    "&:hover": {
                                        backgroundColor: '#00CCBC',
                                        color: '#fff',
                                        borderRadius: '35px',
                                    
                                    },
                                }} label={menu.title.substring(0, 12)}></Tab>
                            </Link>
                        
                </div>
            )
            }
            </Tabs>
        </Box>
    )
}

export default Menubar