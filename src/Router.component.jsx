import {Route, Routes} from 'react-router-dom'
import { Home,SingIn, EthiopianWomenPage } from './component/pages'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Sing In' element={<SingIn/>}/>
            <Route path='Ethiopian Women' element={<EthiopianWomenPage/>}/>
        </Routes>
    )
}