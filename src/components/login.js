import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'

const UserLogin = () => {
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let navigate = useNavigate()

  let handleSubmit = () =>{
    if((email == "user@gmail.com") && (password == 1234)){
      navigate("/user-portal")
    }else{
      alert("invalid username or password")
    }
  }
    return ( 
        <section className="userLogin">
      
        <div className="user-page">
        <h1>UserLogin</h1>
        <form className="adm-form" action="" onSubmit={handleSubmit}>
          <label htmlFor="">EMAIL</label>
          <br />
          <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="adm-btns">
            <button>LOG IN</button>
        </div>
        
        </form>
        </div>
        </section>
     );
}
 
export default UserLogin;