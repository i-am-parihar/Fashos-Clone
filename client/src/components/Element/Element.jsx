import { useEffect, useState } from "react";
import "./Element.css" ;
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import { getElement, postCartData } from "../../Redux/Data/action";
import { useDispatch, useSelector } from "react-redux";
import { Link , useParams } from "react-router-dom";

export function Element(props){
 const [count , setCount] = useState(1) ;
 const dispatch = useDispatch() ;
 const {id} = useParams() ;
 const {ele_data , loading , ele_dataAvailable} = useSelector((state) => state.mainData) ;
 console.log(ele_data) ;
//  const data = ele_data[0] ;
 useEffect(()=>{
   dispatch(getElement(id)) ;
 },[])
 if(loading){
     return(
         <div>
             ...loading
         </div>
     )
 }

 if(ele_dataAvailable==false){
    dispatch(getElement(id)) ;
 }

 const handleCountInc = (value) => {
    setCount(count+value) ;
 }
 const handleCountDec = (value) => {
     if(count==1){
         return ;
     }
     setCount(count-value) ;
 }
 const handleArr = () => {
     var qty = count ;
     dispatch(postCartData(ele_data , qty )) ;
 }
const demo = () => {
    dispatch(getElement(id)) ;
}

    return(
        <div className="ElementContainer">
           <div className="elementFirst">
             <img src={ele_data.img1} className="largeImage" style={{width:"70%" , marginTop:"10px" , marginLeft:"17%"}}></img> 
             <div style={{ marginLeft:"25%"}}>
             <img src={ele_data.img2} className="shortImages"></img>  
             <img src={ele_data.img1} className="shortImages"></img>  
             <img src={ele_data.img3} className="shortImages"></img>  
             </div>  
           </div>

           <div className="elementSecond">
               <img src={ele_data.brandImg} className="brandImage" style={{marginLeft:"10px"}}></img>
               <p style={{fontSize:"20px" , textAlign:"start" ,marginLeft:"10px" , lineHeight:"20px"}}>{ele_data.name}</p>
               <button className="price" style={{marginLeft:"10px"}}>Rs.{ele_data.price}.00</button>
               <p style={{fontSize:"15px" , textAlign:"start" ,marginLeft:"10px" , lineHeight:"20px" ,color:"GrayText" }}>Size - {ele_data.size}</p>
               <p style={{fontSize:"13px" , textAlign:"start" ,marginLeft:"10px" , lineHeight:"20px" , color:"ButtonShadow"}}>SHOE TYPE - {ele_data.shoeType}</p>
               <p style={{fontSize:"13px" , marginLeft:"48%"}}>QTY</p>

               <div className="qty">
                   <button className="qtyButton" onClick={()=> handleCountDec(1)}><GrFormSubtract/></button>
                   <p style={{margin:"auto"}}>{count}</p>
                   <button className="qtyButton" onClick={()=> handleCountInc(1)}><AiOutlinePlus/></button>
               </div>
              
               <Link to="/cart"><button className="addToCartBtn" style={{marginLeft:"30px"}} onClick={() => handleArr()}>ADD TO CART</button></Link> 


           </div> 
        </div>
    )
}