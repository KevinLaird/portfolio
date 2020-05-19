import React, { Component } from 'react'
import Projects from '../projects/Projects';
import Reference from '../references/reference/Reference';
import Footer from '../layout/footer/Footer';
import Navbar from '../layout/nav/Navbar';
import Sources from '../sources/Sources';

export default class Home extends Component {
    state = {
        projects: [
          {
            id: 1,
            title: 'Wing Luke',
            type: 'Case Study',
            role: 'UX Researcher',
            mission: 'Increase visitor return rate and improve user journey.',
            task: 'Collect user research using different research methods to find solutions to visitor wants and needs.',
            action: 'Conducted visual and verbal surveys at the Wing Luke Museum.',
            result: 'Provided a 23 page report for the client regarding the research collected and potential solutions to the problem set. Our client utilized many of the solutions or recommendations in our report.',
            readtime: '*5 minute read'
          },
          {
            id: 2,
            title: 'IntroSpect',
            type: 'Art Installation',
            role: 'UI/UX Designer',
            mission: 'Create a user experience to visualize brainwave activity.Increase visitor return rate and improve user journey.',
            task: 'Made visual designs for the developer to rapidly create prototypes for the project.',
            action: 'Conducted visual research, competitive analyses, and brainwave-sensor research to create a resonant visual interface.',
            result: 'Presented the art installation to hundreds of guests, creating a lasting impact on both the visitors and the University of Washington.',
            readtime: '*5 minute read',
            cta: "/introspect"
          },
          {
            id: 3,
            title: 'SEED',
            type: 'Computer Game',
            role: 'Level Designer',
            mission: 'Create thoughtful levels that challenges the player’s problem solving skills.',
            task: 'Go through the design curriculum provided by the firm to improve my understanding of great game design.',
            action: 'Produced over 40 pages of notes and provided in-depth analyses of my experiences.',
            result: 'Presented the art installation to hundreds of guests, creating a lasting impact on both the visitors and the University of Washington.',
            readtime: '*5 minute read'
          },
          {
            id: 4,
            title: 'Corpromise',
            type: 'Board Game',
            role: 'Game Designer',
            mission: 'Design a board game that analyzes climate change in a creative way.',
            task: 'Find my team\'s target audience, how to create game mechanics that are easy to use and engaging for that audience, and how to balance those systems to create a balanced and competitive setting.',
            action: '--',
            result: 'Created a board game that implements a balance between cooperation and competition.',
            readtime: '*5 minute read'
          },
          {
            id: 5,
            title: 'Hostwinds',
            type: 'Web Hosting',
            role: 'Web Host Support Agent',
            mission: 'Ensure quality support and hosting services to clients all around the world',
            task: 'Communicate and assist clients to better sell our products.',
            action: 'Created a welcoming environent for returning and newcoming clients by answering their pertinent questions and assisting them with finding the right product(s) that best fits their wants and needs.',
            result: 'Maintained a 97% client satisfaction rating while also providing outstanding support.',
            readtime: '*5 minute read'
          }
        ]
      }
    render() {
        return (
            <div>
        <Navbar />
            <Sources />
            <section className="projects__section">  
                <Projects projects={this.state.projects} key={this.state.projects.id}/>
            </section>

            <section className="references">
                <div className="bar bar--blue-2">
                    <div className="title__section--title-box">
                        <h1 className="h1 title__section--title">References</h1>
                    </div>
                    <div className="reference-box">
                        <Reference />
                    </div>
                </div>
            </section>
          <Footer />
          </div>
        )
    }
}
