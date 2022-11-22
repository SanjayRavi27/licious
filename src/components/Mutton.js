import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/mutton.css'
const Mutton = () => {
    let location = useLocation
    let [mutton, setMutton] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("  http://localhost:2000/mutton");
        let resData = await response.json();
        setMutton(resData);
  
      };
      fetchData();
    },[]);

    let handleDelete= (id) =>{
        setMutton(mutton.filter(item => item.id !== id))
      }
  
    console.log(location);

    return ( 
        <div className="mutton">
            <div className="up">
                <div className="mut">
                    <h2>Mutton items</h2>

                </div>
            </div>

            <div className="down">
                {mutton.map((mutton) => 
                (<div className="list">
                    <div className="list-item">
                         <img src= {mutton.img} />
                         <h4> {mutton.item}</h4>
                        <p>
        
                            {mutton.description} <br />
                            {mutton.kg} <br /> {mutton.pieces} <br />
                            {mutton.serves}
    
                             <h5>{mutton.mrp}</h5>
        
                              
                        </p>

                        <div className="btn">
              <div className="delete">
                <button onClick={()=>handleDelete(mutton.id)}> delete</button>
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
 
export default Mutton;
