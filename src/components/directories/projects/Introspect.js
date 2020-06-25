import React, { Component } from 'react';
import Footer from '../../layout/footer/Footer';
import Navbar from '../../layout/nav/Navbar';
import MainTitle from '../../layout/titles/MainTitle';
import DisplayImage from '../../display/DisplayImage';
import SectionCard from '../../layout/section/SectionCard';
import InfoTab from '../../tabs/InfoTab';
import TabImage from '../../tabs/TabImage';
import Carousel from '../../galleries/carousel/Carousel';
import DisplayVideo from '../../display/DisplayVideo';


export default class Introspect extends Component {
    state = {

        //INTRODUCTION

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

        introVideo: { video: "https://www.youtube.com/embed/n6MYOuZsGVc" },


        // CHALLENGE SECTION
        challenge:
            {
                title: "the challenge",
                subtitle: "high level issues",
                contentTitle: "Create a visual interface that responds to brain wave data.",
                contentParagraph: ["Our goal was to create an art installation that  is intended to provide a deep self-reflective and meditative 5-minute journey for users interested in exploring their inner self."]
            },
        challengeList: [
            {
                selector: "Visuals",
                title: "High Level Issues - Visuals",
                content: ["Create resonant visuals to represent the continuous flow of the human mind."]
            },
            {
                selector: "Technology",
                title: "High Level Issues - Technology",
                content: ["Each human brain produces different data. Normalizing that data to create a maintainable visual understanding and keeping it unique was critical."]
            },
            {
                selector: "Location",
                title: "High Level Issues - Location",
                content: [
                    "An interactive Art Installation requires a great location. After finding that location, we needed to reconfigure it to fit our vision.",
                ]
            },
        ],

        // SOLUTIONS SECTION
        // VISUALS
        solutionVisuals:
            {
                title: "the solution",
                subtitle: "visuals",
                contentTitle: "Made visuals for the developer to create prototypes to test. ",
                contentParagraph: ["From the start we had an idea of what we wanted the art installation to be, but we had no idea how it might look like. To get an idea, we did extensive research into similar brain-computer interface art installations. We also researched different visual ideas that could symbolically connect to our intended experience such as: satellites, crown-shyness, mirrored cybernetic neural networks, and more."]
            },

        designGallery: {
            title: "Exhibit Designs",
            content: [""],
            height: "tab-image__content--image-box--60",
            caption: true,
            tabs: [
                {
                    selector: "Vectors",
                    image: "../assets/project/introspect/vector.png",
                    alt: "vector",
                    fit: "tab-image__content--image--cover",
                    caption: ["The participant will control a stream of wave-like patterns. The amplitude and magnitude as well as the coloration change depending on the participant’s mind state. The calming waters serve to be a conduit for the mind’s ocean of endless creativity and potential. The waters will be peaceful if the participant is focused and relaxed, if they aren’t, the ocean will become violent, dark, and frightening. This is the chosen prototype of the group, the Team's developer produced a working prototype that changes based on the brain-wave data."]
                },
                {
                    selector: "Cosmic",
                    image: "../assets/project/introspect/cosmic.png",
                    alt: "vector",
                    fit: "tab-image__content--image--cover",
                    caption: ["The planets represent the dichotomy of the small, minute worlds of atoms and celestial bodies, the glowing orbs can be construed as either electrons or comets, while the planets can either represent the atom, or celestial planets. The participant controls these comets/atoms and paints these blank, \"tabula rasa\" planets filling it with the wonder of the participant's mind. These planets can also represent the dichotomy of the left and right hemispheres of the brain, the comets/electrons will orbit different planets depending on the participant's current mind state."]
                },
                {
                    selector: "Strands",
                    image: "../assets/project/introspect/strands.png",
                    alt: "vector",
                    fit: "tab-image__content--image--cover",
                    caption: ["The participant will control four individual strands each with a different coloration. These strands will engage in a type of dance where the participant can actively control how these strands interact with each other."]
                }
            ]
        },  

        // TECHNOLOGY
        solutionTechnology:
            {
                title: "the solution",
                subtitle: "technology",
                contentTitle: "Transformed data into a visually responsive interface.",
                contentParagraph: ["Each user’s brain produces varying brainwaves, dependent on genetics, what that person has eaten, how much sleep they got, their mood, etc. Creating a balanced yet unique experience to a huge variance in brain chemistry was the biggest challenge we could tackle. "]
            },
        devPrototype:
            {
                title: "Exhibit Developer Prototypes",
                content: ["These developer prototypes displayed on the left stemmed loosely from the design prototypes as well as previous similar programs my team member found. They were done close together and developed very fast. Ultimately, we decided to not proceed with any of these prototypes."],
                caption: true,
                height: "tab-image__content--image-box--60",
                tabs: [
                    {
                        selector: "Perlin Noise",
                        image: "../assets/project/introspect/perlinNoise.png",
                        alt: "Perlin Noise",
                        fit: "tab-image__content--image--cover",
                        caption: ["Our developer loosely based this off of Ken Perlin's 1983 'Perlin Noise Gradient'. The color would take on an almost 'infrared' aesthetic and then would be projected on the body of the participant."]
                    },
                    {
                        selector: "Light Trail",
                        image: "../assets/project/introspect/lightTrail.png",
                        alt: "Light Trail",
                        fit: "tab-image__content--image--cover",
                        caption: ["Trails of light would be created according to the brain wave data produced. The trail's intensity, speed, and acceleration are the main variables that would change."]
                    },
                    {
                        selector: "Solar Cosmic",
                        image: "../assets/project/introspect/solar.png",
                        alt: "Solar Cosmic",
                        fit: "tab-image__content--image--cover",
                        caption: ["The celestial body's radiance, size, and speed would change based on the mind's brain wave data."]
                    }
                ]
            },
        userData: {
            title: "Brain User Data",
            content: [
                "Each user’s mind is extremely different and had to be balanced with care to create a smooth and responsive journey through self-discovery."
            ],
            tabs: [
                {
                    selector: "User 1",
                    image: "../assets/project/introspect/user1.png",
                    alt: "User 1"
                },
                {
                    selector: "User 2",
                    image: "../assets/project/introspect/user2.png",
                    alt: "User 2",
                },
                {
                    selector: "User 3",
                    image: "../assets/project/introspect/user3.png",
                    alt: "User 3"
                },
                {
                    selector: "User 4",
                    image: "../assets/project/introspect/user4.png",
                    alt: "User 4"
                }
            ]
        },

        // LOCATION

        solutionLocation:
            {
                title: "the solution",
                subtitle: "location",
                contentTitle: "Created a user-flow of the location and took photos.",
                contentParagraph: ["We knew we wanted the art installation to be located in one of the rooms at the University of Washington Bothell campus. We explored many different possibilities and finally found the perfect location."]
            },
        locationVideo: { video: "https://www.youtube.com/embed/mGcmPirkbm4" },

        //RESULTS

        result:
            {
                title: "the result",
                subtitle: null,
                contentTitle: "Presented to HUNDREDS of visitors in a 3-hour timespan.",
                contentParagraph: ["One of the most memorable experiences during the art installation unveiling was that one person thanked us and was tearing up saying that it really helped with what they were going through."]
            },
        perlin:
            {
                title: "Perlin Noise",
                slider: [
                    {
                        image: "../assets/project/introspect/perlin1.png",
                        alt: "Perlin Face"
                    },
                    {
                        image: "../assets/project/introspect/perlin2.png",
                        alt: "Perlin Hands"
                    }
                    
                ]
                
            },
        final: 
            {
                title: "Final Program",
                slider: [
                    {
                        image: "../assets/project/introspect/final1.png",
                        alt: "Overview"
                    },
                    {
                        image: "../assets/project/introspect/final2.png",
                        alt: "Delve"
                    },
                    {
                        image: "../assets/project/introspect/interact1.png",
                        alt: "Interaction 1"
                    },
                    {
                        image: "../assets/project/introspect/interact2.png",
                        alt: "Interaction 2"
                    }
                ]
            },
        documentaryVideo: { video: "https://www.youtube.com/embed/cv4usRnYoc0" }
    }

    
    render() {
        return (
            <div>
                <Navbar />
                <div className="pages-general">

                {/* INTRO */}
                <MainTitle content = {this.state.mainTitle} />
                <section>
                <DisplayImage content = {this.state.whatIs} />
                <DisplayImage content = {this.state.soWhat} />
                <DisplayImage content = {this.state.selfReflection} />
                
                <DisplayVideo content = {this.state.introVideo} />

                {/* CHALLENGE */}
                <SectionCard content = {this.state.challenge} />
                <InfoTab content = {this.state.challengeList} />
                <SectionCard content = {this.state.solutionVisuals}/>
                <TabImage content = {this.state.designGallery} />

                {/* TECHNOLOGY */}
                <SectionCard content = {this.state.solutionTechnology} />
                <TabImage content = {this.state.devPrototype} />
                <TabImage content = {this.state.userData} />
                <Carousel content = {this.state.perlin} />
                <Carousel content = {this.state.final} />

                {/* LOCATION */}
                <SectionCard content = {this.state.solutionLocation} />
                <DisplayVideo content = {this.state.locationVideo} />

                {/* END */}
                <SectionCard content = {this.state.result} />
                <DisplayVideo content = {this.state.documentaryVideo} />

                <div className="default-card introspect__program-box">
                    <div className="carousel__title-box">
                        <h1 className="carousel__title introspect__program--title">Program in Action</h1>
                    </div>
                    <iframe title="Introspect Program" className="introspect__program" src="https://introspect-imd.firebaseapp.com/#/" frameBorder="0"></iframe>
                </div>
                </section>

                </div>
                <Footer />
            </div>
        )
    }
}
