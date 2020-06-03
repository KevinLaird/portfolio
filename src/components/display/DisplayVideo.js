import React, { Component } from 'react'

export default class DisplayVideo extends Component {
    render() {
        const content = (
            <div className="u-flex-center">
                    <div className="video-box">
                        <iframe
                        className="video"
                            src={this.props.content.video} 
                            frameBorder="0" 
                            allow="accelerometer; 
                                autoplay; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
        )
        return ( content )
    }
}
