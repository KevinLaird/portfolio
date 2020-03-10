import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div>
                <form class="contact__form-box" 
                    id="contact-form" 
                    name="contact-form" 
                    action="../js/mail.php" 
                    method="POST"  
                    onsubmit="return validateForm()">
                    <div className="content__form-grid">
                        <div class="contact__form-group--grid">
                            <div class="contact__form-group">
                                <input type="text" id="name" name="name" class="contact__form-input contact__form-control" placeholder="Your name" required></input>
                                <label for="name" class="contact__form-label">Your name</label>
                            </div>
                        
                            <div class="contact__form-group">
                                <input type="text" id="email" name="email" class="contact__form-input contact__form-control" placeholder="Your email" required></input>
                                <label for="email" class="contact__form-label">Your email</label>
                            </div>
                        </div>

                        <div class="contact__form-content">
                            <div class="contact__form-group">
                                <input type="text" id="subject" name="subject" class="contact__form-input contact__form-control" placeholder="Subject"></input>
                                <label for="subject" class="contact__form-label">Subject</label>
                            </div>
                            <div class="contact__form-group">
                                <textarea type="text" id="message" name="message" rows="10" class="contact__form-input contact__form-control contact__form-message" placeholder="Your message"></textarea>
                                <label for="message" class="contact__form-label">Your message</label>
                            </div>
                        </div>
                        
                    </div>
                </form>
                <div class="contact__form-btn">
                    <a class="link-btn link-btn--accent-2 contact__form-send" onclick="validateForm()">
                        <span class="contact__form-send-text">
                            Send 
                        </span>
                       
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div class="status" id="status"></div>
            </div>
        )
    }
}
