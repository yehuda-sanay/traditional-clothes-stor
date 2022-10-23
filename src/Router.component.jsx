import {Route, Routes} from 'react-router-dom'
import { Home,Join, EthiopianWomenPage, EthiopianMenPage,SingIn,EthiopianGirlPage,EthiopianBoyPage,EthiopianCouplePage,EthiopianAccessoriesPage,EthiopianJewelryPage,JoinSingInPage,CartPage } from './component/pages'
import EthiopianChoicePage from './component/pages/EthiopianChoicePage/EthiopianChocePage.component'
import EthiopianMenProvaider from './contexts/EthiopianMenProvaider'
import EthiopianWomenPrivaider from './contexts/EthiopianWomenPrivaider'
import EthiopianGirlProvaider from './contexts/EthiopianGirlProvaider.component'
import EthiopianBoyProvaider from './contexts/EthiopianBoyProvaider.component'
import EthiopianCoupleProvaider from './contexts/EthiopianCoupleProvaider.component'
import EthiopianAccessoriesProvaider from './contexts/EthiopianAccessoriesProvaider.component'
import EthiopianJewelryProvaider from './contexts/EthiopianJewelryProvaider.component'
// import {CartProvider} from 'react-use-cart'
// import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

export default function Routing(){
    return(
            // <CartProvider>
            
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
        
        
            // </CartProvider>
    )
}