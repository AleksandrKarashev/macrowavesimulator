import React from "react";

export default class Popcorn extends React.Component {
   render() {
      return (
         <div id="power" className="buttons" onClick={this.props.power}><p>Power</p></div>
      )
   }
}