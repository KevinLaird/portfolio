import React, { Component } from 'react'

export default class SectionTitle extends Component {
    render() {
        const title = this.props.sectionTitle;
        const sectionTitle = (
            <div>
                <h3 className="section-title__title">{title.title}</h3>
                <hr className="section-title__divider"></hr>
            </div>
        )
        return (sectionTitle);
    }
}
