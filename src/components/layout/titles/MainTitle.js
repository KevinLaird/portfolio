import React, { Component } from 'react'

export class MainTitle extends Component {
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

    title(){
        const title = this.props.mainTitle;
        return(
        <div className="main-title__title-box">
            <h1 className="main-title__title--name">
                {title.name}
            </h1>
            <div className="main-title__title--slash"></div>
            <h2 className="main-title__title--job">
                {title.descriptor}
            </h2>
        </div>
    )};

    image(){
        const title = this.props.mainTitle;
        return(
            <div className="main-title__image-box">
                <div className="main-title__image__background main-title__image__background--primary"></div>
                <div className="main-title__image">
                    <img src={title.img} alt={title.imgAlt} className="main-title__image__format main-title__image__format--picture"></img>
                </div>
            </div> 
        )
    };

    button() {
        const title = this.props.mainTitle;
        return(
            <div className="main-title__btn-box">
                <a href="../assets/profile/resume.pdf" download className={"link-btn link-btn--accent-2 main-title__btn " + title.display}>Resum&eacute;</a>
                <a href="https://www.linkedin.com/in/kevin-laird-ab2090150/" target="_blank" className={"link-btn link-btn--accent-2 main-title__btn " + title.display} rel="noopener noreferrer">LinkedIn</a>
            </div>
        )
        
    };

    content() {
        const title = this.props.mainTitle;
        return(
            <div className="main-title__content-box">
                <div className="main-title__underlay main-title__underlay--primary"></div>
                <div className="main-title__paragraph-box main-title__paragraph-box--design">
                    {title.p.map((p, index) => (
                        <p key={index} className={"main-title__paragraph " + title.size}>
                            {p}
                        </p> 
                    ))}
                </div>
            </div>
        )
    };

render() {
    const isDesktop = this.state.isDesktop;

    return(
        <div>
        {isDesktop ? (
          <div>
            <div className="main-title-box">
                {this.image()}
                <div className="main-title main-title__content">
                    {this.title()}
                    {this.content()}
                    {this.button()}
                </div>
            </div>
          </div>
        ) : (
          <div className="main-title-box">
              <div className="main-title__responsive">
                {this.title()}
                {this.image()}
              </div>
                <div className="main-title main-title__content">
                    {this.content()}
                    {this.button()}
                </div>
            </div>
        )}
      </div>
    );
    }

}

export default MainTitle;