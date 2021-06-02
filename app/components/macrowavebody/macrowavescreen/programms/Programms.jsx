import React from "react";
import "./Programms.css";

export default class Programms extends React.Component {
   render() {
      return (
         <div id="programms">
            <span className="attention">!!!</span>
            <p className="myprogramms">React.js</p>
            <p className="myprogramms">Webpack</p>
         </div >
      )
   }
}