import {CARTDATA_LOADING , CARTDATA_SUCCESS , CARTDATA_FAILURE} from "./action" ;

const initState = {
    laoding : false ,
    cartData : [] ,
    error : false  ,
}

export const cartReducer = (store = initState , {type , payload}) => {
   switch(type){
        case CARTDATA_LOADING:
           return{
               ...store,
               laoding: true,
           }
        
        case CARTDATA_SUCCESS:
            return{
                ...store,
                laoding:false,
                cartData:[...payload] ,
            }

        case CARTDATA_FAILURE:
            return{
                ...store,
                laoding:false,
                error: true ,
            }

        default:
            return store ;
   }
} 