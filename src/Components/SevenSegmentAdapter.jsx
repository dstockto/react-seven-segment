import React from "react";
import SevenSegment from './SevenSegment';

export default function SevenSegmentAdapter({number}) {
  const turnedOff = <SevenSegment
    colors={['#DDD', '#BBB', '#BBB', '#CCC']}
    segments={['a','b','c','d','e','f','g']}
  />;

  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(number) === -1) {
    return turnedOff;
  }



  const segmentMap = new Map(
    [
      [1, 'one'],
      [2, 'two']
    ]
  );

  return (
    turnedOff
  );
};