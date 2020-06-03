import React, { Component } from 'react'
// import Project from './project/Project';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export class Projects extends Component {
    
    render() {
        const project = this.props.content;
        
        const content = (
            <Tabs>
              <TabList>
                <div className="projects__links-box">
                    {project.map((project, index) => (
                        <Tab>
                            <button key={`${index}-button-${project.title}`} className="projects__links"><p className="projects__links--content">{project.title}</p></button>
                        </Tab>
                    ))}
                </div>
              </TabList>
              <div className="projects">
                    {project.map((project, index) => (
                    <TabPanel key={index}>
                    <div className="project-card">
                    <div className="project-card__title-box">
                        <div className="project-card__title--sub-box">
                            <p className="body-2 project-card__title--sub"><strong>Type:</strong> {project.type}</p>
                            <p className="body-2 project-card__title--sub"><strong>Role:</strong> {project.role}</p>
                            <p className="body-2 project-card__title--sub"><strong>Time:</strong> {project.time}</p>
                        </div>
                        <h1 className="h1 project-card--title">{project.title}</h1>
                    </div>
                    
                    <ul className="project-card__list project-card__list--content">
                        <li className="project-card__list-item">
                        <h3 className="h3">Mission</h3>
                            <p className="body-2">{project.mission}</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Task</h3>
                            <p className="body-2">{project.task}</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Action</h3>
                            <p className="body-2"> {project.action}</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Result</h3>
                            <p className="body-2">{project.result}</p>
                        </li>
                    </ul>

                    <div className="project-card__button-box">
                        <div>
                            <a href={project.cta} className="link-btn link-btn--primary-2"> Learn More</a>
                            <p className="read-time">{project.readtime}</p>
                        </div>
                    </div>
                </div>
                </TabPanel>
                    ))}
                </div>
            </Tabs>
          );


        return(content);
        }
    }


export default Projects;
