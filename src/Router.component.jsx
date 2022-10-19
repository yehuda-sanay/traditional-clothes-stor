import {Route, Routes} from 'react-router-dom'
import { Home,Join, EthiopianWomenPage, EthiopianMenPage, SingIn } from './component/pages'
import EthiopianMenProvaider from './contexts/EthiopianMenProvaider'
import EthiopianWomenPrivaider from './contexts/EthiopianWomenPrivaider'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Join' element={<Join/>}/>
            <Route path='EthiopianWomen' element={<EthiopianWomenPrivaider><EthiopianWomenPage/></EthiopianWomenPrivaider>}/>
            <Route path='EthiopianMen' element={<EthiopianMenProvaider><EthiopianMenPage/></EthiopianMenProvaider>}/>
            <Route path='Sing In' element={<SingIn/>}/>
        </Routes>
    )
}