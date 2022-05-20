import {REGISTRATION_LOADING , REGISTRATION_SUCCESS , REGISTRATION_FAILURE} from "./action" ;

const iniState = {
    loading : false ,
    isRegister : false ,
    error : false  ,
}

export const regReducer = (store = iniState , {type}) => {
   switch(type){
        case REGISTRATION_LOADING:
           return{
               ...store,
               loading:true
           }
          
        case REGISTRATION_SUCCESS:
            return{
                ...store,
                loading:false,
                isRegister:true,
            }

        case REGISTRATION_FAILURE:
            return{
                ...store,
                loading:false,
                error: true,
            }

        default:
            return store ;
   }
}