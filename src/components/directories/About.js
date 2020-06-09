import React, { Component } from 'react';
import Navbar from "../layout/nav/Navbar";
import MainTitle from '../layout/titles/MainTitle';
import SectionTitle from '../layout/titles/SectionTitle';
import SkillCard from '../skillCard/SkillCard';
import TitleList from '../layout/titles/TitleList';
import Footer from "../layout/footer/Footer";

export default class About extends Component {
    state = {
        nav: { about: "nav--active" },
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
            },
        school: [
            {
                title: "BA Interactive Media Design",
                subtitle: "University of Washington | September 2017 - June 2019",
                content: [
                    "With its interdisciplinary approach to interaction design and emphasis on studio practice, IMD enables students to develop creative solutions to complex problems."
                ]
            },
            {
                title: "Associates Arts & Science",
                subtitle: "Bellevue College | September 2014 - December 2016",
                content: [
                    "Utilized my High School’s “Running Start” program to create a broad understanding of context in design, a deep understanding in the Liberal Arts, and cultivate a pathway to grow and explore new areas of study."
                ]
            },
            {
                title: "High School Diploma",
                subtitle: "Hazen High School | September 2012 - June 2015",
                content: [
                    "Obtained a general education to provide a clear pathway to a higher education in the field of human computer interaction design."
                ]
            }
        ]
        
    }
    
    render() {
        return (
            <div>
                <Navbar nav={ this.state.nav }/>
                <div className="pages-general">
                <MainTitle content = {this.state.mainTitle} />
                <SectionTitle content = {this.state.skillsTitle} />

                <section className="">
                    <div className="skills__layout">
                    <SkillCard skillCard = {this.state.skillContentDesign} />
                    <SkillCard skillCard = {this.state.skillContentProgramming} />
                    <SkillCard skillCard = {this.state.skillContentSoftware} />

                    </div>
                </section>

                <section>
                    <div className="references-box">
                        <div className="profile-comment--title-box">
                            <h1 className="h1 profile-comment--title">Education</h1>
                        </div>
                    
                        <TitleList content = {this.state.school}/> 
                            
                    </div>
                </section>
            </div>
                
            <Footer />
            </div>
        )
    }
}


// bachelors:
//             {
//                 title: "BA Interactive Media Design",
//                 subtitle: "University of Washington | September 2017 - June 2019",
//                 content: [
//                     "With its interdisciplinary approach to interaction design and emphasis on studio practice, IMD enables students to develop creative solutions to complex problems."
//                 ]
//             },
//         associates:
//             {
//                 title: "Associates Arts & Science",
//                 subtitle: "Bellevue College | September 2014 - December 2016",
//                 content: [
//                     "Utilized my High School’s “Running Start” program to create a broad understanding of context in design, a deep understanding in the Liberal Arts, and cultivate a pathway to grow and explore new areas of study."
//                 ]
//             },
//         highschool:
//             {
//                 title: "High School Diploma",
//                 subtitle: "Hazen High School | September 2012 - June 2015",
//                 content: [
//                     "Obtained a general education to provide a clear pathway to a higher education in the field of human computer interaction design."
//                 ]
//             }