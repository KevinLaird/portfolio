import React, { Component } from 'react'

export default class DisplayImage extends Component {
    title() {
        const display = this.props.displayImage;
        return(
            <div className="displayImage__title-box">
                <h1 className={display.design + " displayImage__title"}>{display.title}</h1>
                <p className={display.design + " displayImage__content"}>{display.content}</p>
            </div>
        )
    }
    image() {
        const display = this.props.displayImage;
        return (
            <div className="displayImage__image-box">
                <img src={display.img} alt={display.imgAlt}/>
            </div>
        )
    }
    

    render() {
        const display = this.props.displayImage;

        let displayImage;
        if(display.orientation === true && window.screen.width >= 768){
            displayImage = (
                <div className = {"displayImage__background " + display.design}>
                    {this.image()}
                    {this.title()}
                </div>
            )
        } else{
            displayImage =(
                <div className = {"displayImage__background " + display.design}>
                    {this.title()}
                    {this.image()}
                </div>
            )
            
        }
        
        return (displayImage)
    }
}


