import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';

// STATE INPUTS
// TITLE
// SLIDER ARRAY
    // IMAGE
    // ALT


export default class Carousel extends Component {

    titleDisplay() {
        if ( this.props.content.title ) {
            return (
            <div className="carousel__title-box">
                <h1 className="carousel__title">{ this.props.content.title }</h1>
            </div>
            )
        }
        return <div className="carousel__padding-listener--top"></div>
    }


    render() {
        const carousel = this.props.content;
            const content = (
            <div className="carousel-box">
                {this.titleDisplay()}
                
                <AwesomeSlider 
                    animation="openAnimation">
                        {carousel.slider.map((item, index) => (
                            <div className="carousel__image-box" key = {index}>
                                <img className="carousel__image" src={item.image} alt={item.alt} />
                            </div>
                        ))}
                </AwesomeSlider>
            </div>
            );

        return ( content );
    }
}