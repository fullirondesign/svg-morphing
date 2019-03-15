import React, { Component } from "react";
import "./App.css";
import "./css/main.css";
import anime from "animejs";
import BgSVGanime from "./components/animations/background-svg-anime";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    const Home = () => (
      <div className="animations">
        <div className="animationBox">
        <div className="animationName">animation 1</div>
          <div className="animation">
            <BgSVGanime animationId={"morph"} />
          </div>
        </div>
        <div className="animationBox">
        <div className="animationName">animation 2</div>
          <div className="animation">
            <BgSVGanime animationId={"lis"} />
          </div>
        </div>
      </div>
    );


    return (
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/topic" component={Home} />
        <Route component={()=>"404"} />
        </div>
        
      </Router>
    );
  }
}

export default App;
