import React, { Component } from 'react'



export class navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav__copyright">
                    <p className="h2">Kevin Laird<span className="h4 nav__copyright-special">/UX Designer</span></p>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href='./pages/contact.html' className="nav__link h2">
                            Contact
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='./pages/about.html' className=" nav__link h2">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default navbar
