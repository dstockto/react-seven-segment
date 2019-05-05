import React from "react";
import SevenSegmentAdapter from './SevenSegmentAdapter';

export default function InputToSevenSegments({number}) {
  return number.split('').reduce((sections, c) => {
    if (c === '.') {
      sections[sections.length - 1] += '.'
    } else {
      sections = sections.concat(c);
    }
    return sections;
  }, []).map((d, i) => <SevenSegmentAdapter key={i} number={d}/>);
};
