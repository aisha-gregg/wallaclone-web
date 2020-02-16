import React from "react";
import { Input } from "../input/Input";

export function InputNumber({ onValueChange, value, name }) {
  return (
    <Input name={name}>
      <input
        type="number"
        value={value}
        onChange={event => onValueChange(Number(event.target.value))}
      />
    </Input>
  );
}
