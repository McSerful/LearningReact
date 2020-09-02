import React from "react";
import { Link } from "react-router-dom";
import NavigationHeader from "./NavigationHeader";








function NavigationMenu(props){
   
    
     
     
    
    return (
        <div>


        


            <NavigationHeader />
           
              
              <ul>
              <li>
                <Link 
                  to="/" 
                  className="bg-white bg-w-full  text-xs text-pink-700 font-black boarder-black border-b block py-10"
                  onClick={props.closeMenu}
                  >
                    HOME</Link>
              </li>

                

              <li>
                <Link to="/search" className="bg-white text-xs text-pink-700 font-black border-t border-b block py-8"
                onClick={props.closeMenu}
                >SEARCH</Link>
              </li>

               

              <li>
                <Link to="/login" className="bg-white text-xs text-pink-700 font-black border-t border-b block py-8"
                onClick={props.closeMenu}
                >LOGIN</Link>
              </li>

              

              <li>
                <Link to="/support" className="bg-white text-xs text-pink-700 font-black border-t border-b block py-8"
                onClick={props.closeMenu}
                >SUPPORT</Link>
              </li>

              

              <li>
                <Link to="/my-account" className="bg-white text-xs text-pink-700 font-black border-t block py-8"
                onClick={props.closeMenu}
                >MY ACCOUNT</Link>
              </li>

              <footer>
                  <li> <Link to="/logout" className="font-medium text-xs text-pink-700 absolute bottom-0 right-0 py-1 pr-3"  onClick={props.closeMenu}> LOGOUT </Link> </li>
                  <li className="text-center text-xs font-medium absolute bottom-0 py-1">&copy; NAGUNE</li>
                
                   
              </footer>
            </ul>
          
        </div>
    )
}


export default NavigationMenu