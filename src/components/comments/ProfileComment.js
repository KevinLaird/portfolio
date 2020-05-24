import React, { Component } from 'react'

export default class ProfileCommenter extends Component {



    render() {
        const comment = this.props.profileComment;

        const profileComment = (
            comment.map((profile, index) => (
                <div key={index} className="profile-comment__item">
                    <div className="profile-comment__item--profile">
                        <img className="profile-comment__item--profile-img" src={ profile.image } alt={ profile.title }></img>
                        <div className="profile-comment__item--title-box">
                            <h2 className="profile-comment__item--title">{ profile.title }</h2>
                            <p className="profile-comment__item--subtitle">{ profile.subtitle }</p>
                        </div>
                    </div>
                    {profile.testimony.map(p => (
                        <p key={index} className="profile-comment__comment">
                            {p}
                        </p> 
                    ))}
                    
                </div>
        )));

        return(profileComment);
            

            
    }
}
