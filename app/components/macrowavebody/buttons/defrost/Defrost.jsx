import React from "react";

export default class Defrost extends React.Component {
   render() {
      return (
         <div id="defrost" className="buttons" onClick={this.props.defrost}>
            <p>Defrost</p>
         </div>
      )
   }
}