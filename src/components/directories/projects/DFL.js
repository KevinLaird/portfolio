import React, { Component } from 'react';
import Footer from '../../layout/footer/Footer';
import Navbar from '../../layout/nav/Navbar';
import MainTitle from '../../layout/titles/MainTitle';
import SectionCard from '../../layout/section/SectionCard';

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
        },
        intro: {
            title: "Level Design",
            subtitle: "Created a flow",
            contentTitle: "Create a visual interface that responds to brain wave data.",
            contentParagraph: []
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <section className ="pages-general">
                <MainTitle content = {this.state.mainTitle} />
                <SectionCard content = {this.state.intro} />
                </section>
                
                <Footer />
            </div>
        )
    }
}
