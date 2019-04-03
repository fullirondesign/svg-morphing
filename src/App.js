import React, { Component } from "react";
import "./App.css";
import "./css/main.css";
import anime from "animejs";
import BgSVGanime from "./components/animations/background-svg-anime";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import About from "./components/About"

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

  
   


    const NotFound = () => <div className="404">404</div>;

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/topic" component={Home} />
          <Route exact="true" path="*" render={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
