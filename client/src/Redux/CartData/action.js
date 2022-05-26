import axios from "axios";
// action type 
export const CARTDATA_LOADING = "CARTDATA_LOADING" ;
export const CARTDATA_SUCCESS = "CARTDATA_SUCCESS" ;
export const CARTDATA_FAILURE = "CARTDATA_FAILURE" ;

// action creater
export const cartdata_loading = () => ({
    type: CARTDATA_LOADING ,
}) ;

export const cartdata_success = (payload) => ({
    type: CARTDATA_SUCCESS ,
    payload ,
}) ;

export const cartdata_failure = () => ({
    type : CARTDATA_FAILURE ,
})

export const fetchCartdata = () => (disptach) => {
    disptach(cartdata_loading())
   axios.get("http://localhost:9000/cart") 
   .then((res) => disptach(cartdata_success(res.data)))
   .catch(() => cartdata_failure()) ;
}

export const deleteCartItem = (id) => (disptach) => {
   disptach(cartdata_loading())
   axios.delete(`http://localhost:9000/cart/${id}`)
   .catch(() => cartdata_failure()) ;
}

// ***************************
export const patchCartItem = (newQty,id) => (disptach) => {
    disptach(cartdata_loading()) ;
    axios.patch(`http://localhost:9000/cartData/${id}?quantiy=${newQty}`)
    .catch(()=> cartdata_failure()) ;
}