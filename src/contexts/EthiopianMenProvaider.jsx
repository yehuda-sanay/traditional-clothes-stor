import {createContext, useEffect, useState } from "react"
import getEhtiopianMenApi from "../servies/EthiopianMenApi"

export const ethiopianMenContext= createContext()

export default function EthiopianMenProvaider({children}){

    const [ethiopianMen, setEthiopianMen]=useState([]);
    useEffect(()=>{
        getEhtiopianMenApi().then(res=>setEthiopianMen(res))
        
    },[])

    return(
        <ethiopianMenContext.Provider value={{ethiopianMen, setEthiopianMen}}>
            {children}
        </ethiopianMenContext.Provider>
    )
}