import React from 'react'

import {IconButton, makeStyles, Typography} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';


const useStyles= makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"space-between",
        margin:"1rem 5rem",
        [theme.breakpoints.down("xs")]:{
            flexDirection:"column",
            margin:0,
        }
    },
    logo:{
        width:"100px",
        [theme.breakpoints.down("xs")]:{
            marginTop:"1.5rem",
            marginLeft:"1rem",
        },
        cursor:"pointer",
    },
    seeker:{
        cursor:"pointer",
        display:"flex",
        alignItems:"center",
        background: "#FFFFFF",
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        [theme.breakpoints.down("xs")]:{
            margin:"auto",
            marginTop:"2rem",
        }
    },
    textLeft:{
        fontFamily:"Mulish",
        fontWeight:"400",
        fontSize:"14px",
        lineHeight:"18px",
        margin:"1rem",
    },
    textRight:{
        fontFamily:"Mulish",
        fontWeight:"400",
        fontSize:"14px",
        color:"#BDBDBD",
        lineHeight:"18px",
        margin:"1rem",
    },
    containerBorder:{
        borderRight: "1px solid #F2F2F2",
    },
    iconSearch:{
        color:"#EB5757",
    }
}))

function Header({handleShowMenu,placeSelected,countAdults,countChildren}) {

    const classes=useStyles();
    return (
        <div className={classes.root}>
           <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} className={classes.logo} alt="logo"/>
           <div className={classes.seeker} onClick={handleShowMenu}>
               <div className={classes.containerBorder}>
                    <Typography className={classes.textLeft}>
                        {placeSelected ? placeSelected : ""}
                    </Typography>
               </div>
               <div className={classes.containerBorder}>
                    <Typography className={classes.textRight}>
                        {countAdults+countChildren === 0 ? "Add" : countAdults+countChildren} guests
                    </Typography>
               </div>
               <IconButton>
                   <SearchIcon className={classes.iconSearch}/>
               </IconButton>    
           </div>
        </div>
    )
}

export default Header
