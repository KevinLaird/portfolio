import React, { Component } from 'react'

export default class TitleList extends Component {
    render() {
        const list = this.props.content;

        const content = (
            <div className="title-list__box">
                {list.map((item, index) => (
                    <div key={`${item.title}--list-item--${index}`} className="title-list__item">
                    <div className="title-list__number">{index + 1}</div>
                    <h1 className="h1 title-list__title">{item.title}</h1>  
                    <h3 className="h3 title-list__subtitle">{item.subtitle}</h3>
                    {item.content.map((p, index) => (
                        <div key={`${item.title}--paragraph--${index}`}>
                            <p className="p title-list__content">{p}</p>
                        </div>
                    ))}
                    </div> 
                ))}
            </div>
                       
        )
        return (content);
    }
}
