import {Route, Routes} from 'react-router-dom'
import { Home,Join, EthiopianWomenPage, EthiopianMenPage,SingIn,EthiopianGirlPage,EthiopianBoyPage,EthiopianCouplePage,EthiopianAccessoriesPage,EthiopianJewelryPage,JoinSingInPage,CartPage } from './component/pages'
import EthiopianMenProvaider from './contexts/EthiopianMenProvaider'
import EthiopianWomenPrivaider from './contexts/EthiopianWomenPrivaider'
import EthiopianChoicePage from './component/pages/EthiopianChoicePage/EthiopianChocePage.component'
import EthiopianGirlProvaider from './contexts/EthiopianGirlProvaider.component'
import EthiopianBoyProvaider from './contexts/EthiopianBoyProvaider.component'
import EthiopianCoupleProvaider from './contexts/EthiopianCoupleProvaider.component'
import EthiopianAccessoriesProvaider from './contexts/EthiopianAccessoriesProvaider.component'
import EthiopianJewelryProvaider from './contexts/EthiopianJewelryProvaider.component'
import {CartProvider} from 'react-use-cart'

export default function Routing(){
    return(
            <CartProvider>
                <EthiopianWomenPrivaider>
                <EthiopianMenProvaider>
                <EthiopianGirlProvaider>
                <EthiopianBoyProvaider>
                <EthiopianCoupleProvaider>
                <EthiopianAccessoriesProvaider>
                <EthiopianJewelryProvaider>
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
            <Route path='CartPage' element={<CartPage/>}/>
            <Route path='Sing In' element={<SingIn/>}/>
            <Route path='Ethiopian Choice Page' element={<EthiopianChoicePage/>}/>
        </Routes>
        </EthiopianJewelryProvaider>
        </EthiopianAccessoriesProvaider>
        </EthiopianCoupleProvaider>
        </EthiopianBoyProvaider>
        </EthiopianGirlProvaider>
        </EthiopianMenProvaider>
        </EthiopianWomenPrivaider>
            </CartProvider>
    )
}