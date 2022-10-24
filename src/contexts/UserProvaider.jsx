import {createContext, useEffect, useState} from 'react'
import usersApi from '../servies/UsersApi';

export const UsersContext=createContext();

export default function UserProvaider({children}){
    // console.log(usersApi)
    const [users, setUsers]=useState([]);
    const [isLogin, setisLogin]=useState(false);

    useEffect(()=>{usersApi().then(res=>res.json()).then(respons=>setUsers(respons))},[])
    
    return(
        <UsersContext.Provider value={{users,setUsers,isLogin,setisLogin}}>
        {children}
        </UsersContext.Provider>

    )
}