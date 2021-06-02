import React from "react";
import "./Startpause.css";

export default class Startpause extends React.Component {
   render() {
      return (
         <div id="startpause" className="buttons" onClick={this.props.startstop}>
            <p>START</p>
            <p>PAUSE</p>
         </div>
      )
   }
}