import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { NavBarElement } from "./NavBarElement";
import '../styles/NavBarStyle.css';

class NavBar extends Component{

  handleCreateNote = async () => {
    try{
      await axios.post('/', { title: "New Note", content: "" });
      console.log('Note created successfully');
    } catch (error) {
      console.error('Error creating note:', error);
    } 
  };

  render(){
    return(
      <div className='navBar'>
        {NavBarElement.map(element => (
          <div key={element.id}>
            <Link className="link" to={element.link}>            
              <div className='navBarItems'>
                {element.icon} 
                {element.title}
              </div>
            </Link>
          </div>
        ))}
        <button onClick={() => this.handleCreateNote("New Note Title", "New Note Content")}>Create Note</button>
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