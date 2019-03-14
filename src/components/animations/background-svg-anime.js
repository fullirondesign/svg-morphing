// animation for SVG background morphing

import React from "react";
import anime from "animejs"; // animation library

//  SVG itself ----
const svg = (animationId) => {
  return(
    <svg
      id={`${animationId}`}
      width="auto"
      height="auto"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      // x="0px" y="0px"
    >
      <path class={`${animationId}`} d="M 1920 1080 L 1474.6 1080 S 1137.53 1080 969 1080 c -168 000 -2000 220 -304 -471 S 155 1080 0 1080 V 0 H 1920 Z"/>
    </svg>
    
  )
};




//   <svg
//     id={animationId}
//     width="auto"
//     height="auto"
//     viewBox="0 0 1920 1080"
//     preserveAspectRatio="none"
//     // x="0px" y="0px"
//   >
//     <path class={animationId} d="M 1920 1080 L 1474.6 1080 S 1137.53 1080 969 1080 c -168 000 -2000 220 -304 -471 S 155 1080 0 1080 V 0 H 1920 Z"/>
//   </svg>
// );

// morphing on Click function ----
const handleClick = (animationId) => {   
  console.log (`click on ${animationId}`)
  console.log (svg(animationId))
  anime({
      targets: `.${animationId}`,
      d: [
      { value: "M 1920 1080 L 1474.6 584 S 1137.53 679 969 679 c -168 0 -504 -471 -504 -471 S 155 1080 0 1080 V 0 H 1920 Z" },
      { value: "M 1920 1080 L 1974.6 -200 S 1137.53 -200 969 -300 c -168 -100 -504 -471 -904 -471 S 15 0 0 1080 V 0 H 1920 Z" },
      // { value: "M 1920 1080 L 1474.6 1080 S 1137.53 1080 969 1080 c -168 000 -2000 220 -304 -471 S 155 1080 0 1080 V 0 H 1920 Z" }
      ],
      easing: "easeInQuad",
      duration: 2000,
      loop: false,
      autoplay: false
  })
  .play();
}

// hook ----
const BgSVGanime = ({ children, props, animationId = {} }) => (
    <div className="animation">
        {props}
        {/* {(animationId)=>svg(animationId)} */}
        <div className="butt" onClick={handleClick(animationId)}>
            go
        </div>
    </div>
);

export default BgSVGanime