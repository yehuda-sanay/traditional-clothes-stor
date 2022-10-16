import { createContext, useEffect, useState } from 'react'
import getEhtiopianWomenApi from '../servies/EthiopianWomenApi'
export const ethiopianWomenContext = createContext()

export default function EthiopianWomenPrivaider({children}){
    const [ethiopianWomen,setEthiopianWomen]= useState([])
    useEffect(()=>{getEhtiopianWomenApi()
        .then(res=>setEthiopianWomen(res))},[])
       

    return(
        <ethiopianWomenContext.Provider value={{ethiopianWomen,setEthiopianWomen}}>
            {children}
        </ethiopianWomenContext.Provider>
    )
}