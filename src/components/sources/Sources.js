import React, { Component } from 'react'

export class sources extends Component {
    render() {
        return (
            <section className = "sources">
                <div className="sources__sources">
                    <div><img src="assets/general/DFL_logo_400.png" alt="Digital Future Lab" className="sources__img sources__img-1"></img></div>
                    <div><img src="assets/general/universityLogo.png" alt="University of Washington" className="sources__img sources__img-2"></img></div>
                    <div><img src="assets/general/wingLukeLogo.png" alt="Wing Luke Museum" className="sources__img sources__img-3"></img></div>
                    <div><img src="assets/general/hostwindsLogo.png" alt="Hostwinds" className="sources__img sources__img-3"></img></div>
                </div>
                <div className="sources__sources">
                    <p className="sources__text">
                        Designing memorable experiences for people.
                    </p>
                </div>
                
            </section>
        )
    }
}

export default sources
