import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './component/featurs/header/Header.component';
import Footer from './component/featurs/footer/Footer.component';
import Routing from './Router.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routing/>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
