import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Spreads = () => {
    let location = useLocation
    let [spreads, setSpreads] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("  http://localhost:2000/spreads");
        let resData = await response.json();
        setSpreads(resData);
  
      };
      fetchData();
    },[]);

    let handleDelete= (id) =>{
        setSpreads(spreads.filter(item => item.id !== id))
      }
  
    console.log(location);
    return ( 
        <div className="spreads">
        <div className="up">
            <div className="sps">
                <h2>Spread items</h2>

            </div>
        </div>

        <div className="down">
            {spreads.map((spreads) => 
            (<div className="list">
                <div className="list-item">
                     <img src= {spreads.img} />
                     <h4> {spreads.item}</h4>
                    <p>
    
                        {spreads.description} <br />
                        {spreads.kg} <br /> {spreads.pieces} <br />
                        {spreads.serves}

                         <h5>{spreads.mrp}</h5>
    
                          
                    </p>

                    <div className="btn">
              <div className="delete">
                <button onClick={()=>handleDelete(spreads.id)}> delete</button>
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
 
export default Spreads;
