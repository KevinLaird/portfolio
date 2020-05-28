import React, { Component } from 'react'

export default class DefaultCarousel extends Component {

    render() {
        const carousel = this.props.content;

        const content = (
            <div className="carousel-box">
               
                {carousel.map((item, index) => (
                    <div>
                        <div className = "carousel__image-box" key = {index}>
                            <img className="carousel__image" src={item.image} alt={item.alt} />
                            <div className="carousel__caption-box">
                            <h2 className="carousel__caption--title">{item.title}</h2>
                            <p className="carousel__caption">
                                <div className="carousel__caption--subtitle">
                                    {item.subtitle}
                                </div>
                                {item.caption}
                            </p>
                        </div>
                        </div>
                        
                    </div>
                ))} 
            </div>
        )
        return ( content );
    }
}
