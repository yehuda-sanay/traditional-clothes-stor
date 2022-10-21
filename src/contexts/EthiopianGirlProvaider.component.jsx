import {createContext, useEffect, useState } from "react"
import getEhtiopianGirlApi from "../servies/EthiopianGirlApi"

export const ethiopianGirlContext= createContext()

export default function EthiopianGirlProvaider({children}){

    const [ethiopianGirl, setEthiopianGirl]=useState([]);
    useEffect(()=>{
        getEhtiopianGirlApi().then(res=>setEthiopianGirl(res))
        
    },[])

    return(
        <ethiopianGirlContext.Provider value={{ethiopianGirl, setEthiopianGirl}}>
            {children}
        </ethiopianGirlContext.Provider>
    )
}