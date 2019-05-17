import React, {useState} from  "react";
import InputToSevenSegments from "./InputToSevenSegments";
import useInterval from "../Helpers/useInterval";

export function Bouncer(props) {
  const {size, number, speed} = props;
  const numberLen = number.length;
  const [motion, setMotion] = useState(new Movement(size-numberLen));

  function doMovement() {
    setMotion(motion.move());
  }

  useInterval(doMovement, speed || 500);

  let bounceNumber = "#".repeat(motion.position) +
    props.number +
    "#".repeat(size - numberLen - motion.position);
  return (
    <InputToSevenSegments
      className={props.className}
      colors={props.colors}
      number={bounceNumber}
    />
  )
}

class Movement {
  size;
  position;
  direction;
  constructor(size, position = 0, direction = 1) {
    this._size = size;
    this._position = position;
    this._direction = direction;

  }

  move() {
    let newPosition = this.position + this.direction;
    let newDirection = this.direction;

    if (newPosition >= this.size || newPosition === 0) {
      newDirection = -newDirection;
    }

    return new Movement(this.size, newPosition, newDirection);
  }

  get size() {
    return this._size;
  }

  get position() {
    return this._position;
  }

  get direction() {
    return this._direction;
  }
}
