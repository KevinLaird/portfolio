import React, { Component } from 'react'

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
                        <li class="dropdown__item">
                            <a href="#" class="link-btn link-btn--primary-2 dropdown__link h2">Wing Luke</a>
                        </li>
                        <li class="dropdown__item">
                            <a href="#" class="link-btn link-btn--primary-2 dropdown__link h2">IntroSpect</a>
                        </li>
                        <li class="dropdown__item">
                            <a href="#" class="link-btn link-btn--primary-2 dropdown__link h2">SEED</a>
                        </li>
                        <li class="dropdown__item">
                            <a href="#" class="link-btn link-btn--primary-2 dropdown__link h2">Corpromise</a>
                        </li>
                    </ul>
                </div>
            </li> 
        )
    }
}
