import React, { Component } from 'react'

export default class TitleDefault extends Component {
    render() {
        

        return (
            <div>
                <section className="bio default-layout">
                    <div className="profile-box">
                        <div className="profile__background profile__background--primary"></div>
                        <div className="profile">
                            <img src="../assets/profile/profile_pic.jpg" alt="Kevin Laird" className="profile__img profile__img--me"></img>
                        </div>
                        
                    </div>
                    
                    <div className="content">
                    <div className="content__title-box">
                            <h1 className="content__title--name">
                                Kevin Laird
                            </h1>
                            <div className="content__title--slash"></div>
                            <h2 className="content__title--job">
                                UX Designer
                            </h2>
                        </div>
                        <div className="content__content-box">
                            <div className="content__underlay content__underlay--primary"></div>
                            <div className="content__paragraph-box content__paragraph-box--primary">
                                <p className="content__paragraph">
                                    I am a 2019 Interactive Media Design cum laude graduate from the University of 
                                    Washington. As a passionate designer, I have experience developing several 
                                    user interfaces utilizing design tools such as Sketch, Zeplin
                                    Illustrator, Photoshop, and Figma. Examples include a variety of different 
                                    applications such as my website and a school project of a unique display of 
                                    brain activity to enlighten self awareness.</p>
                                <p className="content__paragraph">
                                    I enjoy and value working with a team to achieve successful outcomes in delivering 
                                    innovative results. Beyond academic rigor, my curiosity and self-motivation to
                                    expand my knowledge and expertise led me to learn front-end web development 
                                    in order to empower myself to contribute to my future success.</p>
                            </div>
                        </div>
                        <div className="content__btn-box">
                        <a href="../assets/profile/resume.pdf" download className="link-btn link-btn--accent-2 content__btn">Resum&eacute;</a>
                        <a href="https://www.linkedin.com/in/kevin-laird-ab2090150/" target="_blank" className="link-btn link-btn--accent-2 content__btn" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                

                    </div>
                </section>

                <section className="skills default-layout">
                    <div>
                        <h3 className="h1">Skills</h3>
                        <hr className="add-card__divider skills__divider"></hr>
                    </div>
                    <div className="skills__layout">

                        <div className="skill-card-box">
                            <div className="skill-card__title-box skill-card__title-box--accent">
                                <h2 className="h2 skill-card__title skill-card__title--accent">Design</h2>
                                <i className="fas fa-paint-brush skill-card__title-icon"></i>
                            </div>
                            <div className="skill-card__content-box skill-card__content-box--accent">
                                <div className="skill-card__content skill-card__content--accent">
                                    <ul className="skill-card__list">
                                        <li className="skill-card__list-item">
                                            UI Design
                                        </li>
                                        <li className="skill-card__list-item">
                                            Personas
                                        </li>
                                        <li className="skill-card__list-item">
                                            Responsive Design
                                        </li>
                                        <li className="skill-card__list-item">
                                            Lean UX
                                        </li>
                                    </ul>
                                </div>
                                    <div className="skill-card__content skill-card__content--accent">
                                    <ul className="skill-card__list">
                                        <li className="skill-card__list-item">
                                            Agile
                                        </li>
                                        <li className="skill-card__list-item">
                                            Wireframing
                                        </li>
                                        <li className="skill-card__list-item">
                                            Site Maps
                                        </li>
                                        <li className="skill-card__list-item">
                                            Use Case
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="skill-card-box">
                            <div className="skill-card__title-box skill-card__title-box--primary">
                                <h2 className="h2 skill-card__title skill-card__title--primary">Programming</h2>
                                <i className="fas fa-code skill-card__title-icon"></i>
                            </div>
                            <div className="skill-card__content-box skill-card__content-box--primary">
                                <div className="skill-card__content skill-card__content--primary">
                                    <ul className="skill-card__list">
                                        <li className="skill-card__list-item">
                                        HTML
                                        </li>
                                        <li className="skill-card__list-item">
                                            CSS
                                        </li>
                                        <li className="skill-card__list-item">
                                            JavaScript
                                        </li>
                                        <li className="skill-card__list-item">
                                            jQuery
                                        </li>
                                        <li className="skill-card__list-item">
                                            react.js
                                        </li>
                                    </ul>
                                </div>
                                <div className="skill-card__content skill-card__content--primary">
                                    <ul className="skill-card__list">
                                        <li className="skill-card__list-item">
                                            SASS
                                        </li>
                                        <li className="skill-card__list-item">
                                            SCSS
                                        </li>
                                        <li className="skill-card__list-item">
                                            Node.js
                                        </li>
                                        <li className="skill-card__list-item">
                                            EJS
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="skill-card-box">
                            <div className="skill-card__title-box skill-card__title-box--semantic-b">
                                <h2 className="h2 skill-card__title skill-card__title--semantic-b">Software</h2>
                                <i className="fas fa-microchip skill-card__title-icon"></i>
                            </div>
                            <div className="skill-card__content-box skill-card__content-box--semantic-b">
                                <div className="skill-card__content skill-card__content--semantic-b">
                                    <ul className="skill-card__list">
                                        <li className="skill-card__list-item">
                                            Sourcetree
                                        </li>
                                        <li className="skill-card__list-item">
                                            Figma
                                        </li>
                                        <li className="skill-card__list-item">
                                            Sketch
                                        </li>
                                        <li className="skill-card__list-item">
                                            Zeplin
                                        </li>
                                    </ul>
                                </div>
                                    <div className="skill-card__content skill-card__content--semantic-b">
                                    <ul className="skill-card__list">
                                        <li className="skill-card__list-item">
                                            Photoshop
                                        </li>
                                        <li className="skill-card__list-item">
                                            Illustrator
                                        </li>
                                        <li className="skill-card__list-item">
                                            Balsamiq
                                        </li>
                                        <li className="skill-card__list-item">
                                            Blender
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="education">
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
                </section>
            </div>
        )
    }
}
