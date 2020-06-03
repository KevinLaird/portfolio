import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class InfoTab extends Component {
    render() {
        const tab = this.props.content;

        const content = (
            <Tabs>
                <div className="info-tab-box">
                    {/* Select the Tabs */}
                    <TabList>
                        <div className="info-tab__selector-box">
                            {tab.map((item, index) => (
                                <Tab className="react-tabs__tab info-tab__selector-tab" key = {index}>
                                    <h1 className="info-tab__selector">{item.selector}</h1>
                                </Tab>
                            ))} 
                        </div>
                    </TabList>

                    <div className="info-tab__content-box">
                        {/* Display the Tabs */}
                        {tab.map((item, index) => (
                            <TabPanel key={index}>
                                <h2 className="info-tab__content--title">{item.title}</h2>
                                <p className="info-tab__content">{item.content}</p>
                            </TabPanel>
                        ))}
                    </div>
                </div>
                
            </Tabs>
        )
        return (content)
    }
}
