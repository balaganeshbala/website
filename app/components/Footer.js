import React from 'react';

require('../styles/Footer.css');

export default class Footer extends React.Component {

  	constructor(props) {
	    super(props);

	    this.state = {
	    	
	    }
  	}

  	render() {
	  	return(<div id="footer">
	  				<p id="footer-text">Thanks for visiting !!</p>
			   </div>);
  	}
}