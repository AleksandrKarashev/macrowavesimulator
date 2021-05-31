import React from 'react';
import './Timescreen.css';

export default class Timescreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = ({ adaptmins: this.props.currmins, adaptsecs: this.props.currsecs })
      this.adaptation = this.adaptation.bind(this);

   }

   componentDidMount() {
      this.adaptation();
   }

   adaptation() {
      let aMins = ('0' + this.state.adaptmins).slice(-2);
      let aSecs = ('0' + this.state.adaptsecs).slice(-2);
      this.setState({ adaptmins: aMins, adaptsecs: aSecs });
   }

   render() {
      return (
         <div id='timescreen'>
            <p id='timenumbers'>{this.state.adaptmins}:{this.state.adaptsecs}</p>
         </div>
      )
   }
}