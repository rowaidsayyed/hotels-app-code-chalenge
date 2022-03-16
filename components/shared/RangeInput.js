import React from "react";

const RangeInput = ({ id, value, name, ariaLabel, classes, min, max, step, onChange }) => { 

  return (
    <input 
      type="range" 
      id={id}
      value={value}
      name={name}
      aria-label={ariaLabel}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      min={min}
      max={max}
      step={step}
      className={classes}
      onChange={onChange}
    />
  );
}

export default React.memo(RangeInput);