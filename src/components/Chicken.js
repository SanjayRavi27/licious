import Navbar from "./navbar";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/chicken.css'
import Farm from '../styles/farm.png'
import Chemical from '../styles/chemical.png'
import { Button, Card } from "react-bootstrap";

const Chicken = () => {

  
    let location = useLocation
    let [chicken, setChicken] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch(" http://localhost:2000/Chicken");
        let resData = await response.json();
        setChicken(resData);
  
      };
      fetchData();
    },[]);
  
    console.log(location);

    let handleDelete= (id) =>{
      setChicken(chicken.filter(item => item.id !== id))
    }
  
    return ( 
        <div className="chicken">
            <div className="up">
                <div className="chick">
                <h2>chicken items</h2>

                </div>
                </div>

            <div className="down">
            {chicken.map((chicken) => 
           (<div className="list">
           <div className="list-item">
            <img src= {chicken.img} />
            <h4> {chicken.item}</h4>
            <p>
            
            {chicken.description} <br />
            {chicken.kg} <br /> {chicken.pieces} <br />
            {chicken.serves}
        
            <h5>{chicken.mrp}</h5>
           
            
           
            </p>

            <div className="btn">
              <div className="delete">
                <button onClick={()=>handleDelete(chicken.id)}> delete</button>
              </div>
              <div className="add">
              <button>add to cart</button>
              </div>
              
             
            </div>
           

            
            
            
            

           
            </div>
            
          </div>
           )
        )}
                
            </div>
           
            
        </div>
     );
}
 
export default Chicken;