import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class TabImage extends Component {



    caption( content ) {
        if(this.props.content.caption) {
            return(
                <div className="tab-image__caption-box">
                    {content.map((item, index) => (
                        <p key = {`content-${index}`} className="tab-image__caption"> { item } </p>
                    ))}
                    
                </div>
            );
        } return; 
    }


    render() {
        const tab = this.props.content;

        const content = (
            <div className="tab-image-box">
                <div className="tab-image__descriptor-box">
                    <div className="tab-image__descriptor--title-box">
                        <h2 className="tab-image__descriptor--title"> { tab.title } </h2>
                    </div>
                    {tab.content.map((item, index) => (
                        <p key={`${index}-tab-${item}`} 
                           className="tab-image__descriptor--content">{item}</p>
                    ))}
                </div>
                <Tabs>
                    <TabList>
                        <div className="tab-image__selector-box">
                            {tab.tabs.map((item, index) => (
                                <Tab className="react-tabs__tab tab-image__selector-tab" key = {`${index}-tab-${item.selector}`}>
                                    <h1 className="tab-image__selector">{item.selector}</h1>
                                </Tab>
                            ))} 
                        </div>
                    </TabList>

                    <div className="tab-image__content-box">
                        {tab.tabs.map((item, index) => (
                            <TabPanel key={index}>
                                {this.caption( item.caption )}
                                <div className={"tab-image__content--image-box " + tab.height}>
                                    <img className={"tab-image__content--image " + item.fit}
                                        key = {`${index}-tab-${item.alt}`} 
                                        src={item.image} 
                                        alt={item.alt} />
                                </div>
                                
                                
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
            </div>
        )
        return ( content )
    }
}
