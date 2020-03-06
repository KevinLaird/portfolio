import React, { Component } from 'react'

export class project extends Component {
    render() {
        return (
                <div className="project-card project-card--blue">
                    <h1 className="h1 project-card--title">Wing Luke</h1>
                    <ul className="project-card__list project-card__list--title">
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Type:</strong> Case Study</p>
                        </li>
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Role:</strong> UX Researcher</p>
                        </li>
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Team:</strong> Four people</p>
                        </li>
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Stakeholder:</strong> Wing Luke Museum</p>
                        </li>
                    </ul>
                    <ul className="project-card__list project-card__list--content">
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Mission:</strong> Increase visitor return rate and improve user journey.</p>
                        </li>
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Task:</strong> Collect user research using different research methods to find solutions to visitor wants and needs.</p>
                        </li>
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Action:</strong> Conducted visual and verbal surveys at the Wing Luke Museum</p>
                        </li>
                        <li className="project-card__list-item">
                            <p className="body-2"><strong>Result:</strong> Provided a 23 page report for the client regarding the research collected and potential solutions to the problem set. Our client utilized many of the solutions or recommendations in our report.</p>
                        </li>
                    </ul>
                    <div className="project-card__button-box">
                        <div>
                            <a href="#" className="link-btn link-btn--primary-1"> Learn More <i className="fas fa-chevron-right link-btn__icon-padding--sm"></i></a>
                            <p className="read-time">*5 Minute read</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default project
