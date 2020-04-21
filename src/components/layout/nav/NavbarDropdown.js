import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavbarDropdown extends Component {
    
    render() {
        return (
            <li className="nav__item">
                <div className="nav__link-dropdown-box">
                    <button
                            className="link-btn 
                                    link-btn--primary-1 
                                    nav__link nav__link-dropdown 
                                    h2">
                            Projects 
                            <i className="fas fa-caret-down dropdown__link-icon"></i>
                    </button>
                    <ul id="dropdown" className="dropdown__content">
                        <li className="dropdown__item">
                            <Link to="" className="link-btn link-btn--primary-2 dropdown__link h2">Wing Luke</Link>
                        </li>
                        <li className="dropdown__item">
                            <Link to="" className="link-btn link-btn--primary-2 dropdown__link h2">IntroSpect</Link>
                        </li>
                        <li className="dropdown__item">
                            <Link to="" className="link-btn link-btn--primary-2 dropdown__link h2">SEED</Link>
                        </li>
                        <li className="dropdown__item">
                            <Link to="" className="link-btn link-btn--primary-2 dropdown__link h2">Corpromise</Link>
                        </li>
                    </ul>
                    
                </div>
            </li> 
        )
    }
}
