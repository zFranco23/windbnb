import React from 'react'
import {makeStyles, Typography} from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    root:{
        border: "1px solid #4F4F4F",
        boxSizing: "border-box",
        borderRadius: "12px",
        padding:"0.3rem 1rem",
    },
    text:{
        color:"#4F4F4F",
        fontFamily:"Montserrat",
        fontWeight:"700",
        fontSize:"12px",
        [theme.breakpoints.down("xs")]:{
            fontSize:"9px",
        }
    }
}))
function SuperHost({children}) {

    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                SUPER HOST
            </Typography> 
            
        </div>
    )
}

export default SuperHost
