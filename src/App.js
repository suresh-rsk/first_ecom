import './App.css';
import './components/Header/Header'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import MobileSection from './components/MobileSection/MobileSection';
import ComputerSection from './components/ComputerSection/ComputerSection';
import Accessories from './components/Accessories/Accessories';
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import {BrowserRouter} from 'react-router-dom'
import MainSection from './components/MainSection/MainSection';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
