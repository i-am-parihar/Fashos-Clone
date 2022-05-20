import axios from "axios" ;
// action type 
export const REGISTRATION_LOADING = "REGISTRATION_LOADING" ;
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS" ;
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE" ;

// action creater 
export const registration_loading = () => ({
    type : REGISTRATION_LOADING 
})

export const registration_success = () => ({
    type : REGISTRATION_SUCCESS
})

export const registration_failure = () => ({
    type : REGISTRATION_FAILURE
})

export const register = (regDetails) => (dispatch) => {
    console.log(regDetails)
     dispatch(registration_loading()) ;
     axios.post("http://localhost:9000/register", {
        "name" : regDetails.regName ,
        "username" : regDetails.regRole ,
        "email" : regDetails.regEmail ,
        "password" : regDetails.regpassword,
        "mobile" : regDetails.regMobile,
        "description" : regDetails.regDes
    })
    .then(() => dispatch(registration_success()))
    .catch(()=> dispatch(registration_failure())) ; 
}