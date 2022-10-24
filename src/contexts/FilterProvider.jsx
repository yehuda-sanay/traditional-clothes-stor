import {createContext, useEffect, useState } from "react"


export const filterContext= createContext()

export default function FilterProvaider({children}){
    const [user,setUser]=useState(false)
    const [filteritem, setFilteritem]=useState([]);
    

    return(
        <filterContext.Provider value={{filteritem, setFilteritem,user,setUser}}>
            {children}
        </filterContext.Provider>
    )
}