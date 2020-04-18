import React from "react";
import "./Input.css";
import { useState } from "react";
// import { Container } from './styles';

const Input = (props) => {
  const { getDays, selectedMonth } = props;
  const [inputday, setInputDay] = useState();

  if (selectedMonth === "fevereiro") {
    const changeHandler = (e) => {
      setInputDay(e.target.value);
      getDays(e.target.value);
    };
    return (
      <div className="input-container">
        <p className="input-description">Quantos dias?: </p>
        <input
          type="number"
          value={inputday}
          onChange={changeHandler}
          min="28"
          max="29"
          defaultValue="28"
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Input;
