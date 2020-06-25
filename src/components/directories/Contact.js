

// export default class Contact extends Component {
//     render() {
//         return (
//             <div>
//             <Navbar />
//                 <section className="contact">
                    
//                     <div className="contact__box">
//                         <div className="contact__box--title">
//                             <h1 className="h1 contact--title">Contact Me</h1>
//                         </div>
//                         <ContactForm />
//                     </div>
                    
//                 </section>
//             <Footer />
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import EmailForm from '../forms/email/EmailForm';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <EmailForm />
            </div>
        )
    }
}

