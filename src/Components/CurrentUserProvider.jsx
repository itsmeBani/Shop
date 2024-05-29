import React, {createContext, useEffect, useState} from "react";
export const CurrentUserContext = createContext({});
export const CurrenUserProvider = ({children}) => {

const session=""
    const [opensignin, setopensignin] = React.useState(false);
    const handleOpenSignin = () => setopensignin((cur) => !cur);
    return(


        <CurrentUserContext.Provider value={{session,opensignin,handleOpenSignin,setopensignin}} >

            {children}


        </CurrentUserContext.Provider>


    )
}