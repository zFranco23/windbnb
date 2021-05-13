
import React from 'react'



import DropdownMobile from './DropdownMobile';
import Menu from './Menu';

function DropdownMenu({
    showMenu,
    handleShowMenu,
    handlePlaceSelected,
    placeSelected,
    addAdults,
    addChildren,
    removeAdults,
    removeChildren,
    countAdults,
    countChildren,
    handleActive,
    active,
    handleSearchFilter,
    handleMatches
    }) {

    return (
        <>
            <Menu 
            showMenu={showMenu} 
            handleShowMenu={handleShowMenu}
            placeSelected={placeSelected} 
            handlePlaceSelected={handlePlaceSelected}
            addAdults={addAdults}
            addChildren={addChildren}
            removeAdults={removeAdults}
            removeChildren={removeChildren}
            countAdults={countAdults}
            countChildren={countChildren}
            handleActive={handleActive}
            active={active}
            handleSearchFilter={handleSearchFilter}
            handleMatches={handleMatches}
            />
            <DropdownMobile 
            showMenu={showMenu} 
            placeSelected={placeSelected} 
            handleShowMenu={handleShowMenu} 
            handlePlaceSelected={handlePlaceSelected}
            addAdults={addAdults}
            addChildren={addChildren}
            removeAdults={removeAdults}
            removeChildren={removeChildren}
            countAdults={countAdults}
            countChildren={countChildren}
            handleActive={handleActive}
            active={active}
            handleSearchFilter={handleSearchFilter}
            handleMatches={handleMatches}
            />
        </>
    )
}

export default DropdownMenu
