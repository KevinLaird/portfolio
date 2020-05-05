import React, { Component } from 'react'

export class TitleContent extends Component {
render() {
    const title = this.props.titleContent;

    const titleContent = (
    <section className="bio default-layout">
            <div className="profile-box">
                <div className="profile__background profile__background--primary"></div>
                <div className="profile">
                    <img src={title.img} alt={title.imgAlt} className="profile__img profile__img--me"></img>
                </div>
            </div>
            
            <div className="content">
            <div className="content__title-box">
                    <h1 className="content__title--name">
                        {title.name}
                    </h1>
                    <div className="content__title--slash"></div>
                    <h2 className="content__title--job">
                        {title.descriptor}
                    </h2>
                </div>
                <div className="content__content-box">
                    <div className="content__underlay content__underlay--primary"></div>
                    <div className="content__paragraph-box content__paragraph-box--primary">
                        <p className="content__paragraph">
                            {title.p1}
                        </p>
                        <p className="content__paragraph">
                            {title.p2}
                            </p>
                    </div>
                </div>
                <div className="content__btn-box">
                    <a href="../assets/profile/resume.pdf" download className="link-btn link-btn--accent-2 content__btn">Resum&eacute;</a>
                    <a href="https://www.linkedin.com/in/kevin-laird-ab2090150/" target="_blank" className="link-btn link-btn--accent-2 content__btn" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </section>);
    return(titleContent);
    }

}

export default TitleContent;