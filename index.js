import React from 'react';
import ReactDOM from 'react-dom';
import Header from './views/Header'
import Cover from './views/Cover'
import About from './views/About'
import Contact from './views/Contact'
import Account from './views/Account'
import ContactForm from './views/ContactForm'
import Footer from './views/Footer'

class Main extends React.Component {
  render() {
    return (
      <div>
        <div id="top-views">
          <Header/>
          <Cover />
        </div>
        <div id="bottom-views">
          <About />
          <Contact />
          <ContactForm />
          <Account />
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("main"));
