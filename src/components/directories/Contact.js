import React, { Component } from 'react';
import Navbar from "../layout/nav/Navbar";
import ContactForm from "../forms/ContactForm";
import Footer from "../layout/footer/Footer";

export default class Contact extends Component {
    render() {
        return (
            <div>
            <Navbar />
                <section className="contact">
                    
                    <div className="contact__box">
                        <div class="contact__box--title">
                            <h1 class="h1 contact--title">Contact Me</h1>
                        </div>
                        <ContactForm />
                    </div>
                    
                </section>
            <Footer />
            </div>
        )
    }
}
