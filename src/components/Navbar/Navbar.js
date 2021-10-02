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
        <div>
        <nav className="navbar">
           <h2><Link to='/'>mobiles</Link></h2> 
           <h2><Link to='/computer'>computers</Link></h2>
           <h2><Link to='accessories'>accessories</Link></h2> 
           <h2><Link to='/login'>Login</Link></h2>
           <h2><Link to='/register'>Register</Link></h2>
        </nav>
        <Route path='/' exact component={MobileSection} />
        <Route path='/computer' exact component={ComputerSection} />
        <Route path='/accessories' exact component={Accessories} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        </div>
    )
};

export default Navbar;