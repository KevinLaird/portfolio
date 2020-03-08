import React, { Component } from 'react';
import './App.scss';
import Navbar from './react/layout/nav/Navbar';
import Sources from './react/components/sources/Sources';
import Project from './react/components/projects/project/Project';
import Projects from './react/components/projects/Projects';
import Reference from './react/components/references/reference/Reference';
import Footer from './react/layout/footer/Footer';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
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
        readtime: '*5 minute read'
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
      }
    ]
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sources />
        <section className="projects__section">
          <div className="projects__links-box">
            <Projects projects={this.state.projects}/>
          </div>
          <div className="projects">
            <Project projects={this.state.projects}/>
          </div>
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
      </BrowserRouter>
  );
  }
  
}

export default App;
