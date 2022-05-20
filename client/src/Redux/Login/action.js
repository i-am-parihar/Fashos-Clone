import axios from "axios" ;
// action type 
export const LOGIN_LOADING = "LOGIN_LOADING" ;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" ;
export const LOGIN_FAILURE = "LOGIN_FAILURE" ;

// action creater 
export const login_loading = () => ({
    type : LOGIN_LOADING ,
})

export const login_success = () => ({
    type : LOGIN_SUCCESS 
})

export const login_failure = () => ({
    type : LOGIN_FAILURE ,
})

export const login = (logDetails) => (dispatch) => {
    console.log("entry",logDetails) ;
    dispatch(login_loading()) ;
    axios.post("http://localhost:9000/login", {
        "email":logDetails.logEmail,
        "password":logDetails.logPassword
    })
    .then((res) => localStorage.setItem('token',res.data.token))
    .then(() => dispatch(login_success()))
    .catch(() => dispatch(login_failure()))
}
