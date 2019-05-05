import React from "react";
import SevenSegment from './SevenSegment';

export default function SevenSegmentAdapter({number}) {
  const turnedOff = <SevenSegment
    colors={['#DDD', '#BBB', '#BBB', '#CCC']}
    segments={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
  />;

  const segmentMap = new Map(
    [
      ['0', ['a', 'b', 'c', 'd', 'e', 'f']],
      ['1', ['b', 'c']],
      ['2', ['a', 'b', 'g', 'e', 'd']],
      ['3', ['a', 'b', 'g', 'c', 'd']],
      ['4', ['f', 'g', 'b', 'c']],
      ['5', ['a', 'f', 'g', 'c', 'd']],
      ['6', ['a', 'f', 'g', 'c', 'd', 'e']],
      ['7', ['a', 'b', 'c']],
      ['8', ['a', 'b', 'c', 'd', 'e', 'f', 'g']],
      ['9', ['a', 'b', 'c', 'd', 'f', 'g']],
      [' ', []],
      ['.', ['dot']]
    ]
  );

  if (segmentMap.has(number[0])) {
    let segments = segmentMap.get(number[0]);
    if (number[1] === '.') {
      segments = segments.concat(segmentMap.get('.'));
    }
    return (<SevenSegment segments={segments} />);
  }

  return turnedOff;
}