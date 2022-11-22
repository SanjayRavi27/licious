
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Home from './components/home';
import AboutUs from './components/aboutus';
import Chicken from './components/Chicken';
import Mutton from './components/Mutton';
import Fish from './components/Fish';
import Ready from './components/Ready';
import Prawns from './components/Prawns';
import Spreads from './components/Spreads';
import Eggs from './components/Eggs';
import Biriyani from './components/Biryani';
import UserLogin from './components/login';
// import Cart from './components/cart';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/footer';



function App() {
  let [cart,setCart] = useState([])
  
  
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/chicken' element={<Chicken/>}/>
        <Route path='/mutton' element={<Mutton/>}/>
        <Route path='/fish' element={<Fish/>}/>
        <Route path='/readytocook' element={<Ready/>}/>
        <Route path='/prawns' element={<Prawns/>}/>
        <Route path='/spreads' element={<Spreads/>}/>
        <Route path='/eggs' element={<Eggs/>}/>
        <Route path='/biryani' element={<Biriyani/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        
        
       
      </Routes>
      <Footer/>

      </BrowserRouter>

     
    </div>
  );
}

export default App;
