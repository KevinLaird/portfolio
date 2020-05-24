import React, { Component } from 'react'

export class SkillCard extends Component {
    render() {
        const skillContent = this.props.skillCard;

        const skillCard = (
            <div>
                <div className="skill-card-box">
                    <div className={"skill-card__title-box skill-card__title-box--" + skillContent.design}>
                    <h2 className={"h2 skill-card__title skill-card__title--" + skillContent.design}>{skillContent.title}</h2>
                        <i className={"skill-card__title-icon " + skillContent.icon}></i>
                    </div>
                    <div className={"skill-card__content-box skill-card__content-box--" + skillContent.design}>
                        <div className={"skill-card__content skill-card__content--" + skillContent.design}>
                            <ul className="skill-card__list">
                                <li className="skill-card__list-item">
                                    {skillContent.item[0]}
                                </li>
                                <li className="skill-card__list-item">
                                    {skillContent.item[1]}
                                </li>
                                <li className="skill-card__list-item">
                                    {skillContent.item[2]}
                                </li>
                                <li className="skill-card__list-item">
                                    {skillContent.item[3]}
                                </li>
                            </ul>
                        </div>
                            <div className={"skill-card__content skill-card__content--" + skillContent.design}>
                            <ul className="skill-card__list">
                                <li className="skill-card__list-item">
                                    {skillContent.item[4]}
                                </li>
                                <li className="skill-card__list-item">
                                    {skillContent.item[5]}
                                </li>
                                <li className="skill-card__list-item">
                                    {skillContent.item[6]}
                                </li>
                                <li className="skill-card__list-item">
                                    {skillContent.item[7]}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (skillCard);
    }
}

export default SkillCard;
