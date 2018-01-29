import React from 'react';

class Title extends React.Component {

   render() {
      var bgColor = this.props.bgColor;
      var textColor = this.props.textColor;
      var tableStyle = { width : "100%", margin: "auto", fontSize: "16px", color: textColor }
      var lineStyle = { borderBottomStyle : "solid", borderColor : bgColor, borderWidth : "1pt" }
      var titleStyle = { color: textColor }
      return (
         <div>
            <table style = {tableStyle}>
              <tbody>
                  <tr><td><div style={titleStyle}><h2>{this.props.text}</h2></div></td></tr>
                  <tr><td><div style = {lineStyle}></div></td></tr>
              </tbody>
            </table>
         </div>
      );
   }
}

export default Title;
