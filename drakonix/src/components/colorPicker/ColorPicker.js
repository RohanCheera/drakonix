// ColorPicker.js
import React from 'react';
import './colorPicker.css';

const ColorPicker = ({ onColorSelect }) => {
  const colors = ['red', 'green', 'blue', 'black'];

  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-box"
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
