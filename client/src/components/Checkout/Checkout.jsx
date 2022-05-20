import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartdata } from "../../Redux/CartData/action";
import {Link} from "react-router-dom" ;
import "./checkout.css" ;
import { FcPortraitMode } from 'react-icons/fc';
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { AiOutlineArrowRight } from 'react-icons/ai';

export const Checkout = () => {
    const dispatch = useDispatch() ;
    const {cartData , loading } = useSelector((state)=> state.cart) ;
    const [total , setTotal] = useState(0) ;
    const [userToken , setuserToken] = useState("") ;

    useEffect(()=>{
        dispatch(fetchCartdata()) ;
    },[])


    useEffect(()=>{
        var token = localStorage.getItem("token") ;
        setuserToken(token) ;
    },[])
  
    useEffect(()=>{
        var sum = 0 ;
      cartData.map((el)=>{
          sum += (el.quantiy*el.arr.price)
        })
        setTotal(sum) ;
    },[cartData])
    
    const handleAlert = () => {
      alert(`Payment Done of Rs.${total}`)
    }

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
   console.log(userToken) ;
    return(
        <div className="checkoutContainer">
           <div className="FirstContainer">
            <div className="FirstContainerPart1">
            {cartData.map((el,id)=>{
               return(
                   <div  key={id}>
                       <div className="FirstContainerBox">
                       <img src={el.arr.img1} style={{width:"80px"}}></img>
                       <div className="smallConatinerDiv">
                       <p>{el.arr.name} <span><p>QTY: {el.quantiy}</p></span></p>
                       <p style={{fontWeight:"bolder" , fontSize:"16px"}}>Rs.{el.quantiy*el.arr.price}</p>
                       </div>
                       </div>   
                   </div>   
               )
            })}
            </div>
            <div className="FirstPart2">
            <h3 style={{marginLeft:"50%" , textDecoration:"underline"}}>Order Total : Rs.{total}</h3>
            <Link to="/cart"><button className="btn" style={{marginLeft:"50%" , padding:"15px" , marginTop:"50px"}}>MODIFY CART</button></Link>
            </div>
           </div>
           <div className="Sec">
               
           <div className="SecPart1">
           <h3 style={{marginLeft:"150px", fontSize:"20px"}}>Place Your Order ! <FcTouchscreenSmartphone/></h3>
           <div style={{display:"flex", margin:"auto" , gap:"5%"}}>
               <input placeholder="Name" style={{marginLeft:"20px"}} className="demoInput"></input>
               <input placeholder="Email" className="demoInput"></input>   
           </div>
           <input placeholder="Mobile Number" style={{marginLeft:"25%" , marginTop:"20px"}} className="demoInput"></input><br/>
           <input placeholder="Amount in Rs" style={{marginLeft:"25%" , marginTop:"20px"}} className="demoInput"></input>
           {userToken &&
             <button className="Demobtn" onClick={()=> handleAlert()} style={{marginLeft:"36%" , marginTop:"30px" ,  padding:"13px 25px"}}>Click Me</button>
           }
           {!userToken &&
                  <p style={{color:"red" , marginLeft:"30%"}}>Please Login Before Payment !</p>        
           }
           </div>

           
           <div className="SecPart2">
           <h4 style={{marginLeft:"150px", fontSize:"20px"}}>Login & SignUp <span><FcPortraitMode/></span></h4>   
           <Link to="/login"><button className="btn" style={{marginLeft:"38%" ,  padding:"13px 25px" , marginBottom:"10px"}}>Click Me <AiOutlineArrowRight/></button></Link>
           </div>
           </div>
        </div>
    )
}
