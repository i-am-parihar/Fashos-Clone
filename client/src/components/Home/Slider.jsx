import {useEffect, useState} from "react" ;

export const SliderImg = () => {
    const[url , setUrl] = useState("https://www.fashos.com/pub/media/wysiwyg/home/Fashos1_WEB.png") ;
    let arr = ["https://www.fashos.com/pub/media/wysiwyg/home/Fashos1_WEB.png" , "https://www.fashos.com/pub/media/wysiwyg/home/Fashos2_WEB.png" , "https://www.fashos.com/pub/media/wysiwyg/home/Fashos333.png"] ;
    let count = 0 ;
    
    useEffect(()=>{
        let id  = setInterval(()=>{

            if(count==3){count=0} ;

            setUrl(arr[count]) ;
            count++ ;
            
            return ()=>clearInterval(id) ;
        },3000)
    },[])

    return(
        <div>
            <img src={url} width="100%" height="600px"></img>
        </div>
    )
}