import React from 'react'

export default function BasicTitle( props ) {

    const content = (
        <div>
            <div className="basic-title__box">
                <h1 className="basic-title">{ props.content }</h1>
            </div>
        </div>
    )
    return ( content )
}

BasicTitle.defaultProps = {
    content: null
}
