import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Eggs = () => {
    let location = useLocation
    let [eggs, setEggs] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("  http://localhost:2000/eggs");
        let resData = await response.json();
        setEggs(resData);
  
      };
      fetchData();
    },[]);
    let handleDelete= (id) =>{
        setEggs(eggs.filter(item => item.id !== id))
      }
    return ( 
        <div className="eggs">
        <div className="up">
            <div className="egs">
                <h2>Egg items</h2>

            </div>
        </div>

        <div className="down">
            {eggs.map((eggs) => 
            (<div className="list">
                <div className="list-item">
                     <img src= {eggs.img} />
                     <h4> {eggs.item}</h4>
                    <p>
    
                        {eggs.description} <br />
                        {eggs.kg} <br /> {eggs.pieces} <br />
                        {eggs.serves}

                         <h5>{eggs.mrp}</h5>
    
                          
                    </p>

                    <div className="delete">
                <button onClick={()=>handleDelete(eggs.id)}> delete</button>
              </div>
              <div className="add">
              <button>add to cart</button>
              </div>
   

    
    
    
    

   
    </div>
    
  </div>
   )
)}
        
    </div>
   
    
</div>


     );
}
 
export default Eggs;

