import {createContext, useEffect, useState } from "react"
import getEhtiopianCoupleApi from "../servies/EthiopianCoupleApi"

export const ethiopianCoupleContext= createContext()

export default function EthiopianCoupleProvaider({children}){

    const [ethiopianCouple, setEthiopianCouple]=useState([]);
    useEffect(()=>{
        getEhtiopianCoupleApi().then(res=>setEthiopianCouple(res))
        
    },[])

    return(
        <ethiopianCoupleContext.Provider value={{ethiopianCouple, setEthiopianCouple}}>
            {children}
        </ethiopianCoupleContext.Provider>
    )
}