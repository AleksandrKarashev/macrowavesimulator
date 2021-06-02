import React from "react";
import "./Macrowavescreen.css";
import Programms from "./programms/Programms.jsx";

export default class Macrowavescreen extends React.Component {
   render() {
      return (
         <div id="macrowavescreen" className={this.props.switch ? "activated" : ""}>
            <Programms />
         </div>
      )
   }
}