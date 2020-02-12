import React from "react";

export function RadioButton({ onValueChange, value, options, name }) {
  return (
    <div>
      {options.map(option => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            checked={value === option.value}
            value={option.value}
            onChange={event => onValueChange(event.target.value)}
          ></input>
          {option.name}
        </label>
      ))}
    </div>
  );
}
