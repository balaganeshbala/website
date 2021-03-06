import React from 'react';

require('../styles/About.css');

export default class About extends React.Component {

  	constructor(props) {
	    super(props);

	    this.state = {

	    }
  	}

  	render() {
	  	return(<div id="about-container">
	  				<div id="about-title">ABOUT</div>
	  				<p id="about-text">
                  		{ "I believe this is an ideal platform for introducing myself, my insights and the things I do. My name is Balaganesh. I was born on November 25, 1995 in Virudhunagar and now I'm living in Bangalore, India. I did my Diploma in Computer Engineering at VSVN Polytechnic College, Virudhunagar and after that I completed my bachelor's degree in Computer Science at Mepco Schlenk Engineering College, Sivakasi in the year 2016. Now I'm working as a Software Development Engineer at " }
                  		<a id="link" href='https://juspay.in' target='_blank'>Juspay</a>
                  		{ ". My interests are in computer programming, drawing and UI designing. I'm not a religious person but not an atheist. I'm a vegetarian. I love classical music. I'm a keen reader of online articles." }
	  				</p>
			   </div>);
  	}
}
