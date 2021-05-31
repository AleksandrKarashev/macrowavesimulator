// var ReactDOM = require('react-dom');
// var React = require('react');
import ReactDOM from 'react-dom';
import React from 'react';

import Macrowavebody from './components/macrowavebody/Macrowavebody.jsx'
// import './components/macrowavebody/Macrowavebody.css'
//import './components/macrowavebody/Macrowavebody.sass'

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