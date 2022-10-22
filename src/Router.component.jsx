import {Route, Routes} from 'react-router-dom'
import { Home,Join, EthiopianWomenPage, EthiopianMenPage,SingIn,EthiopianGirlPage,EthiopianBoyPage,EthiopianCouplePage,EthiopianAccessoriesPage,EthiopianJewelryPage,JoinSingInPage } from './component/pages'
import EthiopianMenProvaider from './contexts/EthiopianMenProvaider'
import EthiopianWomenPrivaider from './contexts/EthiopianWomenPrivaider'
import EthiopianChoicePage from './component/pages/EthiopianChoicePage/EthiopianChocePage.component'
import EthiopianGirlProvaider from './contexts/EthiopianGirlProvaider.component'
import EthiopianBoyProvaider from './contexts/EthiopianBoyProvaider.component'
import EthiopianCoupleProvaider from './contexts/EthiopianCoupleProvaider.component'
import EthiopianAccessoriesProvaider from './contexts/EthiopianAccessoriesProvaider.component'
import EthiopianJewelryProvaider from './contexts/EthiopianJewelryProvaider.component'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Join' element={<Join/>}/>
            <Route path='EthiopianWomen' element={<EthiopianWomenPrivaider><EthiopianWomenPage/></EthiopianWomenPrivaider>}/>
            <Route path='EthiopianMen' element={<EthiopianMenProvaider><EthiopianMenPage/></EthiopianMenProvaider>}/>
            <Route path='EthiopianGirl' element={<EthiopianGirlProvaider><EthiopianGirlPage/></EthiopianGirlProvaider>}/>
            <Route path='EthiopianBoy' element={<EthiopianBoyProvaider><EthiopianBoyPage/></EthiopianBoyProvaider>}/>
            <Route path='EthiopianCouple' element={<EthiopianCoupleProvaider><EthiopianCouplePage/></EthiopianCoupleProvaider>}/>
            <Route path='EthiopianAccessories' element={<EthiopianAccessoriesProvaider><EthiopianAccessoriesPage/></EthiopianAccessoriesProvaider>}/>
            <Route path='EthiopianJewelry' element={<EthiopianJewelryProvaider><EthiopianJewelryPage/></EthiopianJewelryProvaider>}/>
            <Route path='JoinSingInPage' element={<JoinSingInPage/>}/>
            <Route path='Sing In' element={<SingIn/>}/>
            <Route path='Ethiopian Choice Page' element={<EthiopianChoicePage/>}/>
        </Routes>
    )
}