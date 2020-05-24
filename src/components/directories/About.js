import React, { Component } from 'react';
import Navbar from "../layout/nav/Navbar";
import MainTitle from '../layout/titles/MainTitle';
import SectionTitle from '../layout/titles/SectionTitle';
import SkillCard from '../skillCard/SkillCard';
import Footer from "../layout/footer/Footer";

export default class About extends Component {
    state = {
        mainTitle: 
            {
                name: 'Kevin Laird',
                descriptor: 'UX Designer',
                img: '../assets/profile/profile_pic.jpg',
                imgAlt: 'Kevin Laird Profile',
                p:    ['I am a 2019 Interactive Media Design cum laude graduate from the University of Washington. As a passionate designer, I have experience developing several user interfaces utilizing design tools such as Sketch, Zeplin Illustrator, Photoshop, and Figma. Examples include a variety of different applications such as my website and a school project of a unique display of brain activity to enlighten self awareness.',
                    'I enjoy and value working with a team to achieve successful outcomes in delivering innovative results. Beyond academic rigor, my curiosity and self-motivation to expand my knowledge and expertise led me to learn front-end web development in order to empower myself to contribute to my future success.'],
                display: true
            },
        skillsTitle: {
            title: "Skills"
        },
        skillContentDesign: 
            {
                title: "Design",
                item: [
                    'UI Design',
                    'Personas',
                    'Responsive Design',
                    'Lean UX',
                    'Agile',
                    'Wireframing',
                    'Site Maps',
                    'Use Case'
                ],
                design: "accent",
                icon: "fas fa-paint-brush"
            },
        skillContentProgramming:
            {
                title: "Programming",
                item: [
                    'HTML5',
                    'CSS',
                    'JavaScript',
                    'react.js',
                    'JSX',
                    'SASS',
                    'Node.js',
                    'Express.js'
                ],
                design: "primary",
                icon: "fas fa-code"
            },
        skillContentSoftware:
            {
                title: "Software",
                item: [
                    'Sourcetree',
                    'Photoshop',
                    'Figma',
                    'Sketch App',
                    'Zeplin',
                    'Illustrator',
                    'Balsamiq',
                    'Blender'
                ],
                design: "semantic-b",
                icon: "fas fa-microchip"
            } 
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <div className="pages-general">
                <MainTitle mainTitle = {this.state.mainTitle} />
                <SectionTitle sectionTitle = {this.state.skillsTitle} />

                <section className="">
                    <div className="skills__layout">
                    <SkillCard skillCard = {this.state.skillContentDesign} />
                    <SkillCard skillCard = {this.state.skillContentProgramming} />
                    <SkillCard skillCard = {this.state.skillContentSoftware} />

                    </div>
                </section>

                {/* <section className="">
                    <div className="bar bar--blue-1">
                        <div className="title__section--title-box education__title__section--title-box">
                            <h1 className="h1 title__section--title">Education</h1>
                        </div>
                        <div className="education-box">
                            <div className="education__title-box">
                                <h2 className="h1 education__title">BA Interactive Media Design</h2>
                                <h3 className="h3 education__subtitle">University of Washington | September 2017 - June 2019</h3>
                            </div>
                            <div className="education__content-box">
                                <p className="education__content">
                                    <strong>Mission:</strong> With its interdisciplinary approach to
                                    interaction design and emphasis on studio practice,
                                    IMD enables students to develop creative solutions
                                    to complex problems.
                                </p>
                            </div>
                        </div>
                        <div className="education-box">
                            <div className="education__title-box">
                                <h2 className="h1 education__title">Associate in Arts & Sciences</h2>
                                <h3 className="h3 education__subtitle">Bellevue College | September 2014 - December 2017</h3>
                            </div>
                            <div className="education__content-box">
                                <p className="education__content">
                                    <strong>Mission:</strong> Create a broad understanding of context in design, a deep understanding in the Liberal Arts, 
                                    and cultivate a pathway to grow and explore new areas of study. 
                                </p>
                            </div>
                        </div>
                        <div className="education-box">
                            <div className="education__title-box">
                                <h2 className="h1 education__title">High School Diploma</h2>
                                <h3 className="h3 education__subtitle">Hazen High School | September 2011 - June 2015</h3>
                            </div>
                            <div className="education__content-box">
                                <p className="education__content">
                                    <strong>Mission:</strong> Obtain a general education to provide a clear pathway to a higher education in the field of human computer interaction design.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
                </div>
                
                <Footer />
            </div>
        )
    }
}
