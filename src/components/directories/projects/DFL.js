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
            p: [
                "SEED is a twist on the tower defense genre: instead of asking players to prevent enemies from reaching the end of a path, SEED asks players to help gentle creatures navigate increasingly challenging paths."
            ],
            display: "u-display-none",
            size: "u-title-2",
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <section className ="pages-general">
                <MainTitle content = {this.state.mainTitle} />
                
                </section>
                
                <Footer />
            </div>
        )
    }
}
