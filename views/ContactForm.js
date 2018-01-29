import React from 'react';
var request = require('superagent');
import Title from './Title'

class ContactForm extends React.Component {

   onMessageSubmit(event) {
       event.preventDefault();
       var name = document.getElementById("input-name");
       var email = document.getElementById("input-email");
       var message = document.getElementById("input-message");

       if(name.value.trim() == "" || email.value.trim() == "" || message.value.trim() == "") {
         console.log("Empty");
         return;
       }

       request
        .post('http://server.balaganesh.in/mail.php')
        .send({
        	name: name.value,
            email: email.value,
        	message: message.value
         })
        .set("Content-Type","application/x-www-form-urlencoded")
        .end(function(err, res) {
            if (res && !err) {
            	console.log("Result :",res);
            }
            else {
            	console.log("Error :",err);
            }
        });

        name.value = null;
        email.value = null;
        message.value = null;
   }

   render() {
      return (
        <div id="contact-form-container">
            <div id="contact-form-inner-container">
                <Title text="DROP ME A LINE" textWidth="200px" bgColor="#88CBAA" textColor="#88CBAA"/>
                <br/><br/>
                <p id="contact-form-text">
                  I’d love to hear from you! Please feel free to get in touch with any questions or comments and I will get back to you as soon as possible.
                </p>
                <br/>
                <form id="contact-form" onSubmit={this.onMessageSubmit.bind(this)}>
                    <input type="text" className="form-input" id="input-name" placeholder="Name" required="required"/>
                    <input type="email" className="form-input" id="input-email" placeholder="Email address" required="required"/>
                    <textarea name="message" className="form-input" type="text" id="input-message" placeholder="Message" required="required"></textarea>
                    <button type="submit" className="form-input" id="input-submit">Send</button>
                </form>
            </div>
            <br/>
        </div>
      );
   }
}

export default ContactForm;
