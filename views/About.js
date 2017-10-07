import React from 'react';
import Title from './Title'

class About extends React.Component {
   render() {
      var text1 = "This is Balaganesh. I was born on November 25, 1995 at Virudhunagar and now I'm living in Bangalore, India. I did my Diploma in Computer Engineering at VSVN Polytechnic College, Virudhunagar and after that I completed my bachelor degree in computer science at Mepco Schlenk Engineering College, Sivakasi in the year 2016. Now I'm working as a Software Development Engineer at ";
      var text2 = ". My interests are in computer programming, drawing and animations. I love classical music and I'm learning keyboard. I'm a keen reader of online articles.";
      var text3 = "My family is living in Sankaralingapuram a village near Virudhunagar. My father name is \"Sevarkodiyon\". He is working as Junior Engineer at Irukkangudi Mariamman Temple under Tamilnadu Hindu Religious & Charitable Endowments Department. My mother name is \"Latha Sankari\" and she is a homemaker. I have one younger sister \"Theebha\". She is pursuing her engineering degree in Thiagarajar College of Engineering, Madurai."
      return (
         <div id="about">
            <br/><br/>
            <div id="about-title">
              <Title text="About Me" textWidth="200px" bgColor="#902C55" textColor="#DDD"/>
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
              <h3>Family</h3>
              <div className="about-text">
                <p>{ text3 }</p>
              </div>
            </div>
         </div>
      );
   }
}

export default About;
