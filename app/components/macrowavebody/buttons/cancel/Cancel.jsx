import React from "react";

export default class Cancel extends React.Component {
   render() {
      return (
         <div id="cancel" className="buttons" onClick={this.props.cancel}>
            <p>Cancel</p>
         </div>
      )
   }
}