import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

import Card from './Card';
import {Images} from '../DataImages';
import Loader from 'react-loader-spinner';
const useStyles=makeStyles((theme)=>({
    root:{
        marginTop:"2rem",
        marginLeft:"5rem",
        marginRight:"5rem",
        [theme.breakpoints.down("xs")]:{
            marginLeft:"0.5rem",
            marginRight:"0.5rem",
        }
    },
    description:{
        padding:0,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    textLeft:{
        fontFamily:"Montserrat",
        fontWeight:"700",
        lineHeight:"29.26px",
        fontSize:"20px",
        color:"#333333",
    },
    textRight:{
        fontFamily:"Montserrat",
        fontWeight:"500",
        lineHeight:"17.07px",
        fontSize:"14px",
        color:"#4F4F4F",
    },
    containerGallery:{
        marginTop:"1.5rem",
    },
    noMatches:{
        fontFamily:"Mulish",
    }
}))

function Main({filter}) {

    const classes=useStyles();

    const [images,setImages]=useState();

    useEffect(()=>{
        setImages(Images)
        
    },[])

    const handleMatch = () =>{
        return (
            <Typography className={classes.noMatches}>No matches</Typography>
        )
    }
    return (
        <div className={classes.root}>
            {images?.length>0 
            ?
            <>
                <div className={classes.description}>
                    <Typography className={classes.textLeft}>
                        Stays in Perú
                    </Typography>
                    <Typography className={classes.textRight}>
                        {images.filter(el => el.location===filter.location && el.maxGuest > filter.guest).length>0 ? "+12 stays" : "No matches"} 
                    </Typography>
                </div>
                <Grid container className={classes.containerGallery}>
                    
                    {images.filter(el => el.location===filter.location && el.maxGuest > filter.guest).length>0 ?

                        images.filter(el => el.location===filter.location && el.maxGuest > filter.guest).map((image,i)=>(
                        
                        <Grid key={i} item xs={12}md={4}>
                            <Card 
                            img={image.img} 
                            superHost={image.superHost} 
                            type={image.type} 
                            rating={image.rating} 
                            description={image.description}
                            />
                        </Grid>
                    ))
                    :
                    handleMatch()
                    
                    }
                </Grid>
            </>
            :
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Loader type="ThreeDots" color="#333333" size={80} height={80}/> 
            </div>
            
            }
        </div>
    )
}

export default Main
