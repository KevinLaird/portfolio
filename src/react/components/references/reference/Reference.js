import React, { Component } from 'react'

export class Reference extends Component {
    render() {
        return (
                <div className="reference__item">
                    <div className="reference__item--profile">
                        <img className="reference__item--profile-img" src="./assets/reference/Abe.jpeg" alt="Abraham Avnisan"></img>
                        <div className="reference__item--title-box">
                            <h2 className="h2 reference__item--title">Abraham Avnisan</h2>
                            <p className="body-1 reference__item--subtitle">University of Washington Professor - Supervisor</p>
                        </div>
                    </div> 
                    <p className="body-1 style-2">
                        I had the pleasure of working with Kevin across his two years at University of Washington Bothell's Interactive Media Design program, including during his last semester when he worked as the UI/UX Designer for his team's capstone project.
                    </p> 
                    <p className="body-1 style-2">
                        Kevin is a talented designer with an exceptional work ethic. He is passionate about what he does, and it comes through not only in the high quality of work that he produces, but in the positive relationships he forges with the people he collaborates with. As a team player, Kevin is a good listener and compromiser, but he also isn't afraid to advocate for a position he strongly believes in. I am confident that Kevin will make a positive and valuable addition to any company or project he contributes to. 
                    </p>
                </div>
        )
    }
}

export default Reference
