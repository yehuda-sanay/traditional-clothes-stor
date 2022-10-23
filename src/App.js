import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './component/featurs/header/Header.component';
import Footer from './component/featurs/footer/Footer.component';
import Routing from './Router.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import EthiopianMenProvaider from './contexts/EthiopianMenProvaider'
import EthiopianWomenPrivaider from './contexts/EthiopianWomenPrivaider'
import EthiopianGirlProvaider from './contexts/EthiopianGirlProvaider.component'
import EthiopianBoyProvaider from './contexts/EthiopianBoyProvaider.component'
import EthiopianCoupleProvaider from './contexts/EthiopianCoupleProvaider.component'
import EthiopianAccessoriesProvaider from './contexts/EthiopianAccessoriesProvaider.component'
import EthiopianJewelryProvaider from './contexts/EthiopianJewelryProvaider.component'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <EthiopianWomenPrivaider>
                <EthiopianMenProvaider>
                <EthiopianGirlProvaider>
                <EthiopianBoyProvaider>
                <EthiopianCoupleProvaider>
                <EthiopianAccessoriesProvaider>
                <EthiopianJewelryProvaider>
      <ShoppingCartProvider>
        
      <Header/>
      <Routing/>
      <Footer/>
      </ShoppingCartProvider>
      </EthiopianJewelryProvaider>
        </EthiopianAccessoriesProvaider>
        </EthiopianCoupleProvaider>
        </EthiopianBoyProvaider>
        </EthiopianGirlProvaider>
        </EthiopianMenProvaider>
        </EthiopianWomenPrivaider>
      </BrowserRouter>
    </div>
  );
}

export default App;
