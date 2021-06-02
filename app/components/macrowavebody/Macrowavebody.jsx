import React from "react";

import Macrowavescreen from "./macrowavescreen/Macrowavescreen.jsx";
import Timerscreen from "./timescreen/Timescreen.jsx";
import Startpause from "./buttons/startpause/Startpause.jsx";
import Defrost from "./buttons/defrost/Defrost.jsx";
import Power from "./buttons/power/Power.jsx";

import Cancel from "./buttons/cancel/Cancel.jsx";
import Clear from "./buttons/clear/Clear.jsx";
import Buttonnumber from "./buttons/buttonsnumbers/Buttonnumber.jsx";
import Time from "./buttons/time/Time.jsx";

import "./Macrowavebody.css";
import "./buttons/commonstyles/Buttons.css";
import "./buttons/commonstyles/Grids.css";

export default class Macrowave extends React.Component {
   constructor(props) {
      super(props);
      this.state = ({ time: "", adaptedTime: "00:00", switch: false, actualTime: null, status: "", power: 900 });
      this.handleTimeSet = this.handleTimeSet.bind(this);
      this.adaptation = this.adaptation.bind(this);
      this.clear = this.clear.bind(this);
      this.startStop = this.startStop.bind(this);
      this.tick = this.tick.bind(this);
      this.time = this.time.bind(this);
      this.cancel = this.cancel.bind(this);
      this.defrost = this.defrost.bind(this);
      this.power = this.power.bind(this);
   }

   adaptation(v) {
      v = v.toString();
      let secs = "00";
      let mins = "00";
      if (v.length < 3) {
         secs = (secs + v).slice(-2);
      } else if (v.length == 3) {
         secs = (secs + v.slice(-2)).slice(-2);
         mins = (mins + v.slice(0, 1)).slice(-2);
      } else {
         secs = (secs + v.slice(-2)).slice(-2)
         mins = (mins + v.slice(0, 2)).slice(2, 4)
      }
      return mins + ":" + secs;
   }

   handleTimeSet(e) {
      e = e.target;
      let obj = (e.firstElementChild) ? e.firstElementChild : e;
      let num = obj.innerHTML;

      if (this.state.status == "Power, kWh") {
         this.changePower(num);
         return;
      }

      let t = this.state.time;
      let newT = (t.length < 4) ? t + num : t;
      newT = (newT == "0000") ? "" : newT;
      let adTime = this.adaptation(newT);
      this.setState({ time: newT, adaptedTime: adTime });
   }

   clear() {
      if (!this.state.switch && !this.state.actualTime) this.setState({ time: "", adaptedTime: "00:00" });
   }

   startStop() {
      if (this.state.actualTime || this.state.status == "Power, kWh") return;
      this.timer;
      if (!this.state.switch) {
         this.timer = setInterval(() => this.tick(), 1000);
      } else {
         clearInterval(this.timer);
         this.clear();
      }
      this.setState(() => {
         return { switch: this.state.switch = !this.state.switch }
      })
   }

   tick() {
      let [min, sec] = this.state.adaptedTime.split(":");
      if (+min > 0) {
         if (+sec > 0) sec--;
         else {
            sec = 59;
            min--;
         }
      } else {
         if (+sec > 0) sec--;
         else this.startStop();
      }
      min = ("00" + min).slice(-2);
      sec = ("00" + sec).slice(-2);
      this.t = min + "" + sec;
      this.adapted = min + ":" + sec;
      this.setState({ time: this.t, adaptedTime: this.adapted });
   }

   time() {
      if (this.state.switch) return;
      this.activated;
      if (this.state.actualTime) {
         clearInterval(this.activated);
         this.setState({ actualTime: null, status: "" });
         return;
      }
      let timing = () => {
         let now = new Date();
         now = ("00" + now.getHours()).slice(-2) + ":" + ("00" + now.getMinutes()).slice(-2) + ":" + ("00" + now.getSeconds()).slice(-2);
         this.setState({ actualTime: now, status: "Time" });
      }
      timing()
      this.activated = setInterval(timing, 1000);
   }

   defrost() {
      if (this.state.switch || this.state.actualTime) return;
      if (this.state.status != "Defrost") {
         this.setState({ status: "Defrost" });
      } else {
         this.setState({ status: "" });
      }
   }

   cancel() {
      if (this.state.switch) return;
      this.clear();
      if (this.state.actualTime) this.time();
      if (this.state.status == "Defrost") this.defrost();
      else if (this.state.status == "Power, kWh") this.power();
   }

   power() {
      if (this.state.switch || this.state.actualTime) return;
      if (this.state.status == "Power, kWh") {
         this.setState({ status: "" })
      } else {
         this.setState({ status: "Power, kWh" });
      }
   }

   changePower(n) {
      if (n != 0) {
         this.setState(() => {
            return { power: n * 100 }
         })
      }
   }

   render() {
      let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let listButtonNumbers = n.map(x => {
         return <Buttonnumber key={x.toString()} value={x} handleTimeSet={this.handleTimeSet} />
      })
      return (
         <div id="macrowavebody">
            <Macrowavescreen switch={this.state.switch} />
            <div id="macrowavepainel">
               < Defrost defrost={this.defrost} />
               < Power power={this.power} />
               <Timerscreen adaptedTime={this.state.adaptedTime} actualTime={this.state.actualTime} status={this.state.status} power={this.state.power} />
               <ul>
                  <div className="gridcontainer">
                     {listButtonNumbers}
                     <Time time={this.time} />
                     <Buttonnumber value={0} handleTimeSet={this.handleTimeSet} />
                     <Clear clear={this.clear} />
                  </div>
               </ul>
               < Startpause startstop={this.startStop} />
               <Cancel cancel={this.cancel} />
            </div>
            <div id="macrowavehandle"></div>
         </div>
      )
   }
}

