import { useState } from "react";
import {useDispatch , useSelector} from "react-redux" ;
import { login } from "../../Redux/Login/action";
import { register } from "../../Redux/Registration/action";
import "./Login.css" ;


export const Login = () => {
    const [regName , setRegname] = useState("") ;
    const [regRole , setRole] = useState("") ;
    const [regEmail , setRegEmail] = useState("") ;
    const [regpassword , setRegpassword] = useState("") ;
    const [regMobile   , setregMobile] = useState("") ;
    const [regDes , setRegdes]  = useState("") ;
    const [logEmail , setlogEmail] = useState("") ;
    const [logPassword , setlogPassword] = useState("") ;
    const {loading , isAuthenticated , error} = useSelector((state) => state.login) ;
    const dispatch = useDispatch() ;

    const handleReg = () => {
       const regDetails = {
         regName ,
         regRole,
         regEmail,
         regpassword,
         regMobile,
         regDes
       }
      //  console.log(regDetails) ;
       dispatch(register(regDetails)) ;
    }
    if(isAuthenticated){   
    window.location.reload(false);
    }

    const handlelog =() => {
      const logDetails = {
        logEmail ,
        logPassword,
      }
      dispatch(login(logDetails));
    }

    return(
        <div className="LoginContainer">
            <div className="LoginBox">
            <img className="LoginLogo" style={{marginLeft:"195px"}} src="https://st4.depositphotos.com/11574170/25191/v/380/depositphotos_251916955-stock-illustration-user-glyph-color-icon.jpg?forcejpeg=true" id="loginLogo"/>
            <h1 style={{marginLeft:"180px"}}>Login</h1>  
            
            {/* login Box */}
            <div style={{display:"flex" }}> 
            <input className="username-login inputBox" type="text" placeholder="email" onChange={(e) => setlogEmail(e.target.value)}/>
            <input className="password-login inputBox" type="password" placeholder="password" onChange={(e) => setlogPassword(e.target.value)}/>
            </div>
            <button className="LoginBtn authBtn" style={{marginBottom:"40px" , marginRight:"60px"}} onClick={()=>handlelog()}>Click Me !</button>

            </div>
             
            {/* Registration Box */}
            <div className="RegistrationBox">
               <img className="regLogo" src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" id="regLogo" />
               <h1 style={{marginLeft:"165px"}}>Register</h1>        
                <div style={{display:"flex" , marginRight:"10px"}}>
                   <input className="name inputBox" style={{width:"40%" , marginTop:"5px"}} type="text" placeholder="name" onChange={(e)=> setRegname(e.target.value)}/>
                   <input className="username inputBox" style={{width:"40%" , marginTop:"4px"}} type="text" placeholder="role" onChange={(e)=> setRole(e.target.value)}/>    
                </div>
             <br/>           
               <input className="email inputBox" type="email" placeholder="email" onChange={(e)=>setRegEmail(e.target.value)}/><br/>          
            
               <div style={{display:"flex"}}>
                 <input className="password inputBox" type="password" placeholder="password" onChange={(e)=>setRegpassword(e.target.value)}/>           
                 <input className="mobile inputBox" type="number" placeholder="mobile" onChange={(e)=>setregMobile(e.target.value)}/><br/>
               </div>         
             
               <input className="description inputBox" type="text" placeholder="description" onChange={(e) => setRegdes(e.target.value)}/><br/>
               <button className="regBtn authBtn" style={{marginLeft:"100px" , marginBottom:"10px"}} onClick={()=>handleReg()}>Click Me !</button>
            </div>

        </div>
    )
}