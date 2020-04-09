import React from "react";
import "./DropDown.css";
import { useState } from "react";

const DropdownWeek = ({ options, getWeek }) => {
  const [dropDownValue, setDropDownValue] = useState("");

  const hadleChange = (e) => {
    setDropDownValue(e.target.value);
    getWeek(e.target.value);
  };

  return (
    <select className="select-css" value={dropDownValue} onChange={hadleChange}>
      {options.map((list) => (
        <option key={list.key} value={list.value}>
          {list.text}
        </option>
      ))}
    </select>
  );
};

export default DropdownWeek;
