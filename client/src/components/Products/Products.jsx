import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata, filterdata, getElement, sortData } from '../../Redux/Data/action';
import './Products.css' ;
import { FiFilter } from 'react-icons/fi';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
    const dispatch = useDispatch() ;
    const {data , loading } = useSelector((state)=>state.mainData) ;
    const navigate = useNavigate() ;
    //   console.log(data) ;
    useEffect(()=>{
        dispatch(fetchdata()) ;
    },[])

    if(loading){
        return( 
            <div className='containerDiv' style={{marginTop:"100px"}}>   
            <div className='spinner'>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
                    Please Wait  
            {<Spinner animation="border" role="status"></Spinner>}    
            </div>
            </div> 
            )
    }

    const handleBrand = (e) => {
      dispatch(filterdata(e)) ;
    }

    const handleGetElement = (id) => {
        dispatch(getElement(id)) ;
    }

    const handleNavigate = (id) => {
      navigate(`/element/${id}`) ;
    }

    const handleSort = (ord) => {
        dispatch(filterdata(ord)) ;
    }

    return(
        <div className='containerDiv'>
            <div className="firstDiv">
              <p>{data.length}-Products</p>
              <div style={{display:"flex"}}>
                <p>Sort BY:</p>
                <select 
                style={{width:"150px" , height:"45px" , border:"transparent" , marginTop:"5.5px" , marginLeft:"2px"}} 
                onChange={e => handleSort(e.target.value)}
                >
                    <option style={{color:"#dad6d6"}}>Trending</option>
                    <option style={{color:"#dad6d6"}} value="desc">Price- High to Low</option>
                    <option style={{color:"#dad6d6"}} value="asc">Price- Low to High</option>
                </select>
              </div>
            </div>

            <div className='secDiv'>

                <div className='secDiv_part1'>
                    <p style={{marginLeft:"30%"}}>FILTER <span><FiFilter/></span></p>
                    <p style={{marginLeft:"24%"}}>BRAND <span>
                    <select 
                    onChange={(e)=> handleBrand(e.target.value)}
                    placeholder="Brand"
                    >
                        <option value="All">All</option>
                        <option value="Bata">Bata</option>
                        <option value="Fausto">Fausto</option>
                        <option value="Sparx">Sparx</option>
                    </select> </span></p>

                    <p style={{marginLeft:"24%"}}>COLOR<span>
                    <select 
                    onChange={(e)=> handleBrand(e.target.value)}
                    style={{marginLeft:"5px"}}
                    >
                        <option value="All">All</option>
                        <option value="Black">Black</option>
                        <option value="Tan">Tan</option>
                        <option value="Olive">Olive</option>
                        <option value="Brown">Brown</option>
                    </select> </span></p>
                    
                    <p style={{marginLeft:"4%"}}>Size :</p>
                    <div className='FilterBtn'>
                    <button className='btn'onClick={() => handleBrand(40)} style={{borderRadius:"5px"}}>40</button>
                    <button className='btn'onClick={() => handleBrand(41)} style={{borderRadius:"5px"}}>41</button>
                    <button className='btn'onClick={() => handleBrand(42)} style={{borderRadius:"5px"}}>42</button>
                    <button className='btn'onClick={() => handleBrand(43)} style={{borderRadius:"5px"}}>43</button>
                    <button className='btn'onClick={() => handleBrand(44)} style={{borderRadius:"5px"}}>44</button>
                    <button className='btn'onClick={() => handleBrand(45)} style={{borderRadius:"5px"}}>45</button>
                    </div>
                </div>

                <div className='secDiv_part2'>
                    {data.map((el,id)=>{
                        return(
                            <div className='elements' key={id} onClick={()=> handleGetElement(el._id)}>
                                <img src={el.img1} onClick={()=>handleNavigate(el._id)} style={{width:"100%" , height:"260px"}}/>
                                <p style={{fontSize:"14px"}}>{el.name}</p>
                                <h4 className='priceProduct'>Rs.{el.price}.00</h4>
                            </div>
                           
                        )
                    })}
                </div>

            </div>
        </div>
    )
}