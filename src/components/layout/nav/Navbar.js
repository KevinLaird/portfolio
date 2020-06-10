import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    static defaultProps = {
        nav: {
            home: "",
        }
    }
    render() {
        const item = this.props.nav;
        
        const nav = (
            <nav className="nav">
                <div className="nav__copyright">
                    <p className="h2">Kevin Laird<span className="h4 nav__copyright-special">/UX Designer</span></p>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to='/' className={"nav__link h2 " + item.home}>
                            Home
                        </Link>
                    </li>
                    
                    <li className="nav__item">
                        <Link to='/about' className={"nav__link h2 " + item.about}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            
        )
        return (nav)
    }
}