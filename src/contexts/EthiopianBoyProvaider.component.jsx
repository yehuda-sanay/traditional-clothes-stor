import {createContext, useEffect, useState } from "react"
import getEthiopianBoyApi from "../servies/EthiopianBoyApi";

export const ethiopianBoyContext= createContext()

export default function EthiopianBoyProvaider({children}){

    const [ethiopianBoy, setEthiopianBoy]=useState([]);
    useEffect(()=>{
        getEthiopianBoyApi().then(res=>setEthiopianBoy(res))
        
    },[])

    return(
        <ethiopianBoyContext.Provider value={{ethiopianBoy, setEthiopianBoy}}>
            {children}
        </ethiopianBoyContext.Provider>
    )
}