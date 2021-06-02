import React from "react";

export default class Clear extends React.Component {
   render() {
      return (
         <div id="clear" className="buttons" onClick={this.props.clear}>
            <p>Clear</p>
         </div>
      )
   }
}