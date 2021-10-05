import './Navbar.css'
import MobileSection from '../MobileSection/MobileSection';
import ComputerSection from '../ComputerSection/ComputerSection';
import Accessories from '../Accessories/Accessories';
import Register from '../Auth/Register'
import Login from '../Auth/Login'
import {Route} from 'react-router'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div id="navbar">
        <ul id="nav">
           <li><Link to='/'>Mobiles</Link></li> 
           <li><Link to='/computer'>Computers</Link></li>
           <li><Link to='accessories'>Accessories</Link></li> 
           <li><Link to='/login'>Login</Link></li>
           <li><Link to='/register'>Register</Link></li><br/>
           
        </ul>
        <Route path='/' exact component={MobileSection} />
        <Route path='/computer' exact component={ComputerSection} />
        <Route path='/accessories' exact component={Accessories} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        
        </div>
        
    )
};

export default Navbar;