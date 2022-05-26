import "./Search.css" ;
import { IoIosSearch } from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData, filterdata , getElement } from "../../Redux/Data/action";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Search = () => {
const dispatch = useDispatch() ;
const {searchData , loading} = useSelector((state) =>  state.mainData) ;
const [inputData , setInputdata] = useState("") ;
const navigate = useNavigate() ;

const handleChange = (e) => {
    e.preventDefault();
    console.log(inputData) ;
    dispatch(fetchSearchData(inputData)) ;
}

const handleGetElement = (id) => {
    dispatch(getElement(id)) ;
}

const handleNavigate = (id) => {
  navigate(`/element/${id}`) ;
}

if(loading){
    return(
        <div className="SearchContainer">
            ...loading ;
        </div>
    )
}

// console.log(searchData.length) ;
if(searchData.length===0){
    // console.log("here")
    return(
        <div className="SearchContainer">
        <div className="SearchBox">
        <IoIosSearch className="SearchBar" onClick={(e) => handleChange(e)}/>
        <input 
        className="SearchInputBox" 
        placeholder="Search Here !"
        type="text" 
        value={inputData}
        onChange={(e) => setInputdata(e.target.value)}/>
        </div>
    </div>
    )
}

    return(
        <div className="SearchContainer">
            <div className="SearchBox">
            <IoIosSearch className="SearchBar" onClick={(e) => handleChange(e)}/>
            <input className="SearchInputBox" placeholder="Search Here !" type="text" onChange={(e) => setInputdata(e.target.value)}/>
            </div>
            <div className="SearchContent">
            {searchData.map((el,id)=>{
                        return(
                            <div className='Searchelements' key={id} onClick={()=> handleGetElement(el.id)}>
                                <img src={el.img1} onClick={()=>handleNavigate(el.id)} style={{width:"90%" , height:"220px"}}/>
                                <p style={{fontSize:"14px"}}>{el.name}</p>
                                <h4 className='priceProduct'>Rs.{el.price}.00</h4>
                            </div>
                           
                        )
                    })}
            </div>
        </div>
    )
}