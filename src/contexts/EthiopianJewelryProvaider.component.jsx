import {createContext, useEffect, useState } from "react"
import getEthiopianjewelryApi from "../servies/EthiopianJeweleryApi";

export const ethiopianJewelryContext= createContext()

export default function EthiopianJewelryProvaider({children}){

    const [ethiopianJewelry, setEthiopianJewelry]=useState([]);
    useEffect(()=>{
        getEthiopianjewelryApi().then(res=>setEthiopianJewelry(res))
        
    },[])

    return(
        <ethiopianJewelryContext.Provider value={{ethiopianJewelry, setEthiopianJewelry}}>
            {children}
        </ethiopianJewelryContext.Provider>
    )
}