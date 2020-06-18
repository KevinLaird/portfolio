import React, { Component } from 'react'
import Projects from '../projects/Projects';
import ProfileComment from '../comments/ProfileComment';
import Footer from '../layout/footer/Footer';
import Navbar from '../layout/nav/Navbar';
import SectionTitleV2 from '../layout/titles/SectionTitleV2';

export default class Home extends Component {
    state = {
        nav: { home: true },
        projectTitle: { 
          title: "my work", 
          margin: "section-title-2__margin"
        },
        projects: [
          {
            
            title: 'Hostwinds',
            type: 'Web Hosting - Employer',
            role: 'Web Host Support Agent',
            time: "2020 • 4 Months",
            stakeholder: 'Hostwinds LLC',
            mission: 'Ensure quality support and hosting services to clients all around the world',
            task: 'Communicate and assist clients to better sell our products.',
            action: 'Created a welcoming environent for returning and newcoming clients by answering their questions and assisting with website configuration.',
            result: '//',
            readtime: '*5 minute read',
            cta: "/hostwinds"
          },
          {
            title: 'IntroSpect',
            type: 'Art Installation - Educational',
            role: 'UI/UX Designer',
            time: "2019 • 6 Months",
            stakeholder: 'University of Washington',
            mission: 'Create a user experience to visualize brainwave activity.Increase visitor return rate and improve user journey.',
            task: 'Made visual designs for the developer to rapidly create prototypes for the project.',
            action: 'Conducted visual research, competitive analyses, and brainwave-sensor research to create a resonant visual interface.',
            result: 'Presented the art installation to hundreds of guests, creating a lasting impact on both the visitors and the University of Washington.',
            readtime: '*5 minute read',
            cta: "/introspect"
          },
          {
            
            title: 'SEED',
            type: 'Computer Game - Internship',
            role: 'Level Designer',
            time: "2019 • 6 Months",
            stakeholder: 'Digital Future Lab',
            mission: 'Create thoughtful levels that challenges the player’s problem solving skills.',
            task: 'Go through the design curriculum provided by the firm to improve my understanding of great game design.',
            action: 'Produced over 40 pages of notes and provided in-depth analyses of my experiences.',
            result: 'Presented the art installation to hundreds of guests, creating a lasting impact on both the visitors and the University of Washington.',
            readtime: '*5 minute read',
            cta: "/dfl"
          },
          {
            title: 'Wing Luke',
            type: 'Case Study - Educational',
            role: 'UX Researcher',
            time: "2018 • 3 Months",
            stakeholder: 'Wing Luke Museum',
            mission: 'Increase visitor return rate and improve user journey.',
            task: 'Collect user research using different research methods to find solutions to visitor wants and needs.',
            action: 'Conducted visual and verbal surveys at the Wing Luke Museum.',
            result: 'Provided a 23 page report for the client regarding the research collected and potential solutions to the problem set. Our client utilized many of the solutions or recommendations in our report.',
            readtime: '*5 minute read',
            cta: "/wing"
          },
          // {
            
          //   title: 'More Projects...',
          //   type: 'Personal Development',
          //   role: 'Developer/Designer',
          //   time: "N/A",
          //   mission: 'Design a board game that analyzes climate change in a creative way.',
          //   task: 'Find my team\'s target audience, how to create game mechanics that are easy to use and engaging for that audience, and how to balance those systems to create a balanced and competitive setting.',
          //   action: '--',
          //   result: 'Created a board game that implements a balance between cooperation and competition.',
          //   readtime: '*5 minute read'
          // }
        ],

        profiles: [
          {
            title: 'Abraham Avnisan',
            subtitle: 'University of Washington Professor - Supervisor',
            image: './assets/reference/Abe.jpeg',
            testimony: [
                      'I had the pleasure of working with Kevin across his two years at University of Washington Bothell\'s Interactive Media Design program, including during his last semester when he worked as the UI/UX Designer for his team\'s capstone project.',
                      "Kevin is a talented designer with an exceptional work ethic. He is passionate about what he does, and it comes through not only in the high quality of work that he produces, but in the positive relationships he forges with the people he collaborates with. As a team player, Kevin is a good listener and compromiser, but he also isn't afraid to advocate for a position he strongly believes in. I am confident that Kevin will make a positive and valuable addition to any company or project he contributes to."
            ]
          },
          {
            title: 'Wanda Gregory, PhD',
            subtitle: 'University of Washington Professor - Supervisor',
            image: './assets/reference/Wanda.jpeg',
            testimony: [
                      "I have known Kevin for several years now through my classes in game and interactive media design. I found Kevin to be an extremely creative designer and thoughtful student whose work was user-focused and innovative.",
                      "He was a solid collaborator on team projects. Someone willing to go over and beyond to help his team make their deadlines and deliverables. The words which come to mind when I think of Kevin include solid communicator (verbal and written), collaborator, and innovator with a positive attitude. I think he will be an excellent addition to any company and will certainly add to the success of any project he is involved with."
            ]
          },
          {
            title: 'Rutuja Nehra',
            subtitle: 'UI/UX Designer - Team Member',
            image: './assets/reference/Rutuja.jpeg',
            testimony: [
                      "Kevin brings a mixture of creative professionalism yet light-hearted fun with everything he works on. He is always eager to learn and constantly improving his skillsets in a multitude of areas.",
                      "Working with him on projects was always an enjoyable experience as he went above and beyond to ensure that he maintained excellent communication with his team members and that his work exceeded expectations. As a fellow designer, I would highly recommend Kevin to anyone as I believe he will excel in any position he finds himself in."
            ]
          }
        ]
      }
    render() {
        return (
        <div>
          
        <Navbar content = { this.state.nav } />
            <SectionTitleV2 content = { this.state.projectTitle } />
            <section className="projects__section">  
            
                <Projects content={ this.state.projects } />
            </section>

            <section className="references">
                <div className="references-box">
                    <div className="profile-comment--title-box">
                        <h1 className="h1 profile-comment--title">References</h1>
                    </div>
                    <div className="profile-comment-box">
                        <ProfileComment profileComment = {this.state.profiles} />
                    </div>
                </div>
            </section>
          <Footer />
          </div>
        )
    }
}
