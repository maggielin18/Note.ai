import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import { NavBarElement } from "./NavBarElement";
import '../styles/NavBarStyle.css';

class NavBar extends Component{
  render(){
    return(
      <div className='navBar'>
        {NavBarElement.map(element => (
          <div key={element.id}>
            <Link className="link" to={element.link} onClick={element.onClick}>        
              <div className='navBarItems'>
                {element.icon} 
                {element.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    )
    // return(
    //     <nav className="navBar">
    //         <ul>
    //         {NavBarElement.map((key, index) => {
    //             return (
    //                 <li
    //                     key = {key}
    //                     className = 'navBar'
    //                     onClick = {() => {
    //                         window.location.pathname = key.link;
    //                     }}
    //                 >
    //                     <div id = 'icon'>
    //                         {key.icon}
    //                     </div>
    //                     <div id = 'title'>
    //                         {key.title}
    //                     </div>
    //                 </li>
    //             );
    //         })}
    //         </ul>
    //     </nav>
    // )
  }
}

export default NavBar;