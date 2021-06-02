import ReactDOM from "react-dom";
import React from "react";

import Macrowavebody from "./components/macrowavebody/Macrowavebody.jsx"

class Macrowave extends React.Component {

   render() {
      return (
         <div>
            <Macrowavebody />
         </div>
      )
   }
}

ReactDOM.render(
   <Macrowave />,
   document.getElementById("app")
)