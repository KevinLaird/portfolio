import React, { Component } from 'react'

export default class SectionCard extends Component {
    render() {
        const card = this.props.content;

        const content = (
            <div className="section-card">
                <div className="section-card__title__box">
                    <h1 className="section-card__title">{card.title}</h1>
                    <h2 className="section-card__subtitle">{card.subtitle}</h2>
                </div>
                <div className="section-card__content">
                    <h3 className="section-card__content-title">{card.contentTitle}</h3>
                    {card.contentParagraph.map((item, index) => (
                        <p key={`${card.title}-sectioncard-${index}`}className="section-card__content-paragraph">
                            {item}
                        </p>
                    ))}
                    
                </div>
            </div>
        )
        return ( content )
    }
}
