import React from "react";

export default class Time extends React.Component {
   render() {
      return (
         <div id="time" className="buttons" onClick={this.props.time}>
            <p>Time</p>
         </div>
      )
   }
}