import React from "react";

export default class Buttonnumber extends React.Component {
   render() {
      return <div className="buttons" onClick={this.props.handleTimeSet} ><p>{this.props.value}</p></div>
   }
}

