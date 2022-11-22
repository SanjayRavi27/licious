import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/ready.css'
const Ready = () => {
    let location = useLocation
    let [ready, setReady] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("  http://localhost:2000/readytocook");
        let resData = await response.json();
        setReady(resData);
  
      };
      fetchData();
    },[]);

    let handleDelete= (id) =>{
        setReady(ready.filter(item => item.id !== id))
      }

    console.log(location);
    return ( 

        <div className="ready">
        <div className="up">
            <div className="red">
                <h2>Ready to Cook</h2>

            </div>
        </div>

        <div className="down">
            {ready.map((ready) => 
            (<div className="list">
                <div className="list-item">
                     <img src= {ready.img} />
                     <h4> {ready.item}</h4>
                    <p>
    
                        {ready.description} <br />
                        {ready.kg} <br /> {ready.pieces} <br />
                        {ready.serves}

                         <h5>{ready.mrp}</h5>
    
                          
                    </p>

                    <div className="btn">
              <div className="delete">
                <button onClick={()=>handleDelete(ready.id)}> delete</button>
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
 
export default Ready;

