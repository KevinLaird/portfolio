import React, { Component } from 'react'


export default class DisplayImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false
        };

    this.updatePredicate = this.updatePredicate.bind(this);
    };
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 901 });
    };

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
                <img className = "displayImage__image" src={display.img} alt={display.imgAlt}/>
            </div>
        )
    }
    

    render() {
        const display = this.props.displayImage;
        const isDesktop = this.state.isDesktop;

        let displayImage;
        if(display.orientation === true && isDesktop){
            displayImage = (
                <div className = {"displayImage__background displayImage__layout"}>
                    {this.image()}
                    {this.title()}
                </div>
            )
        } else{
            displayImage =(
                <div className = {"displayImage__background displayImage__layout"}>
                    {this.title()}
                    {this.image()}
                </div>
            )
            
        }
        
        return (displayImage)
    }
}


