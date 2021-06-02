import React from "react";
import "./Timescreen.css";

export default class Timescreen extends React.Component {
   render() {
      let toShow;
      if (this.props.actualTime) toShow = this.props.actualTime;
      else if (this.props.status == "Power, kWh") toShow = this.props.power;
      else toShow = this.props.adaptedTime;

      return (
         <div id="timescreen">
            <p id="status">{this.props.status}</p>
            <p id="timenumbers">{toShow}</p>
         </div>
      )
   }
}