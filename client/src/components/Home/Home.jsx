import React from "react";
import "./Home.css" ;
import { SliderImg } from "./Slider"
import { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux" ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, useNavigate} from "react-router-dom" ;
import { fetchdata } from "../../Redux/Data/action";

// Constant Data
const small = [{name:"WOMEN" , url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/women_thumb.jpg"} , {name:"MEN" , url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/men_thumb.jpg"} , {name:"NEW ARRIVALS" , url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/newarrival_thumb.jpg"} , {name:"SALE" ,url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/sale_thumb.jpg"} ,{name:"BEST SELLERS",url:"https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/best_seller_thumb.jpg"}];
const largeBox = [{name:"BOOTS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/boots.jpg"} ,{name:"SANDALS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/sandals.jpg"} ,{name:"SNEAKERS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/sneaker.jpg"} ,{name:"OFFICE" , url:"https://www.fashos.com/pub/media/wysiwyg/home/office.jpg"} ,{name:"SPORTS" , url:"https://www.fashos.com/pub/media/wysiwyg/home/sports.jpg"}]
const brand = ["https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/bata_logo.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/hush-puppies.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/drscholls.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/fausto.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/sparx.jpg" , "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/lancer.jpg" ]

export const Home = () => {
    const dispatch = useDispatch() ;
    const {data , loading } = useSelector((state) => state.mainData) ;
    const navigate = useNavigate() ;

    useEffect(()=>{
        dispatch(fetchdata()) ;
    },[])
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
      };

   if(loading){       
       return(
           <div  className='containerDiv'>
               loading
           </div>
       )
   }

   const handleNavigate = (id) => {
    navigate(`/element/${id}`) ;
   }

    return(
        <div>
            <SliderImg/>
            
            {/* Render Content data */}
            <div className="smallBox">
            {small.map((el)=>{
                return(
                    <div className="small">
                    <img src={el.url}/>
                    <p>{el.name}</p>
                    </div>
                )
            })
            }
            </div>
            
            <div className="largeBox">
            {largeBox.map((el,id)=>{
                if(id==0){
                    return(
                        <div className="large">
                        <Link to="/products"><img src={el.url} className="largeImg"/></Link>   
                        <p className="largeName">{el.name}</p>
                        </div>
                    )
                }
                return(
                    <div className="large">
                    <img src={el.url} className="largeImg"/>
                    <p className="largeName">{el.name}</p>
                    </div>
                )
            })}
            </div>

            <p style={{color:"red", fontSize:"large" ,marginLeft:"50%"}}>New Arrivals</p>

            <div>
                <Slider {...settings}>
                    {data.map((el) => {
                        return(
                             <div className="NewArrivalSlider">
                                <img src={el.img1} style={{width:"150px"}} className="img1" onClick={()=>handleNavigate(el._id)}></img>
                                <p style={{fontSize:"x-small" ,marginLeft:"10px"}}>{el.name}</p> 
                                <p style={{marginLeft:"10px"}}>Rs.{el.price}</p>
                             </div>
                        )
                    })}
                </Slider>
            </div>

            <p style={{color:"red", fontSize:"large" , marginTop:"60px" , marginLeft:"47%", marginBottom:"30px"}}>FEATURED BRANDS</p>
           
            <div className="smallBox">
                {brand.map((el)=>{
                    return(
                        <div className="brandElement">
                            <img src={el} style={{width:"130px"}}/>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}