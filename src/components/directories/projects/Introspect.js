import React, { Component } from 'react';
import Footer from '../../layout/footer/Footer';
import Navbar from '../../layout/nav/Navbar';
import MainTitle from '../../layout/titles/MainTitle';
import DisplayImage from '../../display/DisplayImage'

export default class Introspect extends Component {
    state = {
        mainTitle: 
            {
                name: 'IntroSpect',
                descriptor: 'UI/UX Designer',
                img: '../assets/project/introspect/logo.png',
                imgAlt: 'Kevin Laird Profile',
                p: ['By combining psychology, neuroscience, and technology, my team and I were able to create a unique introspective moment for people to experience themselves.'],
                display: "u-display-none",
                size: "u-title-2",
            },
        whatIs:
            {
                title: "What is a brain computer inteface?",
                content: "It is a direct communication pathway between the brain and an external device.",
                img: "../assets/project/introspect/concept.png",
                design: "displayImage--primary",
                border: "displayImage--border",
                orientation: false
            },
        soWhat:
            {
                title: "So what?",
                content: "My team and I wanted to explore emerging technology and design around both the limitations and the potential of that technology.",
                design: "displayImage--primary",
                img: "../assets/project/introspect/soWhat.png",
                orientation: true
            },
        selfReflection:
            {
                title: "Expanding meditation and self-reflection.",
                content: "As people become more connected with the world, they have become less in touch with themselves. Meditation and self reflection serves to reconnect people with their individuality.",
                design: "displayImage--primary",
                img: "../assets/project/introspect/meditation.png",
                orientation: false
            }
    }
    render() {


        return (
            <div>
                <Navbar />
                <div className="pages-general">

                
                <MainTitle mainTitle = {this.state.mainTitle} />
                <section>
                    <div className="displayImage__layout">
                        <DisplayImage displayImage = {this.state.whatIs} />
                        <DisplayImage displayImage = {this.state.soWhat} />
                        <DisplayImage displayImage = {this.state.selfReflection} />
                    </div>
                
                <div className="u-flex-center">
                <iframe
                className="video"
                    src="https://www.youtube.com/embed/n6MYOuZsGVc" 
                    frameBorder="0" 
                    allow="accelerometer; 
                           autoplay; 
                           encrypted-media; 
                           gyroscope; 
                           picture-in-picture" 
                    allowFullScreen>
                </iframe>
                </div>
                
                </section>
                </div>
                <Footer />
            </div>
        )
    }
}
