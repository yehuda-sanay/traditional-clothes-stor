import {Route, Routes} from 'react-router-dom'
import { Home,Join, EthiopianWomenPage, EthiopianMenPage,SingIn,EthiopianGirlPage,EthiopianBoyPage } from './component/pages'
import EthiopianMenProvaider from './contexts/EthiopianMenProvaider'
import EthiopianWomenPrivaider from './contexts/EthiopianWomenPrivaider'
import EthiopianChoicePage from './component/pages/EthiopianChoicePage/EthiopianChocePage.component'
import EthiopianGirlProvaider from './contexts/EthiopianGirlProvaider.component'
import EthiopianBoylProvaider from './contexts/EthiopianBoyProvaider.component'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Join' element={<Join/>}/>
            <Route path='EthiopianWomen' element={<EthiopianWomenPrivaider><EthiopianWomenPage/></EthiopianWomenPrivaider>}/>
            <Route path='EthiopianMen' element={<EthiopianMenProvaider><EthiopianMenPage/></EthiopianMenProvaider>}/>
            <Route path='EthiopianGirl' element={<EthiopianGirlProvaider><EthiopianGirlPage/></EthiopianGirlProvaider>}/>
            <Route path='EthiopianBoy' element={<EthiopianBoylProvaider><EthiopianBoyPage/></EthiopianBoylProvaider>}/>
            <Route path='Sing In' element={<SingIn/>}/>
            <Route path='Ethiopian Choice Page' element={<EthiopianChoicePage/>}/>
        </Routes>
    )
}