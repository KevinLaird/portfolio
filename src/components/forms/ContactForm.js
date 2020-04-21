import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div>
                <form className="contact__form-box" 
                    id="contact-form" 
                    name="contact-form" 
                    method="POST"  >
                    <div className="content__form-grid">
                        <div className="contact__form-group--grid">
                            <div className="contact__form-group">
                                <input type="text" id="name" name="name" className="contact__form-input contact__form-control" placeholder="Your name" required></input>
                                <label  className="contact__form-label">Your name</label>
                            </div>
                        
                            <div className="contact__form-group">
                                <input type="text" id="email" name="email" className="contact__form-input contact__form-control" placeholder="Your email" required></input>
                                <label  className="contact__form-label">Your email</label>
                            </div>
                        </div>

                        <div className="contact__form-content">
                            <div className="contact__form-group">
                                <input type="text" id="subject" name="subject" className="contact__form-input contact__form-control" placeholder="Subject"></input>
                                <label  className="contact__form-label">Subject</label>
                            </div>
                            <div className="contact__form-group">
                                <textarea type="text" id="message" name="message" rows="10" className="contact__form-input contact__form-control contact__form-message" placeholder="Your message"></textarea>
                                <label className="contact__form-label">Your message</label>
                            </div>
                        </div>
                        
                    </div>
                </form>
                <div className="contact__form-btn">
                    <a className="link-btn link-btn--accent-2 contact__form-send" >
                        <span className="contact__form-send-text">
                            Send 
                        </span>
                       
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div className="status" id="status"></div>
            </div>
        )
    }
}
