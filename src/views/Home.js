import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'


import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import DropdownMenu from '../components/DropdownMenu';

import {locations} from '../DataImages';
const useStyles= makeStyles(()=>({
    root:{
        position:"relative",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        transition:"0.5s ease-in-out",
    },
    bef:{
        "&:before":{
            transition:"0.5s ease-in-out",
            content:"''",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
        }
    }

}))
function Home() {

    const [showMenu,setShowMenu]=useState(false);
    const [placeSelected,setPlaceSelected]=useState();
    const [countAdults,setCountAdults]=useState(0);
    const [countChildren,setCountChildren]=useState(0);
    const [active,setActive]=useState(0);
    const [filter,setFilter]=useState();

    const handleActive= (i) =>{
        setActive(i);
    }
    const handlePlaceSelected = (place)=>{
        setPlaceSelected(place);
    }

    const handleShowMenu = () =>{
        setShowMenu(!showMenu);
    }
    const addAdults = ()=>{
        setCountAdults(countAdults+1);
    }
    const addChildren = ()=>{
        setCountChildren(countChildren+1);
    }

    const removeAdults = () =>{
        if(countAdults >0){
            setCountAdults(countAdults-1);
        }
    }

    const removeChildren = () =>{
        if(countChildren>0){
            setCountChildren(countChildren-1)
        }
        
    }

    const handleSearchFilter = (place,guest) =>{
        setFilter({location:place,guest:guest});
    }

    useEffect(()=>{
        setPlaceSelected(locations[0].location);
        setFilter({location:locations[0].location,guest:0})
    },[])


    const classes=useStyles();
    return (
        <div className={`${classes.root} ${showMenu && classes.bef}`}>
            <DropdownMenu
            active={active}
            handleActive={handleActive}
            handlePlaceSelected={handlePlaceSelected} 
            placeSelected={placeSelected} 
            showMenu={showMenu} 
            handleShowMenu={handleShowMenu}
            addAdults={addAdults}
            addChildren={addChildren}
            removeAdults={removeAdults}
            removeChildren={removeChildren}
            countAdults={countAdults}
            countChildren={countChildren}
            handleSearchFilter={handleSearchFilter}
            
        />
            <Header countAdults={countAdults} countChildren={countChildren} placeSelected={placeSelected} handleShowMenu={handleShowMenu}/>
            <Main filter={filter}/>
            <Footer />
        </div>
    )
}

export default Home
