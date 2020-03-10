import React, { Component } from 'react'
import NavbarDropdown from './NavbarDropdown';



export class navbar extends Component {
    
    render() {
        function dropDownFunction() {
            document.getElementById("dropdown").classList.toggle("show");
        }
        
        window.onclick = function(event) {
        if (!event.target.matches('.nav__link-dropdown')) {
                var dropdowns = document.getElementsByClassName("dropdown__content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    }
                }
            }
        }
        return (
            
            <nav className="nav">
                <div className="nav__copyright">
                    <p className="h2">Kevin Laird<span className="h4 nav__copyright-special">/UX Designer</span></p>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href='/' className="nav__link h2">
                            Home
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href='/about' className=" nav__link h2">
                            About
                        </a>
                    </li>
                    <NavbarDropdown />
                    <li className="nav__item">
                        <a href='/contact' className="nav__link h2">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default navbar
