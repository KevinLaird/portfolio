import React, { Component } from 'react'

export class Reference extends Component {
    state = {
        references: [
            {
              id: 1,
              title: 'Abraham Avnisan',
              subtitle: 'University of Washington Professor - Supervisor',
              image: './assets/reference/Abe.jpeg',
              testimony1: 'I had the pleasure of working with Kevin across his two years at University of Washington Bothell\'s Interactive Media Design program, including during his last semester when he worked as the UI/UX Designer for his team\'s capstone project.',
              testimony2: "Kevin is a talented designer with an exceptional work ethic. He is passionate about what he does, and it comes through not only in the high quality of work that he produces, but in the positive relationships he forges with the people he collaborates with. As a team player, Kevin is a good listener and compromiser, but he also isn't afraid to advocate for a position he strongly believes in. I am confident that Kevin will make a positive and valuable addition to any company or project he contributes to."
            },
            {
              id: 2,
              title: 'Wanda Gregory, PhD',
              subtitle: 'University of Washington Professor - Supervisor',
              image: './assets/reference/Wanda.jpeg',
              testimony1: "I have known Kevin for several years now through my classes in game and interactive media design. I found Kevin to be an extremely creative designer and thoughtful student whose work was user-focused and innovative.",
              testimony2: "He was a solid collaborator on team projects. Someone willing to go over and beyond to help his team make their deadlines and deliverables. The words which come to mind when I think of Kevin include solid communicator (verbal and written), collaborator, and innovator with a positive attitude. I think he will be an excellent addition to any company and will certainly add to the success of any project he is involved with."
            },
            {
              id: 3,
              title: 'Rutuja Nehra',
              subtitle: 'UI/UX Designer - Team Member',
              image: './assets/reference/Rutuja.jpeg',
              testimony1: "Kevin brings a mixture of creative professionalism yet light-hearted fun with everything he works on. He is always eager to learn and constantly improving his skillsets in a multitude of areas.",
              testimony2: "Working with him on projects was always an enjoyable experience as he went above and beyond to ensure that he maintained excellent communication with his team members and that his work exceeded expectations. As a fellow designer, I would highly recommend Kevin to anyone as I believe he will excel in any position he finds himself in."
            }
          ]
    }
    render() {
        return this.state.references.map((reference) => (
                <div key={reference.id} className="reference__item">
                    <div className="reference__item--profile">
                        <img className="reference__item--profile-img" src={ reference.image } alt={ reference.title }></img>
                        <div className="reference__item--title-box">
                            <h2 className="h2 reference__item--title">{ reference.title }</h2>
                            <p className="body-1 reference__item--subtitle">{ reference.subtitle }</p>
                        </div>
                    </div> 
                    <p className="body-1 style-2">
                        {reference.testimony1}
                    </p> 
                    <p className="body-1 style-2">
                        {reference.testimony2}                    
                    </p>
                </div>
        ));
    }
}

export default Reference
