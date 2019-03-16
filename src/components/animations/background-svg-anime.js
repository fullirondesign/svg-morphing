// HOOK animation for SVG background morphing

import React, { useState } from "react";
import anime from "animejs"; // animation library

//  SVG itself ----
const svg = animationId => {
  return (
    <svg
      id={`${animationId}`}
      width="auto"
      height="auto"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      // x="0px" y="0px"
    >
      <path
        class={`${animationId}`}
        d="M 1920 1080 L 1474.6 1080 S 1137.53 1080 969 1080 c -168 000 -2000 220 -304 -471 S 155 1080 0 1080 V 0 H 1920 Z"
      />
    </svg>
  );
};

// Hook ----
const BgSVGanime = ({ children, animationId }) => {
  // State
  const [animationStage, setAnimationStage] = useState("start");
  ////////////////////////////////////////////
  // Animation. Morphing onClick function ----
  const handleClick = animationId => {
    // check
    console.log(`click on ${animationId}`);
    console.log("svg: ", svg(animationId));
    console.log("animationStage: ", animationStage);

    // frames
    let frames = {
      0: "M 1920 1080 L 1474.6 1080 S 1137.53 1080 969 1080 c -168 000 -2000 220 -304 -471 S 155 1080 0 1080 V 0 H 1920 Z",
      1: "M 1920 1080 L 1474.6 584 S 1137.53 679 969 679 c -168 0 -504 -471 -504 -471 S 155 1080 0 1080 V 0 H 1920 Z",
      2: "M 1920 1080 L 1974.6 -200 S 1137.53 -200 969 -300 c -168 -100 -504 -471 -904 -471 S 15 0 0 1080 V 0 H 1920 Z"
    };

    // Keys for present, current, manipulated animations' key-frames
    const {
      0: animationFrame0,
      1: animationFrame1,
      2: animationFrame2
    } = frames;
    console.log("frames", frames);
    console.log("animationFrame0 :", animationFrame1);
    console.log("animationFrame1 :", animationFrame1);
    console.log("animationFrame2 :", animationFrame2);

    // Animation control ---------------------
    // stage-depended frames config----
    let animationCurrentFrame1, animationCurrentFrame2; // for current -manipulated- timeline
    if (animationStage === "start") {
      setAnimationStage("end");
      console.log(
        `animation stage: ${animationStage}, animation id: ${animationId}`
      );
      animationCurrentFrame1 = animationFrame1;
      animationCurrentFrame2 = animationFrame2;
    } else if (animationStage === "end") {
      setAnimationStage("start");
      console.log(
        `animation stage: ${animationStage}, animation id: ${animationId}`
      );
      animationCurrentFrame1 = animationFrame1;
      animationCurrentFrame2 = animationFrame0;
    } else {
      console.log(`animation error ${animationId}`);
    }
    // animation function
    anime({
      // <----config
      targets: `.${animationId}`,
      d: [
        {
          value: `${animationCurrentFrame1}`
        },
        {
          value: `${animationCurrentFrame2}`
        }
      ],
      easing: "easeInQuad",
      duration: 2000,
      loop: false,
      autoplay: false
    }).play(); // <----action
    ////////////////////////////////////////////
    console.log("anime result", anime());
  };

  return (
    <div className="animation">
      {svg(animationId)}
      {animationStage}

      <div className="butt" onClick={() => handleClick(animationId)}>
        go
      </div>
    </div>
  );
};

export default BgSVGanime;
