import Navbar from './navbar';
import Banner from '../styles/banner.jpg'
import '../styles/home.css'
import Card from 'react-bootstrap/Card';
import Chicken1 from '../styles/Chicken.png'
import Mutton from '../styles/Mutton.png'
import Fish from '../styles/Fish.png'
import Todays from '../styles/TodaysDeals.png'
import Ready from '../styles/readytocook.png'
import Prawn from '../styles/Prawn.png'
import Coldcut from '../styles/Coldcuts.png'
import Spreads from '../styles/spreads.png'
import Eggs from '../styles/Eggs.png'
import Biriyani from '../styles/Biryani.png'
import Combo from '../styles/Combo.png'
import Chicken from './Chicken';
import { Link } from 'react-router-dom';
import Way from '../styles/way.webp'


const Home = () => {
    return ( 
        <div className='home'>
          
            <div className='banner'>
            <img width="100%" src={Banner} alt="" />
         
        </div>

        <div className='homelist'>
        <div className="items">
            <h3>Shop by categories</h3> 
            <p>Freshest meats just for you</p>
        </div>

        <div className="grid">

            <div className="row1">
            

            <div className='chicken'>
               
                <Link to="/chicken"><img src={Chicken1} alt="" /></Link>
            <p>Chicken</p>
                
            
            </div>

            <div className='mutton'>
            <Link to="/mutton"><img src={Mutton} alt="" /></Link>
            <p>Mutton</p>
            </div>


            <div className='fish'>
            <Link to="/fish" href=""><img src={Fish} alt="" /></Link>
            <p>Fish</p>
            </div>

            </div>

            <div className="row2">
                
            <div className='ready'>
            <Link  to="/readytocook" ><img src={Ready} alt="" /></Link>
            <p>Ready to Cook</p>

            </div>

            <div className='prawns'>
            <Link to="/prawns"><img src={Prawn} alt="" /></Link>
            <p>Prawns</p>
            </div>


           

            <div className='spreads'>
            <Link to="/spreads"><img src={Spreads} alt="" /></Link>
            <p>Spreads</p>
                
            </div>

            </div>

            <div className="row3">
                
            <div className='eggs'>
            <Link to="/eggs"><img src={Eggs} alt="" height="150px" /></Link>
            <p>Eggs</p>
            </div>

            <div className='biryani'>
            <Link to="/biryani"><img src={Biriyani} alt="" /></Link>
            <p>Biryani</p>
            </div>

                      </div>




        
            
            
           
            
           
           
            
           
            
            
           
            
            

       

        </div>

       

        </div>

        



        </div>
        



    
     );
}
 
export default Home;
