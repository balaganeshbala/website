import React from 'react';

require('../styles/ContactForm.css');

var request = require('superagent');

export default class ContactForm extends React.Component {

  	constructor(props) {
	    super(props);

	    this.state = {
	    	
	    }
  	}

    onMessageSubmit(event) {
       event.preventDefault();
       var name = document.getElementById("name-input");
       var email = document.getElementById("email-input");
       var message = document.getElementById("message-input");

       var messageResponse = document.getElementById("message-success-text");
       var form = document.getElementById("contact-form");

       if(name.value.trim() == "" || email.value.trim() == "" || message.value.trim() == "") {
         console.log("Empty");
         return;
       }

       request
        .post('https://cloudpigeon.herokuapp.com/mail')
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

        form.style.display = "none";
        messageResponse.style.display = "block";

        name.value = null;
        email.value = null;
        message.value = null;
    }

  	render() {
	  	return(<div id="contact-form-container">
	  				<form id="contact-form" onSubmit={ this.onMessageSubmit.bind(this) }>
  						<input type="text" autoComplete="name" className="input-field" id="name-input" placeholder="Name" required="required" /><br/><br/>
  						<input type="text" autoComplete="email" className="input-field" id="email-input" placeholder="Email address" required="required" /><br/><br/>
  						<textarea type="text" className="input-field" id="message-input" placeholder="Message" required="required" /><br/><br/>
  						<button id="submit-button">Submit</button>
  					</form>
            <p style={{ textAlign: 'center', display: 'none' }} id="message-success-text">Thanks for being awesome!</p>
			   </div>);
  	}
}