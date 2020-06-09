import React, { Component } from 'react';
import Navbar from "../../layout/nav/Navbar";
import Footer from "../../layout/footer/Footer";
import MainTitle from '../../layout/titles/MainTitle';

export default class Hostwinds extends Component {
    state = {
        mainTitle: 
            {
                name: 'Hostwinds',
                descriptor: 'Web Host Support Agent',
                img: '../assets/project/hostwinds/logo.jpg',
                imgAlt: 'Logo',
                p: ['By combining psychology, neuroscience, and technology, my team and I were able to create a unique introspective moment for people to experience themselves.'],
                display: "u-display-none",
                size: "u-title-2",
            }
        
    }
    render() {
        return (
            <div>
                <Navbar />
                    <section className="pages-general">
                        <MainTitle content={ this.state.mainTitle } />
                    </section>
                <Footer />
            </div>
        )
    }
}
