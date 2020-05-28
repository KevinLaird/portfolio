import React, { Component } from 'react';
import Footer from '../../layout/footer/Footer';
import Navbar from '../../layout/nav/Navbar';
import MainTitle from '../../layout/titles/MainTitle';
import DisplayImage from '../../display/DisplayImage';
import SectionCard from '../../layout/section/SectionCard';
import InfoTab from '../../tabs/InfoTab';
import DefaultCarousel from '../../display/DefaultCarousel';


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
            },
        challenge:
            {
                title: "the challenge",
                subtitle: "high level issues",
                contentTitle: "Create a visual interface that responds to brain wave data.",
                contentParagraph: "Our goal was to create an art installation that  is intended to provide a deep self-reflective and meditative 5-minute journey for users interested in exploring their inner self."
            },
        challengeList: [
            {
                selector: "Visuals",
                content: "Create resonant visuals to represent the continuous flow of the human mind."
            },
            {
                selector: "Technology",
                content: "Each human brain produces different data. Normalizing that data to create a maintainable visual understanding and keeping it unique was critical."
            },
            {
                selector: "Location",
                content: "An interactive Art Installation requires a great location. After finding that location, we needed to reconfigure it to fit our vision."
            },
        ],
        solutionVisuals:
            {
                title: "the solution",
                subtitle: "visuals",
                contentTitle: "Made visuals for the developer to create prototypes to test. ",
                contentParagraph: "//"
            },
        designGallery: 
        [
            {
                image: "../assets/project/introspect/dance.jpg",
                alt: "cosmic",
                title: "Design",
                subtitle: "Cosmic",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient vitae sed in pharetra, consequat, nec. Ac et diam facilisis amet vitae praesent. Velit, adipiscing in viverra et, cras vitae aliquet. Non morbi lorem nisl, ullamcorper.",
               
            },
            {
                image: "../assets/project/introspect/cosmic.jpg",
                alt: "cosmic",
                title: "Design",
                subtitle: "Cosmic",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient vitae sed in pharetra, consequat, nec. Ac et diam facilisis amet vitae praesent. Velit, adipiscing in viverra et, cras vitae aliquet. Non morbi lorem nisl, ullamcorper."
            },
            {
                image: "../assets/project/introspect/vector.jpg",
                alt: "cosmic",
                title: "Design",
                subtitle: "Cosmic",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient vitae sed in pharetra, consequat, nec. Ac et diam facilisis amet vitae praesent. Velit, adipiscing in viverra et, cras vitae aliquet. Non morbi lorem nisl, ullamcorper."
            }
        ],
            
        solutionTechnology:
            {
                title: "the solution",
                subtitle: "technology",
                contentTitle: "Transformed data into a visually responsive interface.",
                contentParagraph: "Each user’s brain produces varying brainwaves, dependent on genetics, what that person has eaten, how much sleep they got, their mood, etc. Creating a balanced yet unique experience to a huge variance in brain chemistry was the biggest challenge we could tackle. "
            },
        solutionLocation:
            {
                title: "the solution",
                subtitle: "location",
                contentTitle: "Created a user-flow of the location and took photos.",
                contentParagraph: "We knew we wanted the art installation to be located in one of the rooms at the University of Washington Bothell campus. We explored many different possibilities and finally found the perfect location."
            },
        result:
            {
                title: "the result",
                subtitle: null,
                contentTitle: "Presented to HUNDREDS of visitors in a 3-hour timespan.",
                contentParagraph: "One of the most memorable experiences during the art installation unveiling was that one person thanked us and was tearing up saying that it really helped with what they were going through."
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
                    <div className="video-box">
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
                
                </div>
                <SectionCard content = {this.state.challenge} />
                <InfoTab content = {this.state.challengeList} />
                <DefaultCarousel content = {this.state.designGallery} />
                <SectionCard content = {this.state.solutionVisuals}/>
                <div className="introspect__process-box">
                    <img className="introspect__process" src="./assets/project/introspect/process.png" alt="process"/>
                </div>
                <SectionCard content = {this.state.solutionTechnology}/>
                <SectionCard content = {this.state.solutionLocation} />
                <SectionCard content = {this.state.result} />

                
                </section>
                </div>
                <Footer />
            </div>
        )
    }
}
