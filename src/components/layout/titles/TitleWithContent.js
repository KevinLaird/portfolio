import React, { Component } from 'react'

export default class TitleWithContent extends Component {
    render() {
        const c = this.props.content;

        const content = (
            <div className="title-with-content__item">
                <h1 className="h1 title-with-content__title">{c.title}</h1>  
                <h3 className="h3 title-with-content__subtitle">{c.subtitle}</h3>
                {c.content.map((p, index) => (
                    <p className="p title-with-content__content" key={index}>{p}</p>
                ))}
            </div>            
        )
        return (content);
    }
}
