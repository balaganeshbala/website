import React from 'react';

class Photo extends React.Component {
   render() {
      return (
         <div id="photo">
            <br/><br/><br/>
            <img id="image" src="./assets/image.png" height="250" />
            <br/><br/><br/>
         </div>
      );
   }
}

export default Photo;
