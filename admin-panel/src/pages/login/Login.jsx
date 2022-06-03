 import "./login.scss"
import emailimg from "../User/email.jpg"
import pass from "../User/pass.png"
import { useState } from "react";
// import { Redirect } from "react-router-dom"

 const Login = () => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleLogin=(e)=>{
    e.preventDefault();
     
    let hardcodedCred = {
      email: 'admin@gmail.com',
      password: 'admin226'
  }
  if ((email == hardcodedCred.email) && (password == hardcodedCred.password)) {
    window.location.href='/dashboard'
} else {
 
    alert('Wrong Email or Password Combination');
}
}
   return (
  <form>
      <div className='main'>
    <div className='sub-main'>
      <div>
       <h1>Admin Login</h1>
       <div>
       <img src={emailimg} alt="email" className="email"/>
             <input type="text" placeholder="User name" className="name" onChange={e=>setEmail(e.target.value)}/>
           </div>
           <div className="second-input">
           <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"onChange={e=>setPassword(e.target.value)}/>
           </div>
          <div className="login-button">
          <button className="btn" type="submit" onClick={handleLogin} >Login</button>
          </div>
      </div>
      
      
      
      </div> 
    </div>
  </form>
   )
 }
 
 export default Login