import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'
import Name from './components/Name'
import Body from './components/Body'
import Footer from './components/Footer'

require('./main.css');

class Main extends React.Component {
  render() {
    return (
      <div>
        <div id="header-div">
          <Header />
        </div>
        <div id="body-div">
          <Name />
          <Body />
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.body.appendChild(document.createElement('div')));
