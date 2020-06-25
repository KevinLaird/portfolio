import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NavbarDropdown from './NavbarDropdown';


export default class Navbar extends Component {
    state= {
        animation: ''
    }
    static defaultProps = {
        content: {
            home: false,
            about: false
        }    
    }

    home(){
        if(this.props.content.home){ 
        return(
            <li className="nav__item" onClick={this.startStopAnimation}>
                <Link to='/' className={`nav__link h2 nav--active ${this.state.animation}`}>
                    Home
                </Link>
            </li>
        )}
        return(
            <li className="nav__item">
                <Link to='/' className={`nav__link h2 `}>
                    Home
                </Link>
            </li>
        )
    }

    about(){
        if(this.props.content.about){
            return(
                <li className="nav__item" onClick={this.startStopAnimation}>
                    <Link to='/about' className={`nav__link h2 nav--active ${this.state.animation}`}>
                        About
                    </Link>
                </li>
            )
        }
        return(
            <li className="nav__item">
                <Link to='/about' className={`nav__link h2`}>
                    About
                </Link>
            </li>
        )
    }


    startStopAnimation = () => {
        const { animation } = this.state;

        this.setState({ 
            animation: animation ? "" : "nav--animation"
        })
    }


    render() {
        const nav = this.props.content;
        
        const content = (
            <nav className="nav">
                    <Link to='/' className="nav__copyright h2">
                        <div className="nav__copyright-box">
                            <div>Kevin Laird</div>
                            <div className="h4 nav__copyright-special">/UX Designer</div>
                        </div>
                    </Link>
                <ul className="nav__list">
                    {this.home()}
                    {this.about()}
                    <NavbarDropdown />
                    
                </ul>
            </nav>
            
        )
        return ( content )
    }
}