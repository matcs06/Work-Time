import React from "react";
import "./DropDown.css";
import { useState } from "react";

const DropdownMonth = ({ options, getMonth }) => {
  const [dropDownValue, setDropDownValue] = useState("");

  const hadleChange = (e) => {
    setDropDownValue(e.target.value);
    getMonth(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select
        className="select-css"
        value={dropDownValue}
        onChange={hadleChange}
      >
        {options.map((list) => (
          <option key={list.key} value={list.value}>
            {list.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMonth;
