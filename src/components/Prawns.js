import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Prawns = () => {
    let location = useLocation
    let [prawns, setPrawns] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("  http://localhost:2000/prawns");
        let resData = await response.json();
        setPrawns(resData);
  
      };
      fetchData();
    },[]);

    let handleDelete= (id) =>{
        setPrawns(prawns.filter(item => item.id !== id))
      }
  
    console.log(location);
    return ( 
        <div className="prawns">
        <div className="up">
            <div className="pra">
                <h2>Prawn items</h2>

            </div>
        </div>

        <div className="down">
            {prawns.map((prawns) => 
            (<div className="list">
                <div className="list-item">
                     <img src= {prawns.img} />
                     <h4> {prawns.item}</h4>
                    <p>
    
                        {prawns.description} <br />
                        {prawns.kg} <br /> {prawns.pieces} <br />
                        {prawns.serves}

                         <h5>{prawns.mrp}</h5>
    
                          
                    </p>

                    <div className="btn">
              <div className="delete">
                <button onClick={()=>handleDelete(prawns.id)}> delete</button>
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
 
export default Prawns;
