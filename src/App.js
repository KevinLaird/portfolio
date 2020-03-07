import React, { Component } from 'react';
import './App.scss';
import Navbar from './react/layout/nav/Navbar';
import Sources from './react/components/sources/Sources';
import Project from './react/components/projects/project/Project';
import Projects from './react/components/projects/Projects';
import Reference from './react/components/references/reference/Reference';
import Footer from './react/layout/footer/Footer';



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
    ],
    references: [
      {
        id: 1,
        title: 'Abraham Avnisan',
        subtitle: 'University of Washington Professor - Supervisor',
        image: './assets/reference/Abe.jpeg',
        testimony1: 'I had the pleasure of working with Kevin across his two years at University of Washington Bothell\'s Interactive Media Design program, including during his last semester when he worked as the UI/UX Designer for his team\'s capstone project.',
        testimony2: "Kevin is a talented designer with an exceptional work ethic. He is passionate about what he does, and it comes through not only in the high quality of work that he produces, but in the positive relationships he forges with the people he collaborates with. As a team player, Kevin is a good listener and compromiser, but he also isn't afraid to advocate for a position he strongly believes in. I am confident that Kevin will make a positive and valuable addition to any company or project he contributes to."
      },
      {
        id: 2,
        title: 'Wanda Gregory, PhD',
        subtitle: 'University of Washington Professor - Supervisor',
        image: './assets/reference/Wanda.jpeg',
        testimony1: "I have known Kevin for several years now through my classes in game and interactive media design. I found Kevin to be an extremely creative designer and thoughtful student whose work was user-focused and innovative.",
        testimony2: "He was a solid collaborator on team projects. Someone willing to go over and beyond to help his team make their deadlines and deliverables. The words which come to mind when I think of Kevin include solid communicator (verbal and written), collaborator, and innovator with a positive attitude. I think he will be an excellent addition to any company and will certainly add to the success of any project he is involved with."
      },
      {
        id: 3,
        title: 'Rutuja Nehra',
        subtitle: 'UI/UX Designer - Team Member',
        image: './assets/reference/Rutuja.jpeg',
        testimony1: "Kevin brings a mixture of creative professionalism yet light-hearted fun with everything he works on. He is always eager to learn and constantly improving his skillsets in a multitude of areas.",
        testimony2: "Working with him on projects was always an enjoyable experience as he went above and beyond to ensure that he maintained excellent communication with his team members and that his work exceeded expectations. As a fellow designer, I would highly recommend Kevin to anyone as I believe he will excel in any position he finds himself in."
      }
    ]
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <Sources />
        <section>
          <Projects />
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
                    <Reference references={this.state.references}/>
                </div>
              </div>
          </section>
          <Footer />
      </div>
  );
  }
  
}

export default App;
