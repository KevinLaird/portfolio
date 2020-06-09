import React, { Component } from 'react';
import Footer from '../../layout/footer/Footer';
import Navbar from '../../layout/nav/Navbar';
import MainTitle from '../../layout/titles/MainTitle';

export default class DFL extends Component {
    state = {
        mainTitle: {
            name: 'SEED',
            descriptor: 'Level Designer',
            img: '../assets/project/dfl/bg-seed.jpg',
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
                <MainTitle content = {this.state.mainTitle} />
                </section>
                
                <Footer />
            </div>
        )
    }
}
