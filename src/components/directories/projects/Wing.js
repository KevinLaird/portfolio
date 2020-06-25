import React, { Component } from 'react';
import Footer from '../../layout/footer/Footer';
import Navbar from '../../layout/nav/Navbar';
import MainTitle from '../../layout/titles/MainTitle';
import DisplayImage from '../../display/DisplayImage';
import SectionCard from '../../layout/section/SectionCard';
import InfoTab from '../../tabs/InfoTab';
import TabImage from '../../tabs/TabImage';
import Carousel from '../../galleries/carousel/Carousel';
import TitleList from '../../layout/titles/TitleList';
import BasicGallery from '../../galleries/basicGalleries/BasicGallery';

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
                content: ["Our first field visit consisted of meeting our Wing point of contact, attending one of the busiest days of the month Free Admission on first Tuesday of every month), and getting a feel on the museum space. After this visit, our team collected notes regarding our first impressions with the museum. We compiled photos of key aspects of the in-person visitor experience and visitor guide with annotations on our initial findings."]
            },
            {
                selector: "Observation Visit",
                title: "Observation Visit",
                content: [
                    "Our second visit consisted of team members individually toured the museum and selected individuals to observe.",
                    "We focused on observing experiences from end to end. We ultimately hope to create journey maps of the observations and highlight key aspects of their emotions. At this point, we have detailed notes of the observations and focused on key dialogs, sounds, emotions, and movement."]
            },
            {
                selector: "Ethnographic Interviews",
                title: "Ethnographic Interviews",
                content: [
                    "Our third visit consisted of preparing survey questions. The survey questions were built to be answered between 5-8 minutes and a partner system: one individual the interviewer and the other a scribe. We formulated our questions into two sections:",
                    "1) Verbal - with a total of eight questions", 
                    "2) Interactive - where we created an interactive photo tri-fold board where individuals were to answer the question: “What did you notice?” We interviewed a total of 15 individuals."
                ]
            },
        ],
        tour: {
            title: "Research Overview",
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
        },
        survey: {
            title: "Surveys",
            height: "tab-image__content--image-box--60",
            caption: true,
            tabs: [
                {
                    selector: "Verbal Survey",
                    image: '../assets/project/wing/verbalSurvey.png',
                    alt: "Verbal Survey",
                    fit: "",
                    caption: [
                        "The Verbal Survey was intended for visitors that had plenty of time to give feedback on their overal experience.",
                        "Goals: Collect in-depth data on ratings, expectations, and experience in different areas of the museum."
                    ]
                },
                {
                    selector: "Interactive Survey",
                    image: "../assets/project/wing/visualSurvey.png",
                    alt: "Interactive Survey",
                    fit: "",
                    caption: [
                        "The Visual Survey was intended for visitors that were limited on time and could quickly point out what they noticed throughout their exploration of the museum and what they didn't notice.",
                        "Goals: Generate data on what is easily visible to a general visitor."    
                    ]
                },
            ]
        },
        dataAnalysis: {
            mainTitle: "Data Analysis & Annotation",
            listItem: [
                {
                    title: "Color Coding",
                    subtitle: "Used to group categories.",
                    content: [
                        "My team and I worked to combine all of our notes together and color coded them to better organize all of the information. "
                    ]
                },
                {
                    title: "Circles and Underlines",
                    subtitle: "Used to group patterns and focus on areas to note.",
                    content: [
                        "We used circles to group up similar information and underlines to highlight key information. Some examples include: ",
                        "'Visitor Map'",
                        "'Lost or confused'",
                        "'Challenging or difficult'"
                    ]
                },
                {
                    title: "Comments and Questions",
                    subtitle: "Used to propose a high level summary on results.",
                    content: [
                        "These comments and questions served to create prompts for us to investigate different topics further. Additional questions using the notes gathered created a way to narrow potential cases to improve the overall experience."
                    ]
                },
            ]
        },

        findings: {
            mainTitle: "Findings",
            listItem: [
            {
                title: "Exterior Signage",
                subtitle: "Layout Changes",
                content: [
                    "The Wing Luke's main sign is too high on the building, making it difficult for potential visitors to see. The sign requires people to look up, many times, people would not instinctively do. Additional signage at the eye-level would make the building more noticeable and easier to locate.  it needs signage on the glass so it’s visible at the eye level. The hours of the museum are also not clearly displayed to potential visitors."
                ]
            },
            {
                title: "Welcome Desk",
                subtitle: "Consistent greeting and friendly introduction to the museum.",
                content: [
                    "The front desk's overall quality is inconsistent. Some guests received a Visitor Guide; others did not. Directions or places to start were unclear. Overall visitor satisfaction varied widely. Adding a script for the Front Desk to loosely follow may create a consistently positive experience for visitors."
                ]
            },
            {
                title: "Visitor Guide",
                subtitle: "Visitors would not reference their visitor guide. ",
                content: [
                    "A visitor provided a suggestion that there could be more painted “footprints” at key areas in the museum. These footprints would be linked to the visitor guide explaining where specific exhibits are. This could be added to the front welcome desk script. The guide would allow visitors to visually see where they are going."
                ]
            },
            {
                title: "Lobby Signage",
                subtitle: "The desk is not the focal point when a visitor walks in",
                content: [
                    "A more visible sign prompting visitors to start at the front desk would benefit the overal visitor flow. There are two monitors above the front desk it changes often and is difficult to read."
                ]
            },
            {
                title: "Self-Guided Tour",
                subtitle: "Visitors mentioned that they liked the liberty to explore through the museum independently.",
                content: [
                    "Not many individuals were able to fully engage with the exhibits - they left either confused about where to begin or what was important to see. A potential recommendation would be to have a self-guided auditory phone app in different languages (focusing on Mandarin, Japanese, Korean, Taiwanese, etc.) to loosely help guide visitors through the museum."
                ]
            }
        ]},
        findingsGallery: {
            title: "Findings Cont'd",
            grid: "--5",
            images: [
                "../assets/project/wing/findings1.png",
                "../assets/project/wing/findings2.png",
                "../assets/project/wing/findings3.png",
                "../assets/project/wing/findings4.png",
                "../assets/project/wing/findings5.png"
            ]
        },
        personas: {
            title: "Personas",
            grid: "--2",
            images: [
                "../assets/project/wing/persona1.png",
                "../assets/project/wing/persona2.png"
            ]
        },
        colorCoding: {
            title: "Color Coding - Feasible Solution",
            grid: "--3",
            images: [
                "../assets/project/wing/color1.png",
                "../assets/project/wing/color2.png",
                "../assets/project/wing/color3.png",
                "../assets/project/wing/color4.png",
                "../assets/project/wing/color5.png",
                "../assets/project/wing/color6.png",
            ]
        },
        solutions: {
            title: "Feasible Solutions",
            subtitle: "",
            contentTitle: "Solutions with little investment and great benefit.",
            contentParagraph: ["My team and I wanted to give the Wing Luke options to improve their visitors' experience. Some solutions were simple, others more complex - after brainstorming over 100 ideas, we created two solution categories, 'Feasible' and 'Speculative'",
                               "Feasible solutions are options for the Wing Luke to create simple solutions to improve the overall visitor experience. Speculative Solutions would require more investment, but would significantly improve the community aspect of the museum and its surroundings."
                              ]
        },
        frontDesk: {
            title: "Visit Follow Up - Feasible Solution",
            grid: "",
            images: [
                "../assets/project/wing/deskFlow.png"
            ]
        },
        followUp: {
            title: "Visit Follow Up - Feasible Solution",
            grid: "--2",
            images: [
                "../assets/project/wing/followUp1.png",
                "../assets/project/wing/followUp2.png"
            ]
        },
        speculative: {
            title: "Speculative Solution",
            subtitle: "Wing Luke Cafe",
            contentTitle: "Solutions that require significant planning with a huge impact",
            contentParagraph: ["Our group was inspired by the Seattle Art Museum and their cafe. As we spoke to visitors, we realize they had a great time exploring the exhibits. However, there was no place for them to feel like they can swing by again to relax, meet others or grab a drink. Additionally, there were many people who were walking outside past the Wing quickly looking through the glass but not compelled enough to walk in.",
                               "With the cafe, this will allow museum visitors and potential visitors the opportunity to feel like they can enter anytime during open hours. We recommend the cafe include pieces of art placed in the museum, a small stage for open mics or book readings, and to serve traditional Asian refreshments and food (ex. Bubble tea, rice cake, etc.)."
                              ]
        },
        cafe: {
            title: "Wing Luke Cafe Storyboard",
            grid: "--1",
            images: [
                "../assets/project/wing/cafeStoryboard.png"
            ]
        },
        conclusion: {
            title: "In Conclusion",
            subtitle: "Solutions that help",
            contentTitle: "I collected data, annotated it, and created solutions alongside my team.",
            contentParagraph: ["Some of the solutions we presented to our stakeholder were soon implemented afterwards. The solutions being: color coding, front-desk regulation, and more accessible maps.",
                                "I learned how to interact with a targeted audience, creating open-ended questions that effectively produced meaning to derive from, understanding responses and finding patterns in data, and finding solutions to root problems of superficial issues."
                              ]
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="pages-general">
                    <MainTitle    content = {this.state.mainTitle} />
                    <DisplayImage content = {this.state.observations} />
                    <SectionCard  content = {this.state.partner} />
                    <InfoTab      content = {this.state.researchMethods} />
                    <Carousel     content = {this.state.tour} />
                    <TabImage     content = {this.state.survey} />
                    <TitleList    content = {this.state.dataAnalysis} />
                    <TitleList    content = {this.state.findings}/>
                    <BasicGallery content = { this.state.findingsGallery } />   
                    <BasicGallery content = { this.state.personas } />
                    <SectionCard  content = {this.state.solutions} />
                    <BasicGallery content = { this.state.colorCoding } />
                    <BasicGallery content = {this.state.frontDesk}/>
                    <BasicGallery content = {this.state.followUp}/>
                    <SectionCard  content = {this.state.speculative} />
                    <BasicGallery content = {this.state.cafe} />
                    <SectionCard  content = {this.state.conclusion} />
                </div>
                <Footer />
            </div>
        )
    }
}
