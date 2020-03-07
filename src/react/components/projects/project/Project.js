import React, { Component } from 'react'

export class project extends Component {
    render() {
        return (
                <div className="project-card">
                    <div className="project-card__title-box">
                        <div className="project-card__title--sub-box">
                            <p className="body-2 project-card__title--sub"><strong>Type:</strong> Case Study</p>
                            <p className="body-2 project-card__title--sub"><strong>Role:</strong> UX Researcher</p>
                        </div>
                        <h1 className="h1 project-card--title">Wing Luke</h1>
                    </div>
                    
                    <ul className="project-card__list project-card__list--content">
                        <li className="project-card__list-item">
                        <h3 className="h3">Mission:</h3>
                            <p className="body-2"> Increase visitor return rate and improve user journey.</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Task:</h3>
                            <p className="body-2"><strong>Task:</strong> Collect user research using different research methods to find solutions to visitor wants and needs.</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Action</h3>
                            <p className="body-2"><strong>Action:</strong> Conducted visual and verbal surveys at the Wing Luke Museum</p>
                        </li>
                        <li className="project-card__list-item">
                            <h3 className="h3">Result</h3>
                            <p className="body-2"><strong>Result:</strong> Provided a 23 page report for the client regarding the research collected and potential solutions to the problem set. Our client utilized many of the solutions or recommendations in our report.</p>
                        </li>
                    </ul>
                    <button className="project-card__exit"></button>

                    <div className="project-card__button-box">
                        <div>
                            <a href="#" className="link-btn link-btn--primary-2"> Learn More</a>
                            <p className="read-time">*5 Minute read</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default project
