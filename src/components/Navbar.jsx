import React from 'react'
 
function Navbar(props) {
   return (
       <nav className="navbar" role="navigation" aria-label="main navigation">

           <div id="navbarBasicExample" className="navbar-menu">
               <div className="navbar-start">
 
               </div>
               <div className="navbar-end">
                   <div className="navbar-item">
                       <div className="buttons">
                           
                           <button className="button is-light" onClick={props.logout}>
                                {props.username},Logout
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </nav>
 
   )
}
 
export default Navbar
