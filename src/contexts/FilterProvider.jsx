import {createContext, useEffect, useState } from "react"


export const filterContext= createContext()

export default function FilterProvaider({children}){

    const [filteritem, setFilteritem]=useState([]);
    

    return(
        <ethiopianCoupleContext.Provider value={{filteritem, setFilteritem}}>
            {children}
        </ethiopianCoupleContext.Provider>
    )
}