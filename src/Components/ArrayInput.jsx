import React from "react";

function ArrayInput(props) {
  return (
    <textarea type="text" name="array" onChange={props.changeHandler} className={"array-input"} />
  )
}

export default ArrayInput;
