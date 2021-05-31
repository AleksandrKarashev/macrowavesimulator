import React from 'react';

import Timerscreen from './timescreen/Timescreen.jsx';


import Startpause from './startpause/Startpause.jsx';
import Defrost from './defrost/Defrost.jsx';
import Buttonone from './buttonsnumbers/Buttonone.jsx';
import Buttontwo from './buttonsnumbers/Buttontwo.jsx';
import Buttonthree from './buttonsnumbers/Buttonthree.jsx';

import './Macrowavebody.css';
import './commonstyles/Buttons.css';
import './commonstyles/Grids.css';

export default class Macrowave extends React.Component {
   constructor(props) {
      super(props);
      this.state = ({ time: '', adaptedTime: '00:00' });
      this.handleTimeSet = this.handleTimeSet.bind(this);
      this.adaptation = this.adaptation.bind(this);
   }

   adaptation(v) {
      let secs = "00";
      let mins = "00";
      if (v.length < 3) {
         secs = (secs + v).slice(-2)
      } else if (v.length == 3) {
         secs = (secs + v.slice(-2)).slice(-2)
         mins = (mins + v.slice(0, 1)).slice(-2)
      } else {
         secs = (secs + v.slice(-2)).slice(-2)
         mins = (mins + v.slice(0, 2)).slice(2, 4)
      }
      return mins + ':' + secs;
   }

   handleTimeSet(e) {
      e = e.target;
      let obj = (e.firstElementChild) ? e.firstElementChild : e;
      let num = obj.innerHTML;
      let t = this.state.time;
      let newT = (t.length < 4) ? t + num : t;
      let adTime = this.adaptation(newT);
      this.setState({ time: newT, adaptedTime: adTime });
   }

   render() {
      return (
         <div id='macrowavebody'>
            <div id='macrowavescreen'></div>
            <div id='macrowavepainel'>
               {/* <Timerscreen currmins={this.state.mins} currsecs={this.state.secs} /> */}
               <Timerscreen adaptedTime={this.state.adaptedTime} />
               <div id='gridlower' className='gridcontainer'>
                  <Buttonone handleTimeSet={this.handleTimeSet} />
                  <Buttontwo handleTimeSet={this.handleTimeSet} />
                  <Buttonthree handleTimeSet={this.handleTimeSet} />
                  <Buttonfour handleTimeSet={this.handleTimeSet} />
                  <Buttonfive handleTimeSet={this.handleTimeSet} />
                  <Buttonsix handleTimeSet={this.handleTimeSet} />
                  <Buttonseven handleTimeSet={this.handleTimeSet} />
                  <Buttoneight handleTimeSet={this.handleTimeSet} />
                  <Buttonnine handleTimeSet={this.handleTimeSet} />
                  <div className="buttons item10">Time</div>
                  <Buttonten handleTimeSet={this.handleTimeSet} />
                  <div className="buttons item12">Cancel</div>
               </div>
               < Startpause />
               < Defrost />
            </div>
            <div id='macrowavehandle'></div>
         </div>
      )
   }
}

