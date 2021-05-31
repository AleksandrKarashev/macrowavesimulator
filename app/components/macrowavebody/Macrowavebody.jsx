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
      this.state = ({ mins: 0, secs: 0 });
      this.handleTimeSet = this.handleTimeSet.bind(this);
   }

   handleTimeSet(e) {
      console.log(e.target.children.length)
   }

   render() {
      return (
         <div id='macrowavebody'>
            <div id='macrowavescreen'></div>
            <div id='macrowavepainel'>
               <Timerscreen currmins={this.state.mins} currsecs={this.state.secs} />
               <div id='gridlower' className='gridcontainer'>
                  {/* <div className="buttons item1">1</div>
                  <div className="buttons item2">2</div>
                  <div className="buttons item3">3</div> */}
                  <Buttonone handleTimeSet={this.handleTimeSet} />
                  <Buttontwo />
                  <Buttonthree />
                  <div className="buttons item4">4</div>
                  <div className="buttons item5">5</div>
                  <div className="buttons item6">6</div>
                  <div className="buttons item7">7</div>
                  <div className="buttons item8">8</div>
                  <div className="buttons item9">9</div>
                  <div className="buttons item10">Watch</div>
                  <div className="buttons item11">0</div>
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

