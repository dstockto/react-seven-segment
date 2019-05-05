import React from "react";
import SevenSegment from './SevenSegment';

export default function SevenSegmentAdapter({number, colors, className}) {
  const turnedOff = <SevenSegment
    colors={['#222', '#333', '#333', '#333']}
    segments={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'dot']}
    className={'grayglow'}
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
      ['-', ['g']],
      [' ', []],
      ['.', ['dot']]
    ]
  );

  if (segmentMap.has(number[0])) {
    let segments = segmentMap.get(number[0]);
    if (number[1] === '.') {
      segments = segments.concat(segmentMap.get('.'));
    }
    return (<SevenSegment colors={colors} segments={segments} className={className} />);
  }

  return turnedOff;
}