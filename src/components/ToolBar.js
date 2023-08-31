import React from 'react';
import { Component } from 'react';

import { ToolBarElement } from './ToolBarElement';
import '../styles/ToolBar.css';

class ToolBar extends Component{
  render(){
    return(
      <div className='toolBar'>
        {ToolBarElement.map(element => (
          <div className='toolBarIcons' key={element.id}>
              {element.icon}
          </div>
        ))}
      </div>
    )
    // return(
    //     <nav className="toolBar">
    //         <ul>
    //         {ToolBarElement.map((key, index) => {
    //             return (
    //                 <li
    //                     key = {key}
    //                     className = 'toolBar'
    //                     onClick = {() => {
    //                         window.location.pathname = key.link;
    //                     }}
    //                 >
    //                     <div id = 'icon'>
    //                         {key.icon}
    //                     </div>
    //                 </li>
    //             );
    //         })}
    //         </ul>
    //     </nav>
    // )
  }
}

export default ToolBar;