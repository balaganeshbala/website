import React from 'react';

require('../styles/Name.css');

export default class Name extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return ( <div id="name-container">
            <div id="inner-container">
                <img id="photo" width="200px" height="200px" src="../images/photo.jpg" />
                <div id="right-text">
                    <span id="name-text">BALAGANESH SEVARKODIYON</span><br/>
                    <span id="designation-text">Software Development Engineer</span> 
                </div> 
            </div>
        </div>);
    }
}