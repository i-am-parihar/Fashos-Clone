import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, fetchCartdata, patchCartItem } from "../../Redux/CartData/action";
import "./Cart.css" ;
import {Link} from "react-router-dom" ;
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

// Material UI
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RiDeleteBin6Line } from 'react-icons/ri';



export const Cart = () => {
    const dispatch = useDispatch() ;
    const {cartData , loading } = useSelector((state)=> state.cart) ;
    const [total , setTotal] = React.useState(0) ;

    useEffect(()=>{
        dispatch(fetchCartdata()) ;
    },[])

    useEffect(()=>{
        var sum = 0 ;
      cartData.map((el)=>{
          sum += (el.quantiy*el.arr.price)
        })
        setTotal(sum) ;
    },[cartData])

    useEffect(()=>{
      dispatch(fetchCartdata()) ;
    },[cartData])

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    const hadleDelete = (el,id) =>{
      console.log(id) ;
    dispatch(deleteCartItem(id)) ; 
    dispatch(fetchCartdata()) ;
    }
    const handleCountDec = (el,id) =>{
      // console.log(el.quantiy , id) ;
      var new_el = el.quantiy 
      if(new_el==1){
        return ;
      }
      dispatch(patchCartItem(new_el-1 , id)) ;
      dispatch(fetchCartdata()) ;
    }
    const handleCountInc = (el,id) =>{
      // console.log(el.quantiy , id) ;
      var new_el = el.quantiy 
      dispatch(patchCartItem(new_el+1 , id)) ;
      dispatch(fetchCartdata()) ;
    }
    // console.log(cartData) ;
    return(
        <div className="cartContainer">
         <h3 style={{textDecoration:"underline" , marginLeft:"50%"}}>SHOPPING BAG</h3>


    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price(Rs.)</TableCell>
            <TableCell align="right">Sum(Rs.)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cartData.map((el,id)=> {
            return(
                <TableRow key={id}>
              <TableCell>{el.arr.name} <br/> <RiDeleteBin6Line className="deletBtn" onClick={(e)=> hadleDelete(e,el._id)}/> </TableCell>
              <TableCell align="right">
                <button className="qtyButton" style={{marginRight:"5px"}} onClick={()=> handleCountDec(el,el._id)}><GrFormSubtract/></button>
                {el.quantiy}
                <button className="qtyButton" style={{marginLeft:"5px"}} onClick={()=> handleCountInc(el,el._id)}><AiOutlinePlus/></button>
                </TableCell>
              <TableCell align="right">{el.arr.price}</TableCell>
              <TableCell align="right">{el.quantiy*el.arr.price}</TableCell>
            </TableRow>
            )
            })}
          <TableRow>

            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <div className="CartSmallBox">
    <Link to="/products"><button className="btn" style={{width:"270px" , height:"60px" , marginTop:"10px" , marginLeft:"46%"}}> <AiOutlineArrowLeft/> CONTINUE SHOPPING </button></Link> 
    <Link to="/checkout"><button className="btn" style={{width:"270px" , height:"60px" , marginTop:"10px" , marginLeft:"46%"}}>PROCEED TO CHECKOUT <AiOutlineArrowRight/></button></Link> 
    </div>
        </div>
    )
}