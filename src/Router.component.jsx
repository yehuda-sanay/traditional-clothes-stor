import {Route, Routes} from 'react-router-dom'
import { Home,Join, EthiopianWomenPage, EthiopianMenPage, SingIn } from './component/pages'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Join' element={<Join/>}/>
            <Route path='Ethiopian Women' element={<EthiopianWomenPage/>}/>
            <Route path='Ethiopian Men' element={<EthiopianMenPage/>}/>
            <Route path='Sing In' element={<SingIn/>}/>
        </Routes>
    )
}