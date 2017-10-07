import React from 'react';
import Title from './Title'

class Account extends React.Component {

   render() {
      var rightStyle = { paddingLeft :"20px", textAlign: "left" }
      return (
         <div id="account">
            <div id="account-title">
                <Title text="Stay Connected" textWidth="200px" bgColor="#902C55" textColor="#DDD"/>
            </div>
            <div id="account-content">
              <table width="100%" style={{ tableLayout: "fixed" }}>
                <tbody>
                    <tr>
                        <th style={{ height: "100px" }}>
                            <a className="account-icon" href="https://in.linkedin.com/in/balaganeshbala" target="_blank">
                                <div style={{ margin: "0 auto", position: "relative", width: "40px", height: "40px" }}>
                                    <svg fill="#FFF" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/></svg>
                                </div>
                            </a>
                        </th>
                        <th>
                            <a className="account-icon" href="https://github.com/balaganeshbala" target="_blank">
                                <div style={{ margin: "0 auto", position: "relative", width: "40px", height: "40px" }}>
                                    <svg fill="#FFF" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                </div>
                            </a>
                        </th>
                        <th>
                            <a className="account-icon" href="https://plus.google.com/+balaganeshbala" target="_blank">
                                <div style={{ margin: "0 auto", position: "relative", width: "40px", height: "40px" }}>
                                    <svg fill="#FFF" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M5.09 7.273v1.745h2.89c-.116.75-.873 2.197-2.887 2.197-1.737 0-3.155-1.44-3.155-3.215S3.353 4.785 5.09 4.785c.99 0 1.652.422 2.03.786l1.382-1.33c-.887-.83-2.037-1.33-3.41-1.33C2.275 2.91 0 5.19 0 8s2.276 5.09 5.09 5.09c2.94 0 4.888-2.065 4.888-4.974 0-.334-.036-.59-.08-.843H5.09zm10.91 0h-1.455V5.818H13.09v1.455h-1.454v1.454h1.455v1.455h1.46V8.727H16"/></svg>
                                </div>
                            </a>
                        </th>
                        <th>
                            <a className="account-icon" href="http://blog.balaganesh.in" target="_blank">
                                <div style={{ margin: "0 auto", position: "relative", width: "40px", height: "40px" }}>
                                    <svg fill="#FFF" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M14.65 16H1.35C.6 16 0 15.4 0 14.65V1.35C0 .6.6 0 1.35 0H14.7c.7 0 1.3.6 1.3 1.35v13.3c0 .75-.6 1.35-1.35 1.35zM8 2.65H6c-1.85 0-3.35 1.5-3.35 3.35v4c0 1.85 1.5 3.35 3.35 3.35h4c1.85 0 3.35-1.5 3.35-3.35V7.35c0-.4-.3-.7-.7-.7H12c-.35 0-.65-.3-.65-.65 0-1.85-1.5-3.35-3.35-3.35zm2.05 8H6c-.35 0-.65-.3-.65-.65 0-.35.3-.65.65-.65h4.05c.35 0 .65.3.65.65 0 .35-.3.65-.65.65zm-1.7-5.3c.35 0 .65.3.65.65 0 .35-.3.65-.65.65h-2.4c-.35 0-.65-.3-.65-.65 0-.35.3-.65.65-.65h2.4z"/></svg>
                                </div>
                            </a>
                        </th>
                    </tr>
                </tbody>
              </table>
              <br/><br/>
            </div>
         </div>
      );
   }
}

export default Account;
