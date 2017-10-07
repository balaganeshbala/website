import React from 'react';
import Photo from './Photo';

class Cover extends React.Component {
   render() {
      return (
         <div id="cover">
            <Photo />
            <div id="cover-text">
              Hello, I'm Balaganesh
            </div>
         </div>
      );
   }
}

export default Cover;
