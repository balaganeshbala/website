import React from 'react';

class Title extends React.Component {

   render() {
      var bgColor = this.props.bgColor;
      var textColor = this.props.textColor;
      var tableStyle = { width : "100%", fontSize: "16px", color: textColor }
      var lineStyle = { borderBottomStyle : "solid", borderColor : bgColor, borderWidth : "1pt" }
      var titleStyle = { backgroundColor : bgColor, color: textColor, transform: "skew(20deg)" }
      return (
         <div>
            <table style = {tableStyle}>
              <tbody>
                <tr>
                  <td><div style = {lineStyle}></div></td>
                  <td width={this.props.textWidth}><div style={titleStyle}><p style={{ transform : "skew(-20deg)", padding: "5px" }}>{this.props.text}</p></div></td>
                  <td><div style = {lineStyle}></div></td>
                </tr>
              </tbody>
            </table>
         </div>
      );
   }
}

export default Title;
