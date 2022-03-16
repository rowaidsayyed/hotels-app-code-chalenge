import React from "react";

const RangeInput = ({ id, value, name, ariaLabel, classes, min, max, step, onChange }) => { 

  return (
    <input 
      type="range" 
      id={id}
      value={value}
      name={name}
      ariaLabel={ariaLabel}
      min={min}
      max={max}
      step={step}
      className={classes}
      onChange={onChange}
    />
  );
}

export default React.memo(RangeInput);