import React from "react";

const RangeInput = ({ id, value, name, classes, min, max, step, onChange }) => { 

  return (
    <input 
      type="range" 
      id={id}
      value={value}
      name={name}
      min={min}
      max={max}
      step={step}
      className={classes}
      onChange={onChange}
    />
  );
}

export default React.memo(RangeInput);