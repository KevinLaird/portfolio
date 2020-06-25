import React, { Component } from 'react'
import BasicTitle from '../../layout/titles/BasicTitle';

export default class BasicGallery extends Component {
    render() {
        const gallery = this.props.content;

        const content = (
            <div className="default-card">
                <BasicTitle content = { gallery.title } />
                <div className={`gallery-basic grid${gallery.grid}`}>
                    {gallery.images.map((image, index) => (
                        <img 
                            className = "gallery-basic__image"
                            key = { `${ image }-gallery-${ index }` } 
                            src={ image } 
                            alt={ image } />
                    ))}
                </div>
            </div>
        )
        return ( content )
    }
}

BasicGallery.defaultProps = {
    content: {
        title: null
    }
}
