import React, { Component } from 'react'

export class Reference extends Component {
    render() {
        return this.props.references.map((reference) => (
                <div className="reference__item">
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
