import React from "react";
import { Input } from "../input/Input";

export function InputText({ onValueChange, value, name }) {
  return (
    <Input name={name}>
      <input
        value={value}
        onChange={event => onValueChange(event.target.value)}
      />
    </Input>
  );
}
