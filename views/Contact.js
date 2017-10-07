import React from 'react';
import Title from './Title'

class Contact extends React.Component {
   render() {
      var rightStyle = { paddingLeft :"20px", textAlign: "left" }
      return (
         <div id="contact">
            <div id="contact-content">
              <div id="contact-title">
                <Title text="Get In Touch" textWidth="200px" bgColor="#902C55" textColor="#DDD"/>
              </div>
              <br/>
              <div className="contact-text">
                  <div className="contact-card" id="contact1">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <th>
                                    <div style={{ margin: "0 auto", marginTop: "-20px", position: "relative", width: "40px", height: "40px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 60 60"> <defs> <path id="Layer0_0_2_STROKES" stroke="#DDD" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" d=" M 1.35 13.35 L 1.35 44.35 Q 0.9 49.2 5.8 50.95 L 53.05 50.95 Q 58.05 50.9 58.85 45.7 L 58.85 14.6 Q 59.15 8.4 53.35 8.15 L 7.8 8.15 Q 2 7.45 1.35 13.35 Z M 51.95 43.75 L 37.85 30.55 36.35 32.2 Q 30.05 38.25 23.75 32.2 L 22.25 30.55 8.55 43.55 M 8.55 15.65 L 22.25 30.55 M 37.85 30.55 L 51.35 15.65"/> </defs> <g transform="matrix( 1, 0, 0, 1, 0,0) "> <use xlinkHref="#Layer0_0_2_STROKES"/> </g> </svg>
                                    </div>
                                </th>
                                <th>
                                    <p>me@balaganesh.in</p>
                                    <p>balaganesh@juspay.in</p>
                                    <br/>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <div className="contact-card" id="contact2">
                      <table width="100%">
                          <tbody>
                              <tr>
                                  <th>
                                    <div style={{ margin: "0 auto", marginTop: "-20px", position: "relative", width: "40px", height: "40px" }}>
                                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 60 60"> <defs> <path id="Layer0_0_1_STROKES" stroke="#DDD" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" d=" M 7.6 22.45 Q 15.59375 37.5201171875 36.3 51.85 L 43.6 54.95 Q 46.82421875 55.5361328125 47.9 54.95 51.0109375 53.0291015625 54.1 48.6 56.587890625 46.2341796875 54.1 44.2 L 45.05 38.3 Q 42.725 36.4400390625 40.2 38.05 L 35.85 40.8 Q 26.4705078125 34.138671875 19.35 24.6 L 22.3 19.2 Q 23.330078125 17.290625 21.9 14.95 L 16.65 6.7 Q 14.0861328125 2.780859375 10.55 6.4 6.850390625 9.200390625 4.8 12.95 5.1904296875 18.02265625 7.6 22.45 Z"/> </defs> <g transform="matrix( 1, 0, 0, 1, 0,0) "> <use xlinkHref="#Layer0_0_1_STROKES"/> </g> </svg>
                                    </div>
                                  </th>
                                  <th>
                                      <p>+91 73385 13562</p>
                                      <p>+91 90470 69784</p>
                                      <br/>
                                  </th>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
            </div>
         </div>
      );
   }
}

export default Contact;
