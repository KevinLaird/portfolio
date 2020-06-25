import React, { Component } from 'react';
import axios from 'axios';

export default class EmailForm extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();

        axios({
            
            method: "POST", 
            url:"http://localhost:3002/send", 
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent."); 
            this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', subject: '', message: ''})
     }


    render() {
        return (
            <form className="contact__form-box" 
                id="contact-form" 
                onSubmit={this.handleSubmit.bind(this)} 
                method="POST">

                {/* Name */}
                <div>
                    <input type="text" value={ this.state.name } onChange={ this.onNameChange.bind(this) }  ></input>
                    <label htmlFor="name">Your name</label>
                </div>

                {/* Email */}
                <div>
                    <input type="text" value={ this.state.subject } onChange={ this.onSubjectChange.bind(this) }  ></input>
                    <label htmlFor="email">Your email</label>
                </div>


                {/* Subject */}
                <div>
                    <input type="text" value={ this.state.email } onChange={ this.onEmailChange.bind(this) }  ></input>
                    <label htmlFor="subject">Subject</label>
                </div>

                {/* Content */}
                <div>
                    <textarea type="text" value={ this.state.message } onChange={ this.onMessageChange.bind(this) } rows="10" ></textarea>
                    <label htmlFor="message">Your message</label>
                </div>

                {/* Submit */}
                <button type="submit">Submit</button>
            </form>
            
        )
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}


// 
// 
// 
// 