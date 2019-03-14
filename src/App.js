import React, { Component } from "react";
import "./App.css";
import "./css/main.css";
import anime from "animejs";
import BgSVGanime from "./components/animations/background-svg-anime";

class App extends Component {
  svg = (
    <svg
      id="morph"
      width="auto"
      height="auto"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      // x="0px" y="0px"
    >
      <path
        class="morph"
        d="M 1920 1080 L 1474.6 1080 S 1137.53 1080 969 1080 c -168 000 -2000 220 -304 -471 S 155 1080 0 1080 V 0 H 1920 Z"
      />
    </svg>
  );

  componentDidMount() {
    // animation.restart()
  }

  handleClick(e) {
    e.preventDefault();
    console.log("click: ");
    console.log(e);

    anime({
      targets: ".morph",
      d: [
        {
          value:
            "M 1920 1080 L 1474.6 584 S 1137.53 679 969 679 c -168 0 -504 -471 -504 -471 S 155 1080 0 1080 V 0 H 1920 Z"
        },
        {
          value:
            "M 1920 1080 L 1974.6 -200 S 1137.53 -200 969 -300 c -168 -100 -504 -471 -904 -471 S 15 0 0 1080 V 0 H 1920 Z"
        }
        // { value: "M 1920 1080 L 1474.6 1080 S 1137.53 1080 969 1080 c -168 000 -2000 220 -304 -471 S 155 1080 0 1080 V 0 H 1920 Z" }
      ],
      easing: "easeInQuad",
      duration: 2000,
      loop: false,
      autoplay: false
    }).play();
  }

  render() {
    return (
      <div className="App">
        <div className="animations">
              <div className="animationBox">
                    <div className="animation">
                      <BgSVGanime animationId={"morph"}/>
                    </div>
              </div>
        </div> 
      </div>
    );
  }
}

export default App;
