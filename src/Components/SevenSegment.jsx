import React from "react";

import "./SevenSegment.css";
import Colors from './Colors';

export default function SevenSegment({segments, colors, className}) {
  colors = colors || [];
  const defaultColor = Colors.green;
  colors[0] = colors[0] || defaultColor[0];
  colors[1] = colors[1] || defaultColor[1];
  colors[2] = colors[2] || defaultColor[2];
  colors[3] = colors[3] || defaultColor[3];
  className = className || 'greenglow';

  function getSegments(segments) {
    return segments.reduce((output, segment) => {
      return output.concat(
        <div key={segment} className={[segment, className].join(' ')} style={{"backgroundColor": colors[0], "gridArea": segment}}/>
        );
    }, []);
  }

  function getIntersections() {
    const combos = ["af", "ab", "efg", "bcg", "de", "cd"];

    return combos.reduce((output, combo) => {
      let neighbors = combo.split('').reduce((neighbors, s) => {
        if (segments.indexOf(s) !== -1) {
          return neighbors + 1;
        }
        return neighbors;
      }, 0);

      if (neighbors > 0) {
        output = output.concat(
          <div key={combo} className={[combo, className].join(' ')} style={{"backgroundColor": colors[neighbors], "gridArea": combo}} />
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
//        ddd  dot
