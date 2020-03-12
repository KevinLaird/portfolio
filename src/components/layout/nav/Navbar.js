import React, { Component } from 'react'
import NavbarDropdown from './NavbarDropdown';
import { Link } from 'react-router-dom';



export class navbar extends Component {
    
    render() {
        return (
            
            // <nav className="nav">
            //     <div className="nav__copyright">
            //         <p className="h2">Kevin Laird<span className="h4 nav__copyright-special">/UX Designer</span></p>
            //     </div>
            //     <ul className="nav__list">
            //         <li className="nav__item">
            //             <Link to='/' className="nav__link h2">
            //                 Home
            //             </Link>
            //         </li>
                    
            //         <li className="nav__item">
            //             <Link to='/about' className=" nav__link h2">
            //                 About
            //             </Link>
            //         </li>
            //         <NavbarDropdown />
            //         <li className="nav__item">
            //             <Link to='/contact' className="nav__link h2">
            //                 Contact
            //             </Link>
            //         </li>
            //     </ul>
            // </nav>
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
