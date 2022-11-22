import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Biriyani = () => {
    let location = useLocation
    let [biryani, setBiryani] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("  http://localhost:2000/biriyani");
        let resData = await response.json();
        setBiryani(resData);
  
      };
      fetchData();
    },[]);

    let handleDelete= (id) =>{
        setBiryani(biryani.filter(item => item.id !== id))
      }
    
    return ( 
        <div className="biryani">
        <div className="up">
            <div className="bir">
                <h2>Biryani items</h2>

            </div>
        </div>

        <div className="down">
            {biryani.map((biryani) => 
            (<div className="list">
                <div className="list-item">
                     <img src= {biryani.img} />
                     <h4> {biryani.item}</h4>
                    <p>
    
                        {biryani.description} <br />
                        {biryani.kg} <br /> {biryani.pieces} <br />
                        {biryani.serves}

                         <h5>{biryani.mrp}</h5>
    
                          
                    </p>

                    <div className="btn">
              <div className="delete">
                <button onClick={()=>handleDelete(biryani.id)}> delete</button>
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
 
export default Biriyani;

