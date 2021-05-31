import React from 'react';
import './Timescreen.css';

export default class Timescreen extends React.Component {
   constructor(props) {
      super(props);
      // this.state = ({ adaptmins: this.props.currmins, adaptsecs: this.props.currsecs })
      this.state = ({});
      //  this.adaptation = this.adaptation.bind(this);

   }

   // componentDidMount() {
   //    console.log(this.state);
   // }

   // getSnapshotBeforeUpdate(prevProps, prevState) {

   //    // this.adaptation();

   //    return null;
   // }
   // shouldComponentUpdate(nextProps, nextState) {
   //    // console.log(nextProps);
   //    // console.log(nextState);
   //    // this.adaptation();
   //    console.log(this.state);

   //    return true;
   // }
   // componentDidUpdate() {
   //    // this.adaptation();
   //    console.log("componentDidUpdate()");
   // }

   // adaptation() {

   // let v = this.props.currtime;
   // let secs = "00";
   // let mins = "00"
   // if (v.length < 3) {
   //    secs = (secs + v).slice(-2)
   // } else {
   //    secs = (secs + v.slice(-2)).slice(-2)
   //    mins = mins + v.slice(0, v.length - 2)
   // }
   // this.setState({ adaptsecs: secs, adaptmins: mins })
   // ------------------------------------------------------------------------//
   //    let aMins = ('0' + this.state.adaptmins).slice(-2);
   // let aSecs = ('0' + this.state.adaptsecs).slice(-2);
   // this.setState({ adaptmins: aMins, adaptsecs: aSecs });
   //  }

   render() {
      return (
         <div id='timescreen'>
            <p id='timenumbers'>{this.props.adaptedTime}</p>
            {/* <p id='timenumbers'>{this.state.adaptmins}:{this.state.adaptsecs}</p> */}
         </div>
      )
   }
}