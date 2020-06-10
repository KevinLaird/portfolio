import React, { Component } from 'react'

export default class SectionTitleV2 extends Component {
    static defaultProps = {
        content: {
            margin: null
        }
    }

    render() {
        const content = (
            <div className={ this.props.content.margin }>
                <div className="section-title-2__bg">
                    <div className="section-title-2__content-box">
                        <div className="section-title-2__content-box--left section-title-2__content-box--design"></div>
                        <h1 className="section-title-2__content--title">{ this.props.content.title }</h1>
                        <div className="section-title-2__content-box--right section-title-2__content-box--design"></div>
                    </div>
                </div>
            </div>
        )

        return ( content )
    }
}
