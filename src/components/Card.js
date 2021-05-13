import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

import StarRateIcon from '@material-ui/icons/Star';


import SuperHost from './SuperHost';

const useStyles=makeStyles((theme)=>({
    root:{
        display:"flex",
        flexDirection:"column",
        marginBottom:"1rem",
        maxWidth:"95%",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"100%",
            width:"100%",
        }
    },
    img:{
        borderRadius:"25px",
        /* filter:"grayscale(0.5)", */
        transition:"0.4s ease-in-out",
        "&:hover":{
            transform:"scale(1.04)",
            /* filter:"grayscale(0)" */
        },
        [theme.breakpoints.down("xs")]:{
            "&:hover":{
                transform:"scale(1.02)",
            }, 
        }
    },
    container:{
        marginTop:"1rem",
        marginBottom:"1rem",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    type:{
        textAlign:"center",
        fontFamily:"Montserrat",
        fontWeight:"500",
        fontSize:"14px",
        lineHeight:"17px",
        color:"#828282",
        [theme.breakpoints.down("xs")]:{
            fontSize:"12px",
        }
    },
    rate:{
        fontFamily:"Montserrat",
        fontWeight:"500",
        fontSize:"1rem",
        display:"flex",
        alignItems:"center",
    },
    rateIcon:{
        color:"#EB5757",
    },
    description:{
        fontFamily:"Montserrat",
        fontWeight:"600",
        fontSize:"16px",
        color:"#333333",    
    }
}))
function Card({img,superHost,type,rating,description}) {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <img src={img} alt="bnb" className={classes.img}/>
            <div className={classes.container}>
                {superHost && <SuperHost />}
                <Typography className={classes.type}>
                    {type}
                </Typography>
                <Typography className={classes.rate}>
                    <StarRateIcon className={classes.rateIcon}/>
                    {rating} 
                </Typography>
            </div>
            <Typography className={classes.description}>
                {description}
            </Typography>
        </div>
    )
}

export default Card
