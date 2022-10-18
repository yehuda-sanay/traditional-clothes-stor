import {createContext, useEffect, useState} from 'react'
import usersApi from '../servies/UsersApi';

export const UsersContext=createContext();

export default function UserProvaider({children}){
    console.log(usersApi)
    const [users, setUsers]=useState([]);
    useEffect(()=>{usersApi().then(res=>res.json()).then(respons=>setUsers(respons))},[])
    console.log(users);
    return(
        <UsersContext.Provider>
        {children}
        </UsersContext.Provider>

    )
}