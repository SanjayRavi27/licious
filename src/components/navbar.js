// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import Home from './home';
import Chicken from './Chicken';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Logo from '../styles/licious-logo.svg'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="left">
            
            <div className="icon">
            <li> <img src={Logo} alt="" /> </li>
            </div>
            
                    
                        <div className='center'>
                        
                        <li><Link to={"/"}>Home</Link></li>
                    <li> <Link to={"/aboutus"}>About Us</Link></li>
                   
                        

                    </div>
                    
                  
                
               </div>

               

            <div className="right">
                <input type="text" placeholder=" search "  />
                <button>search</button>
              
                
            </div>
            <div className='login'>
                  
            {/* <Link to="/cart" ><svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="red" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></Link> */}

                <Link to="/login"> <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30" fill="red" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg></Link>
           
            </div>
        </div>

     );
}
 
export default Navbar;