import React from 'react';

require('../styles/Body.css');

import About from './About'
import Contact from './Contact'

export default class Body extends React.Component {

  	constructor(props) {
	    super(props);

	    this.state = {
	    	
	    }
  	}

  	render() {
	  	return(<div id="body-container">
	  				<About />
	  				<Contact />
			   </div>);
  	}
}