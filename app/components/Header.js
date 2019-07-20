import React from 'react';

require('../styles/Header.css');

export default class Header extends React.Component {

  	constructor(props) {
	    super(props);

	    this.state = {

	    }
  	}

  	render() {
	  	return(<div id="header">
	  				<a href="#"><img id="logo" width="48" height="34" src="../images/logo.svg" /></a>
	  				<table id="icon-table">
	  					<tbody>
	  						<tr>
	  							<td className="social-icon-cell">
	  								<a className="account-icon" href="https://in.linkedin.com/in/balaganeshbala" target="_blank">
	  									<img width="18px" height="18px" src="../images/linkedin.svg" />
	  								</a>
	  							</td>
	  							<td className="social-icon-cell">
	  								<a className="account-icon" href="https://github.com/balaganeshbala" target="_blank">
	  									<img width="18px" height="17px" src="../images/github.svg" />
	  								</a>
	  							</td>
	  						</tr>
	  					</tbody>
	  				</table>
			   </div>);
  	}
}
