import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'
import Name from './components/Name'
import Body from './components/Body'
import Footer from './components/Footer'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Name />
        <Body />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.body.appendChild(document.createElement('div')));
