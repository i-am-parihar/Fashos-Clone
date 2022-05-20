import { Link } from "react-router-dom";
import "./Footer.css" ;
export const Footer = () => {
    return(
        <div className="container">

           <div className="firstDiv">
             <div>
                <p className='fontStyle'>FASHOS</p>
                <p className='fontStyle'>About Us</p>
             </div>
             <div>
                <p className='fontStyle'>Careers</p>
                <p className='fontStyle'>News & Events</p>
                <p className='fontStyle'>Merchants & Partners</p>
                <p className='fontStyle'>Sitemap</p>
                <p className='fontStyle'>Blog</p>
             </div>

             <div>
               <p className='fontStyle'>My Account</p>
               <p className='fontStyle'>Order History</p>

             </div>
             
             <div>
              <Link to="/login" style={{ textDecoration: 'none' }}><p className='fontStyle'>Login & Sign Up</p></Link>
              <Link to="/search" style={{ textDecoration: 'none' }}><p className='fontStyle'>Search Here !</p></Link>
             </div>
           </div>
          

        </div>
    )
}