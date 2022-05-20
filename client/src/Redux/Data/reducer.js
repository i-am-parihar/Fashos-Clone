import { DATA_LOADING , DATA_SUCCESS , DATA_FAILURE , ELEMENT_DATA , SEARCH_DATA } from "./action";

const initState = {
    loading : false ,
    data : [] ,
    ele_data : "" ,
    ele_dataAvailable : false ,
    searchData : [] ,
    error : false ,
}

export const dataReducer = (store = initState , {type , payload}) => {
    switch(type){
        case DATA_LOADING:
            return{
                ...store ,
                loading:true ,
            }

        case DATA_SUCCESS:
            return{
                ...store,
                loading:false,
                data:[...payload],
                ele_data:""
            }

        case DATA_FAILURE:
            return{
                ...store,
                loading:false,
                error:true,
            }

        case ELEMENT_DATA:
            return{
                ...store,
                loading:false,
                ele_data:payload,
                ele_dataAvailable:true,
            }
        
        case SEARCH_DATA:
            return{
                ...store,
                loading:false,
                searchData:[...payload]
            }
        
        default:
            return store ;
    }
}