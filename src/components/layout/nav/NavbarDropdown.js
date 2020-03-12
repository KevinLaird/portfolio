import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavbarDropdown extends Component {
    render() {
        return (
            <li class="nav__item">
                <div class="nav__link-dropdown-box">
                    <button onclick="dropDownFunction()" 
                            class="link-btn 
                                    link-btn--primary-1 
                                    nav__link nav__link-dropdown 
                                    h2">
                            Projects 
                            <i class="fas fa-caret-down dropdown__link-icon"></i>
                    </button>
                    <ul id="dropdown" class="dropdown__content">
                        {/* <li class="dropdown__item">
                            <Link to="" class="link-btn link-btn--primary-2 dropdown__link h2">Wing Luke</Link>
                        </li>
                        <li class="dropdown__item">
                            <Link to="" class="link-btn link-btn--primary-2 dropdown__link h2">IntroSpect</Link>
                        </li>
                        <li class="dropdown__item">
                            <Link to="" class="link-btn link-btn--primary-2 dropdown__link h2">SEED</Link>
                        </li>
                        <li class="dropdown__item">
                            <Link to="" class="link-btn link-btn--primary-2 dropdown__link h2">Corpromise</Link>
                        </li> */}
                    </ul>
                </div>
            </li> 
        )
    }
}
