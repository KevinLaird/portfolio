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
        const display = this.props.content;
        return(
            <div className="display-image__title-box">
                <h1 className={display.design + " display-image__title"}>{display.title}</h1>
                <p className={display.design + " display-image__content"}>{display.content}</p>
            </div>
        )
    }
    image() {
        const display = this.props.content;
        return (
            <div className="display-image__image-box">
                <img className = "display-image__image" src={display.img} alt={display.imgAlt}/>
            </div>
        )
    }
    

    render() {
        const display = this.props.content;
        const isDesktop = this.state.isDesktop;

        let content;
        if(display.orientation === true && isDesktop){
            content = (
                <div className = {"display-image__background display-image__layout"}>
                    {this.image()}
                    {this.title()}
                </div>
            )
        } else{
            content =(
                <div className = {"display-image__background display-image__layout"}>
                    {this.title()}
                    {this.image()}
                </div>
            )
            
        }
        
        return (content)
    }
}


