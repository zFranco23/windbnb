import React from 'react'

import { Container, makeStyles, Typography } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import {locations} from '../DataImages';

const useStyles=makeStyles((theme)=>({
    root:{
        zIndex:"9999",
        position:"fixed",
        top:0,
        minHeight:"60vh",
        width:"100%",
        opacity:"1",
        backgroundColor:"#FFFFFF",
        transition:"0.5s ease-in-out",
        [theme.breakpoints.down("xs")]:{
            display:"none",
            zIndex:"-9999",
        }
    },
    container:{
        margin:"3rem 3rem",
    },
    containerSeeker:{
        backgroundColor:"#ffffff",
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        display:"flex",
    },
    seekerLeft:{
        width:"calc(100% / 3)",
        cursor:"pointer",
        boxSizing: "border-box",
        filter: "drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))",
        borderRadius: "16px",
    },
    seekerCenter:{
        width:"calc(100% / 3)",
        cursor:"pointer",
        boxSizing: "border-box",
        filter: "drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))",
        borderRadius: "16px",
    },
    seekerRight:{
        width:"calc(100% / 3)",
        display:"flex",
        justifyContent:"center",
    },
    btn:{
        color:"#F2F2F2",
        display:"flex",
        alignItems:"center",
        background: "rgba(235, 87, 87, 0.9)",
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        padding:"0.5rem 1.6rem",
        marginTop:"3px",
        marginBottom:"3px",
        cursor:"pointer",
    },
    search:{
        fontFamily:"Mulish",
        fontSize:"14px",
        marginLeft:"1rem",
    },
    textBold:{
        fontFamily:"Mulish",
        fontWeight:"800",
        fontSize:"10px",
        color:"#333333",
        textTransform:"uppercase",
    },
    secondary:{
        fontFamily:"Mulish",
        fontWeight:"400",
        color:"#333333",
    },
    content:{
        margin:"0.5rem 1.5rem",
        
    },
    containerLocations:{
        marginTop:"2rem",
        paddingLeft:"1rem",
        display:"flex",
        flexDirection:"column",
    },
    location:{
        display:"flex",
        marginBottom:"1rem",
        cursor:"pointer",
        [theme.breakpoints.down("xs")]:{
            marginBottom:"2rem",
        }
    },
    offMenu:{
        top:"-100%",
        opacity:"0",
    },
    active:{
        border: "2px solid #333333",
    },
    containerGuest:{
        marginTop:"2rem",
        display:"flex",
        justifyContent:"center",
    },
    containerContentGuest:{
        width:"calc(100% / 3)"
    },
    bold:{
        fontFamily:"Mulish",
        fontWeight:"700",
        color:"#333333",
    },
    normal:{
        fontFamily:"Mulish",
        fontWeight:"400",
        color:"#BDBDBD",
    },
    containerNumber:{
        display:"flex",
        marginTop:"1rem",
        marginBottom:"1rem",
    },
    addIcon:{
        color:"#BDBDBD",
        margin:0,
    },
    removeIcon:{
        color:"#BDBDBD",
        marginTop:0,
    },
    btnCount:{
       display:"flex",
       justifyContent:"center",
       border:"1px solid #828282",
       borderRadius:"4px",
       padding:"0 2px",
       cursor:"pointer",
    },
    count:{
        fontFamily:"Mulish",
        fontWeight:"700",
        color:"#333333",
        margin:"0 1rem",
    }

}))

function Menu({
    showMenu,
    handleShowMenu,
    placeSelected,
    handlePlaceSelected,
    addAdults,
    addChildren,
    removeAdults,
    removeChildren,
    countAdults,
    countChildren,
    active,
    handleActive,
    handleSearchFilter
    }) {
    const classes=useStyles();

    const handleSearch= () =>{
        handleShowMenu();
        handleSearchFilter(placeSelected,countAdults+countChildren);
    }
    return (
        <div className={`${classes.root} ${!showMenu && classes.offMenu}`}>
                <Container className={classes.container}>
                    <div className={classes.containerSeeker}>
                        <div className={`${classes.seekerLeft} ${active === 0 && classes.active}`} onClick={()=>handleActive(0)}>
                            <div className={classes.content}>
                                <Typography className={classes.textBold}>
                                    Location
                                </Typography>
                                <Typography className={classes.secondary}>
                                    {placeSelected ? placeSelected  : ""}
                                </Typography>
                            </div>
                        </div>
                        <div className={`${classes.seekerLeft} ${active === 1 && classes.active}`} onClick={()=>handleActive(1)}>
                            <div className={classes.content}>
                                <Typography className={classes.textBold}>
                                    Guests
                                </Typography>
                                <Typography className={classes.secondary}>
                                    {countAdults+countChildren===0 ? "Add" : countAdults+countChildren } guests
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.seekerRight}>
                            <div className={classes.btn} onClick={handleSearch}>
                                <SearchIcon />
                                <Typography className={classes.search}>
                                    Search
                                </Typography>
                            </div>
                        </div>                
                    </div>
                    {active===0 && <div className={classes.containerLocations}>
                        {locations.map((location,index)=>(
                            <div key={index} className={classes.location} onClick={()=>handlePlaceSelected(location.location)}>
                                <LocationOnIcon className={classes.locationIcon} />
                                <Typography className={classes.secondary}>
                                        {location.location}
                                </Typography>
                            </div>
                        ))}
                    </div>}
                    {
                        active===1 &&
                        <div className={classes.containerGuest}>
                            <div className={classes.containerContentGuest}>
                               <div className={classes.adults}>
                                    <Typography className={classes.bold} >
                                        Adults
                                    </Typography>
                                    <Typography className={classes.normal}>
                                        Ages 13 or above
                                    </Typography>
                                    <div className={classes.containerNumber}>
                                        <div className={classes.btnCount} onClick={removeAdults}>
                                            <RemoveIcon className={classes.removeIcon}/>
                                        </div>
                                        <Typography className={classes.count}>
                                            {countAdults}
                                        </Typography>
                                        <div className={classes.btnCount} onClick={addAdults}>
                                            <AddIcon className={classes.addIcon} />
                                        </div>
                                    </div>
                                </div>
                               <div className={classes.children}>
                                    <Typography className={classes.bold}> 
                                        Children
                                    </Typography>
                                    <Typography className={classes.normal}>
                                        Ages 2-12
                                    </Typography>
                                    <div className={classes.containerNumber}>
                                        <div className={classes.btnCount}onClick={removeChildren}>
                                            <RemoveIcon className={classes.removeIcon}/>
                                        </div>
                                        <Typography className={classes.count}>
                                            {countChildren}
                                        </Typography>
                                        <div className={classes.btnCount} onClick={addChildren}>
                                            <AddIcon className={classes.addIcon} />
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    }
                </Container>
            </div>
    )
}

export default Menu
