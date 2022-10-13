import {Route, Routes} from 'react-router-dom'
import { Home,SingIn } from './component/pages'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Sing In' element={<SingIn/>}/>
        </Routes>
    )
}