import React from "react";

import "./SevenSegment.css";

export default function SevenSegment({segments, colors}) {
  colors = colors || [];
  colors[0] = colors[0] || "#cc0000";
  colors[1] = colors[1] || "#ff1111";
  colors[2] = colors[2] || "#ff3333";
  colors[3] = colors[3] || "#cc4444";

  function getSegments(segments) {
    return segments.reduce((output, segment) => {
      return output.concat(
        <div key={segment} className={segment} style={{"backgroundColor": colors[0], "gridArea": segment}}/>
        );
    }, []);
  }

  function getIntersections(props) {
    const combos = ["af", "ab", "efg", "bcg", "de", "cd"];

    return combos.reduce((output, combo) => {
      let neighbors = combo.split('').reduce((neighbors, s) => {
        if (segments.indexOf(s) !== -1) {
          return neighbors + 1;
        }
        return neighbors;
      }, 0);

      if (neighbors > 0) {
        console.log({neighbors, combo});
        output = output.concat(
          <div key={combo} className={combo} style={{"backgroundColor": colors[neighbors], "gridArea": combo}} />
        )
      }

      return output;
    }, []);
  }

  return (
    <div className={"seven-segment"}>
      {getSegments(segments)}
      {getIntersections(segments)}
    </div>);
};


//        aaa
//       f   b
//       f   b
//        ggg
//       e   c
//       e   c
//        ddd
