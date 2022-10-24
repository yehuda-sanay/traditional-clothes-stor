import {createContext, useEffect, useState } from "react"
import getEthiopianAccessoriesApi from "../servies/EthiopianAccessoriesApi";

export const ethiopianAccessoriesContext= createContext()

export default function EthiopianAccessoriesProvaider({children}){
    

    const [ethiopianAccessories, setEthiopianAccessories]=useState([]);
    useEffect(()=>{
        getEthiopianAccessoriesApi().then(res=>setEthiopianAccessories(res))
        
    },[])

    return(
        <ethiopianAccessoriesContext.Provider value={{ethiopianAccessories, setEthiopianAccessories}}>
            {children}
        </ethiopianAccessoriesContext.Provider>
    )
}