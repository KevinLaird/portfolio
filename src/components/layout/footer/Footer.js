import React, { Component } from 'react'

export class Footer extends Component {


    render() {
        return (
            <footer className="footer">
                <h4 className="h4 footer__copyright">&copy; Kevin Laird {new Date().getFullYear()}</h4>
            </footer>
        )
    }
}

export default Footer
