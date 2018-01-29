import React from 'react';
import Title from './Title'

class About extends React.Component {
   render() {
      var text1 = "I believe it’s the ideal platform for introducing myself, my insights and the things I do. My name is Balaganesh. I was born on November 25, 1995 at Virudhunagar and now I'm living in Bangalore, India. I did my Diploma in Computer Engineering at VSVN Polytechnic College, Virudhunagar and after that I completed my bachelor degree in computer science at Mepco Schlenk Engineering College, Sivakasi in the year 2016. Now I'm working as a Software Development Engineer at ";
      var text2 = ". My interests are in computer programming, drawing and animations. I love classical music and I'm learning keyboard. I'm a keen reader of online articles.";
      return (
         <div id="about">
            <br/><br/>
            <div id="about-title">
              <Title text="ABOUT ME" textWidth="200px" bgColor="#88CBAA" textColor="#88CBAA"/>
            </div>
            <div id="about-content">
              <br/><br/>
              <div className="about-text">
                <div>
                  { text1 }
                  <a href='https://juspay.in' target='_blank'>Juspay</a>
                  { text2 }
                </div>
              </div>
            </div>
         </div>
      );
   }
}

export default About;
