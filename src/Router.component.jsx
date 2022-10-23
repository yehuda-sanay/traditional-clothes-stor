import {Route, Routes} from 'react-router-dom'
import { Home,Join, EthiopianWomenPage, EthiopianMenPage,SingIn,EthiopianGirlPage,EthiopianBoyPage,EthiopianCouplePage,EthiopianAccessoriesPage,EthiopianJewelryPage,JoinSingInPage,CartPage } from './component/pages'
import EthiopianChoicePage from './component/pages/EthiopianChoicePage/EthiopianChocePage.component'



export default function Routing(){
    return(
            
            
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Join' element={<Join/>}/>
            <Route path='EthiopianWomen' element={<EthiopianWomenPage/>}/>
            <Route path='EthiopianMen' element={<EthiopianMenPage/>}/>
            <Route path='EthiopianGirl' element={<EthiopianGirlPage/>}/>
            <Route path='EthiopianBoy' element={<EthiopianBoyPage/>}/>
            <Route path='EthiopianCouple' element={<EthiopianCouplePage/>}/>
            <Route path='EthiopianAccessories' element={<EthiopianAccessoriesPage/>}/>
            <Route path='EthiopianJewelry' element={<EthiopianJewelryPage/>}/>
            <Route path='JoinSingInPage' element={<JoinSingInPage/>}/>
            <Route path='cartPage' element={<CartPage/>}/>
            <Route path='Sing In' element={<SingIn/>}/>
            <Route path='Ethiopian Choice Page' element={<EthiopianChoicePage/>}/>
        </Routes>
        
        
            
    )
}