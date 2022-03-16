import React from 'react';

const Button = ({ text, type, classes = '', onClick }) => {
  return (
    <button type={type} className={`${classes} pointer`} onClick={onClick}>
      {text}
    </button>
  );
};

export default React.memo(Button);
