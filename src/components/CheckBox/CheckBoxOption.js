import React from "react";
import { Checkbox } from "semantic-ui-react";
import { useState } from "react";

const CheckboxOption = (props) => {
  const { getClick } = props;
  const [isChecked, setIsChecked] = useState(false);

  const HandleChange = (event, data) => {
    setIsChecked(data.checked);
    getClick(data.checked);
  };

  return (
    <Checkbox
      onChange={HandleChange}
      checked={isChecked}
      label={"Excluir fins de semana"}
    />
  );
};

export default CheckboxOption;
