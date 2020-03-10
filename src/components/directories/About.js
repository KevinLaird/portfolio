import React, { Component } from 'react';
import Navbar from "../layout/nav/Navbar";
import TitleDefault from '../layout/titles/default/TitleDefault';
import Footer from "../layout/footer/Footer";

export default class About extends Component {
    state= {
        title: [
            {
                id: 1,
                title: "Kevin Laird",
                subtitle: "UX Designer",
                p1: "I am a 2019 Interactive Media Design cum laude graduate from the University of Washington. As a passionate designer, I have experience developing several user interfaces utilizing design tools such as Sketch, Zeplin Illustrator, Photoshop, and Figma. Examples include a variety of different applications such as my website and a school project of a unique display of brain activity to enlighten self awareness.",
                p2: "I enjoy and value working with a team to achieve successful outcomes in delivering innovative results. Beyond academic rigor, my curiosity and self-motivation toexpand my knowledge and expertise led me to learn front-end web development in order to empower myself to contribute to my future success."
            }
        ]
    }
    render() {
        return (
            <div>
                <Navbar />
                <TitleDefault  />
                <Footer />
            </div>
        )
    }
}
