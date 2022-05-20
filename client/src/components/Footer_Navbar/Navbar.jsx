import * as React from 'react';
import { GoSearch } from 'react-icons/go';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { AiFillShopping } from 'react-icons/ai';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { fetchCartdata } from "../../Redux/CartData/action";
import {Link} from "react-router-dom" ;
const pages = ["NEW ARRIVALS" , "WOMEN" , "MEN" , "KIDS" , "BRANDS" , "SALE"];



export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [userToken , setuserToken] = useState("") ;
  const [status , setStatus] = useState(true) ;
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const {cartData , loading } = useSelector((state)=> state.cart) ;
  const dispatch = useDispatch() ;

  useEffect(()=>{
      dispatch(fetchCartdata()) ;
  },[])
   
  useEffect(()=>{
    var token = localStorage.getItem("token") ;
    setuserToken(token) ;
  setStatus(true) ;
  },[])

 const handleClearLocalStorage = () => {
  localStorage.clear();
  dispatch(fetchCartdata()) ;
  window.location.reload(false);
 }

  if(loading){
      return(
          <div>
              loading...
          </div>
      )
  }
  let Total=0;
  if(cartData.length>0){
    cartData.map((e)=>{
      Total=Total+e.quantiy
    })
  }


  return (
    <AppBar position="fixed" sx={{background:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/"><img src='https://www.fashos.com/pub/media/logo/stores/1/logo.png' style={{width: "120px" , height:"35px"}}></img></Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}  style={{marginLeft:"400px"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'Black'}}
              >
                {page}
              </Button>
            ))}
          <Button><AiFillShopping/>
               {Total}
          </Button>

          <Button style={{color:"black" }}>Search 
          <Link to="/search"><GoSearch style={{ marginLeft:"3px" , marginTop:"10px"}}/></Link>
          </Button>
          {!userToken &&
             <Link to="/login"><Button className="btn" style={{marginLeft:"25%" , paddingTop:"17px"}}>LogIn</Button></Link>
          }
          {userToken &&
             <Button className="btn" onClick={()=> handleClearLocalStorage()} style={{marginLeft:"1%" , paddingTop:"20px" ,  padding:"13px 25px" , marginBottom:"4px"}}>LogOut</Button>
          }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

