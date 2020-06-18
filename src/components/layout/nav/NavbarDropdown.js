import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavbarDropdown extends Component {
    static defaultProps = {
        content: {
            list: [
                {
                    link: '/hostwinds',
                    name: 'Hostwinds'
                },
                {
                    link: '/introspect',
                    name: 'IntroSpect'
                },
                {
                    link: '/dfl',
                    name: 'SEED'
                },
                {
                    link: '/wing',
                    name: 'Wing'
                }
            ]
        }
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)){ return; }

        this.handleClickOutside();
    }

    handleClickOutside(){
        const element = document.getElementById('dropdown');
        if(element.classList.contains('show')){
            element.classList.remove('show');
        }
    }

    activateDropdown(){
        const element = document.getElementById('dropdown');
        element.classList.toggle('show')
    }
    
    render() {
        const nav = this.props.content;

        const content = (
            <li ref={node => this.node = node} className="nav__item">
                <div className="nav__link-dropdown-box">
                    <button
                    onClick={this.activateDropdown}
                    className="link-btn 
                               link-btn--primary-1 
                               nav__link nav__link-dropdown 
                               h2" >
                        Work
                        <i className="fas fa-caret-down dropdown__link-icon"></i>
                    </button>
                    <ul id="dropdown" className="dropdown__content">
                        {nav.list.map((item, index) => (
                            <li key={`${index}`} className="dropdown__item">
                                <Link to={ item.link } className="link-btn link-btn--primary-2 dropdown__link h2">{ item.name }</Link>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </li> 
        )
        return ( content )
    }
}