import React from 'react';

require('../styles/ContactDetails.css');

export default class ContactDetails extends React.Component {

  	constructor(props) {
	    super(props);

	    this.state = {
	    	
	    }
  	}

  	render() {
	  	return(<div id="contact-details-container">
	  				<table id="contact-details-table">
	  					<tbody>
	  						<tr>
	  							<td className="icon-cell"><img width="24px" height="24px" src="../images/telephone.svg" /></td>
	  							<td className="contact-details-cell first">
								  	<a className="link" href="tel:+917338513562"><span>+91 7338513562</span></a><br /><br />
	  							</td>
	  						</tr>
	  						<tr>
	  							<td className="icon-cell"><img width="24px" height="18px" src="../images/envelope.svg" /></td>
	  							<td className="contact-details-cell">
	  								<a className="link" href="mailto:me@balaganesh.in?subject=Hello%20Balaganesh"><span>me@balaganesh.in</span></a><br /><br />
	  							</td>
	  						</tr>
	  						<tr>
	  							<td className="icon-cell"><img width="24px" height="24px" src="../images/skype.svg" /></td>
	  							<td className="contact-details-cell last">
	  								<span>me_15516</span>
	  							</td>
	  						</tr>
	  					</tbody>
	  				</table>
			   </div>);
  	}
}