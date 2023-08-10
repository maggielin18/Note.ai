import { Component } from "react";
import { NavBarElement } from "./NavBarElement";
import '../styles/NavBarStyle.css';

class NavBar extends Component{
    render(){
        return(
            <nav className="navBar">
                <ul>
                {NavBarElement.map((key, index) => {
                    return (
                        <li
                            key = {key}
                            className = 'navBar'
                            onClick = {() => {
                                window.location.pathname = key.link;
                            }}
                        >
                            <div id = 'icon'>
                                {key.icon}
                            </div>
                            <div id = 'title'>
                                {key.title}
                            </div>
                        </li>
                    );
                })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;