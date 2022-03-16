import React from "react";

const InputField = ({ 
    type = 'text', 
    value, 
    name, 
    placeholder, 
    classes='', 
    errorText, 
    onChange 
  }) => { 

  return (
    <div className='d-flex col pos-rel'>
      <input
        type={type}
        value={value}
        name={name}
        className={classes}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span style={{ color: 'red', position:'absolute', bottom:-25 }}>{errorText}</span>
    </div>
  );
}

export default React.memo(InputField);