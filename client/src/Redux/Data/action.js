import axios from "axios" ;
// action type
export const DATA_LOADING = "DATA_LOADING" ;
export const DATA_SUCCESS = "DATA_SUCCESS" ;
export const DATA_FAILURE = "DATA_FAILURE" ;
export const ELEMENT_DATA = "ELEMENT_DATA" ;
export const SEARCH_DATA = "SEARCH_DATA" ;

// action creater 
export const data_loading = () => ({
    type: DATA_LOADING
});

export const data_success = (payload) => ({
    type : DATA_SUCCESS ,
    payload ,
});

export const data_failure = () => ({
    type : DATA_FAILURE ,
})

export const element_data = (payload) => ({
   type : ELEMENT_DATA ,
   payload ,
})

export const search_data = (payload) => ({
    type : SEARCH_DATA ,
    payload ,
})

export const fetchdata = () => (disptach) => {
    disptach(data_loading()) ;
    axios.get("http://localhost:9000/data")
    .then((res) => disptach(data_success(res.data)))
    .catch(()=> disptach(data_failure())) ;
}

export const getElement = (id) => (disptach) => {
    disptach(data_loading()) ;
    axios.get(`http://localhost:9000/data/${id}`)
    .then((res) => disptach(element_data(res.data))) 
    .catch(() => disptach(data_failure()))
}

export const postCartData = (cartData , qty) => (disptach) => {
    disptach(data_loading()) ;
    axios.post("http://localhost:9000/cart",
    {"arr":cartData ,
     "quantiy":qty
    }) ;
}



// ***************************
export const filterdata = 
({price , brand , color , size}) =>
async (disptach) => {
    console.log(size)
    try{
        disptach(data_loading()) ;
    axios.get(
    `http://localhost:9000/data/filter`,
    {
        params:{
            price ,
            brand,
            color,
            size,
        }
    }
    )
    .then((res) => disptach(data_success(res.data)))
    }
    catch(er){
        console.log(er.message) 
    } ;
}

export const sortData = (ord) => (disptach) => {
    disptach(data_loading()) ;
    axios.get(`http://localhost:8080/data?_sort=price&_order=${ord}`)
    .then((res) => disptach(data_success(res.data)))
    .catch(()=> disptach(data_failure())) ;
}

export const fetchSearchData = (string) => (disptach) => {
    disptach(data_loading()) ;
    axios.get(`http://localhost:9000/data/${string}`)
    .then((res) => disptach(search_data(res.data)))
    .catch(()=> disptach(data_failure())) ;
} 