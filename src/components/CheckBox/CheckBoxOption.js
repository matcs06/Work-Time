import React from "react";
import { Checkbox } from "semantic-ui-react";
import { useState } from "react";

import "./CheckBoxOption.css";

const CheckboxOption = (props) => {
  const { getClick } = props;
  const [isChecked, setIsChecked] = useState(false);

  const HandleChange = (event, data) => {
    setIsChecked(data.checked);
    getClick(data.checked);
  };

  return (
    <div className="checkbox">
      <Checkbox
        toggle={true}
        onChange={HandleChange}
        checked={isChecked}
        label={"Excluir fins de semana"}
      />
    </div>
  );
};

export default CheckboxOption;
