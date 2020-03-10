import React, { Component } from 'react'

export default class TitleDefault extends Component {
    render() {
        

        return (
            <div>
                <section class="bio default-layout">
                    <div class="profile-box">
                        <div class="profile__background profile__background--primary"></div>
                        <div class="profile">
                            <img src="../assets/profile/profile_pic.jpg" alt="Kevin Laird" class="profile__img profile__img--me"></img>
                        </div>
                        
                    </div>
                    
                    <div class="content">
                    <div class="content__title-box">
                            <h1 class="content__title--name">
                                Kevin Laird
                            </h1>
                            <div class="content__title--slash"></div>
                            <h2 class="content__title--job">
                                UX Designer
                            </h2>
                        </div>
                        <div class="content__content-box">
                            <div class="content__underlay content__underlay--primary"></div>
                            <div class="content__paragraph-box content__paragraph-box--primary">
                                <p class="content__paragraph">
                                    I am a 2019 Interactive Media Design cum laude graduate from the University of 
                                    Washington. As a passionate designer, I have experience developing several 
                                    user interfaces utilizing design tools such as Sketch, Zeplin
                                    Illustrator, Photoshop, and Figma. Examples include a variety of different 
                                    applications such as my website and a school project of a unique display of 
                                    brain activity to enlighten self awareness.</p>
                                <p class="content__paragraph">
                                    I enjoy and value working with a team to achieve successful outcomes in delivering 
                                    innovative results. Beyond academic rigor, my curiosity and self-motivation to
                                    expand my knowledge and expertise led me to learn front-end web development 
                                    in order to empower myself to contribute to my future success.</p>
                            </div>
                        </div>
                        <div className="content__btn-box">
                        <a href="../assets/profile/resume.pdf" download class="link-btn link-btn--accent-2 content__btn">Resum&eacute;</a>
                        <a href="https://www.linkedin.com/in/kevin-laird-ab2090150/" target="_blank" class="link-btn link-btn--accent-2 content__btn">LinkedIn</a>
                        </div>
                

                    </div>
                </section>

                <section class="skills default-layout">
                    <div>
                        <h3 class="h1">Skills</h3>
                        <hr class="add-card__divider skills__divider"></hr>
                    </div>
                    <div class="skills__layout">

                        <div class="skill-card-box">
                            <div class="skill-card__title-box skill-card__title-box--accent">
                                <h2 class="h2 skill-card__title skill-card__title--accent">Design</h2>
                                <i class="fas fa-paint-brush skill-card__title-icon"></i>
                            </div>
                            <div class="skill-card__content-box skill-card__content-box--accent">
                                <div class="skill-card__content skill-card__content--accent">
                                    <ul class="skill-card__list">
                                        <li class="skill-card__list-item">
                                            UI Design
                                        </li>
                                        <li class="skill-card__list-item">
                                            Personas
                                        </li>
                                        <li class="skill-card__list-item">
                                            Responsive Design
                                        </li>
                                        <li class="skill-card__list-item">
                                            Lean UX
                                        </li>
                                    </ul>
                                </div>
                                    <div class="skill-card__content skill-card__content--accent">
                                    <ul class="skill-card__list">
                                        <li class="skill-card__list-item">
                                            Agile
                                        </li>
                                        <li class="skill-card__list-item">
                                            Wireframing
                                        </li>
                                        <li class="skill-card__list-item">
                                            Site Maps
                                        </li>
                                        <li class="skill-card__list-item">
                                            Use Case
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="skill-card-box">
                            <div class="skill-card__title-box skill-card__title-box--primary">
                                <h2 class="h2 skill-card__title skill-card__title--primary">Programming</h2>
                                <i class="fas fa-code skill-card__title-icon"></i>
                            </div>
                            <div class="skill-card__content-box skill-card__content-box--primary">
                                <div class="skill-card__content skill-card__content--primary">
                                    <ul class="skill-card__list">
                                        <li class="skill-card__list-item">
                                        HTML
                                        </li>
                                        <li class="skill-card__list-item">
                                            CSS
                                        </li>
                                        <li class="skill-card__list-item">
                                            JavaScript
                                        </li>
                                        <li class="skill-card__list-item">
                                            jQuery
                                        </li>
                                        <li class="skill-card__list-item">
                                            react.js
                                        </li>
                                    </ul>
                                </div>
                                <div class="skill-card__content skill-card__content--primary">
                                    <ul class="skill-card__list">
                                        <li class="skill-card__list-item">
                                            SASS
                                        </li>
                                        <li class="skill-card__list-item">
                                            SCSS
                                        </li>
                                        <li class="skill-card__list-item">
                                            Node.js
                                        </li>
                                        <li class="skill-card__list-item">
                                            EJS
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="skill-card-box">
                            <div class="skill-card__title-box skill-card__title-box--semantic-b">
                                <h2 class="h2 skill-card__title skill-card__title--semantic-b">Software</h2>
                                <i class="fas fa-microchip skill-card__title-icon"></i>
                            </div>
                            <div class="skill-card__content-box skill-card__content-box--semantic-b">
                                <div class="skill-card__content skill-card__content--semantic-b">
                                    <ul class="skill-card__list">
                                        <li class="skill-card__list-item">
                                            Sourcetree
                                        </li>
                                        <li class="skill-card__list-item">
                                            Figma
                                        </li>
                                        <li class="skill-card__list-item">
                                            Sketch
                                        </li>
                                        <li class="skill-card__list-item">
                                            Zeplin
                                        </li>
                                    </ul>
                                </div>
                                    <div class="skill-card__content skill-card__content--semantic-b">
                                    <ul class="skill-card__list">
                                        <li class="skill-card__list-item">
                                            Photoshop
                                        </li>
                                        <li class="skill-card__list-item">
                                            Illustrator
                                        </li>
                                        <li class="skill-card__list-item">
                                            Balsamiq
                                        </li>
                                        <li class="skill-card__list-item">
                                            Blender
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section class="education">
                    <div class="bar bar--blue-1">
                        <div class="title__section--title-box education__title__section--title-box">
                            <h1 class="h1 title__section--title">Education</h1>
                        </div>
                        <div class="education-box">
                            <div class="education__title-box">
                                <h2 class="h1 education__title">BA Interactive Media Design</h2>
                                <h3 class="h3 education__subtitle">University of Washington | September 2017 - June 2019</h3>
                            </div>
                            <div class="education__content-box">
                                <p class="education__content">
                                    <strong>Mission:</strong> With its interdisciplinary approach to
                                    interaction design and emphasis on studio practice,
                                    IMD enables students to develop creative solutions
                                    to complex problems.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
