import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        const project = this.props.projects;
        return project.map((project) => (
            <button key={project.id} className="projects__links"><p className="projects__links--content">{project.title}</p></button>
            )
        )
    }
}

export default Projects
