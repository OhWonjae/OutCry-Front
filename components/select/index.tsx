import React, { ChangeEventHandler } from "react";
import { SelectStyle } from "./select-style";
interface SelectTypes {
  items: Array<{ label: string; value: string }>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const Select: React.FC<SelectTypes> = (props) => {
  const { items, value, onChange } = props;
  return (
    <SelectStyle value={value} onChange={onChange}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </SelectStyle>
  );
};
