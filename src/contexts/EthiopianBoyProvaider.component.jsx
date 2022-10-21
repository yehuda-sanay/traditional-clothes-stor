import {createContext, useEffect, useState } from "react"
import getEhtiopianBoyApi from "../servies/EthiopianGirlApi"

export const ethiopianBoyContext= createContext()

export default function EthiopianBoyProvaider({children}){

    const [ethiopianBoy, setEthiopianBoy]=useState([]);
    useEffect(()=>{
        getEhtiopianBoyApi().then(res=>setEthiopianBoy(res))
        
    },[])

    return(
        <ethiopianBoyContext.Provider value={{ethiopianBoy, setEthiopianBoy}}>
            {children}
        </ethiopianBoyContext.Provider>
    )
}