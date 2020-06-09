import React, { Component } from 'react';
import Footer from '../../layout/footer/Footer';
import Navbar from '../../layout/nav/Navbar';
import MainTitle from '../../layout/titles/MainTitle';
import DisplayImage from '../../display/DisplayImage';
import SectionCard from '../../layout/section/SectionCard';
import InfoTab from '../../tabs/InfoTab';
import TabImage from '../../tabs/TabImage';
import Carousel from '../../carousel/Carousel';
import DisplayVideo from '../../display/DisplayVideo';

export default class Wing extends Component {
    state = {
        mainTitle: 
        {
            name: 'Wing Luke Experience Project',
            descriptor: 'UX Researcher',
            img: '../assets/project/wing/bg-wing.jpg',
            imgAlt: 'Wing',
            p: ['The Wing Luke Experience Project is an extensive case study whose goal is to identify problem sets from visitors through qualitative research, then finding solutions to the issues that are identified from the data analysis that will improve the overall visitor journey and increase visitor return rate and overall satisfaction.',
                "Our Interactive Media Design (IMD) group observed the current visitor experience at the Wing Luke Museum. We conducted ethnographic research, observations and visitor interviews. Through those steps we mapped out the wholistic visitor journey, starting from the arrival at a venue to entering through the front doors and walking throughout the space."],
            display: "u-display-none",
        },
        observations:
        {
            title: "What did you notice?",
            content: "After interviewing over 15 individuals, the majority of the feedback stemmed from the starting point, the Visitor Desk. Visitors need to feel like they have an understanding of what is in store, where to go, and what will make their experience a positive one. We want visitors to return and tell others in their network to visit the Wing Luke Museum.",
            img: "../assets/project/wing/observations.svg",
            design: "displayImage--primary",
            border: "displayImage--border",
            orientation: false
        },
        partner:{
            title: "About our Partner",
            subtitle: "The Wing Luke",
            contentTitle: "Seattle-based Asian-American & Pacific-Islander Museum",
            contentParagraph: ["The museum connects everyone to the dynamic history, cultures, and art of Asian Pacific Americans through vivid storytelling and inspiring experiences to advance racial and social equity.",
                               "As a National Park Service Affiliated Area and the first Smithsonian affiliate in the Pacific Northwest, The Wing Museum of the Asian Pacific American Experience offers an authentic perspective on a unique version of the American history"
                              ]
        },
        researchMethods:[
            {
                selector: "Field Visit",
                title: "Field Visit",
                content: "Our first field visit consisted of meeting our Wing point of contact, attending one of the busiest days of the month Free Admission on first Tuesday of every month), and getting a feel on the museum space. After this visit, our team collected notes regarding our first impressions with the museum. We compiled photos of key aspects of the in-person visitor experience and visitor guide with annotations on our initial findings."
            },
            {
                selector: "Observation Visit",
                title: "Observation Visit",
                content: "Our second visit consisted of team members individually toured the museum and selected individuals to observe. We focused on observing experiences from end to end. We ultimately hope to create journey maps of the observations and highlight key aspects of their emotions. At this point, we have detailed notes of the observations and focused on key dialogs, sounds, emotions, and movement."
            },
            {
                selector: "Ethnographic Interviews",
                title: "Ethnographic Interviews",
                content: "Our third visit consisted of preparing survey questions. The survey questions were built to be answered between 5-8 minutes and a partner system: one individual the interviewer and the other a scribe. We formulated our questions into two sections: 1) Verbal - with a total of eight questions and 2) Interactive - where we created an interactive photo tri-fold board where individuals were to answer the question: “What did you notice?” We interviewed a total of 15 individuals."
            },
        ],
        tour: {
            title: "High Overview",
            slider: [
                {
                    image: "../assets/project/wing/front-signage.png",
                    alt: "Front Signage"
                },
                {
                    image: "../assets/project/wing/paw.png",
                    alt: "PAWS!!!"
                },
                {
                    image: "../assets/project/wing/flow.png",
                    alt: "User Flow"
                },
                {
                    image: "../assets/project/wing/signage.png",
                    alt: "More Signage"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="pages-general">
                    <MainTitle content = {this.state.mainTitle} />
                    <DisplayImage content = {this.state.observations} />
                    <SectionCard content = {this.state.partner} />
                    <InfoTab content = {this.state.researchMethods} />
                    <Carousel content = {this.state.tour} />
                </div>
                <Footer />
            </div>
        )
    }
}
