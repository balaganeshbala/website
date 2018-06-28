import React from 'react';

require('../styles/Contact.css');

import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

export default class Contact extends React.Component {

  	constructor(props) {
	    super(props);

	    this.state = {
	    	
	    }
  	}

  	render() {
	  	return(<div id="contact-container">
	  				<div id="contact-title">GET IN TOUCH</div>
	  				<p id="contact-text">I’d love to hear from you! Please feel free to get in touch with any questions or comments and I will get back to you as soon as possible.</p>
	  				<div id="contact-table">
	  					<ContactDetails />
	  					<ContactForm />
	  				</div>
			   </div>);
  	}
}