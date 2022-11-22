import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/fish.css'
const Fish = () => {
    let location = useLocation
    let [fish, setFish] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("  http://localhost:2000/fish");
        let resData = await response.json();
        setFish(resData);
  
      };
      fetchData();
    },[]);

    let handleDelete= (id) =>{
        setFish(fish.filter(item => item.id !== id))
      }

    
  
    console.log(location);
    return ( 
    <div className="Fish">
        <div className="up">
            <div className="fis">
                <h2>Fish items</h2>

            </div>
        </div>

        <div className="down">
            {fish.map((fish) => 
            (<div className="list">
                <div className="list-item">
                     <img src= {fish.img} />
                     <h4> {fish.item}</h4>
                    <p>
    
                        {fish.description} <br />
                        {fish.kg} <br /> {fish.pieces} <br />
                        {fish.serves}

                         <h5>{fish.mrp}</h5>

                         <div className="btn">
                         <div className="delete">
                <button onClick={()=>handleDelete(fish.id)}> delete</button>
              </div>
              <div className="add">
              <button>add to cart</button>
              </div>
                        
                    </div>
    
                          
                    </p>

                   

                    

                    

    
    
    
    

   
    </div>
    
  </div>
   )
)}
        
    </div>
   
    
</div>


);
       
    
}
 
export default Fish;
