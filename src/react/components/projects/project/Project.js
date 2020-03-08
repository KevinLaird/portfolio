import React, { Component } from 'react'

export class project extends Component {
    render() {
        const project = this.props.projects;
        return (
                <div className="project-card">
                    <div className="project-card__title-box">
                        <div className="project-card__title--sub-box">
                            <p className="body-2 project-card__title--sub"><strong>Type:</strong> {project[0].type}</p>
                            <p className="body-2 project-card__title--sub"><strong>Role:</strong> {project[0].role}</p>
                        </div>
                        <h1 className="h1 project-card--title">{project[0].title}</h1>
                    </div>
                    
                    <ul className="project-card__list project-card__list--content">
                        <li className="project-card__list-item">
                        <h3 className="h3">Mission:</h3>
                            <p className="body-2">{project[0].mission}</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Task:</h3>
                            <p className="body-2">{project[0].task}</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Action</h3>
                            <p className="body-2"> {project[0].action}</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Result</h3>
                            <p className="body-2">{project[0].result}</p>
                        </li>
                    </ul>
                    <button className="project-card__exit"></button>

                    <div className="project-card__button-box">
                        <div>
                            <a href="#" className="link-btn link-btn--primary-2"> Learn More</a>
                            <p className="read-time">{project[0].readtime}</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default project
