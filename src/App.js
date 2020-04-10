import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import WeekValidation from "./services/WeekValidation";
import SetMonthId from "./services/SetMonthId";
import api from "./services/api";

import Table from "./screens/Table/Table";
import DropDownMonth from "./components/Dropdown/DropDownMonth";
import DropDownWeek from "./components/Dropdown/DropDownWeek";
import ClickListener from "./components/ClickListener/Clicklistener";
import CheckboxOption from "./components/CheckBox/CheckBoxOption";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

const monthOptions = [
  { key: "a", text: "Selecione o mês", value: null },
  { key: 0, text: "Janeiro", value: "janeiro" },
  { key: 1, text: "Fevereiro", value: "fevereiro" },
  { key: 2, text: "Março", value: "março" },
  { key: 3, text: "Abril", value: "abril" },
  { key: 4, text: "Maio", value: "maio" },
  { key: 5, text: "Junho", value: "junho" },
  { key: 6, text: "Julho", value: "julho" },
  { key: 7, text: "Agosto", value: "agosto" },
  { key: 8, text: "Setembro", value: "setembro" },
  { key: 9, text: "Outubro", value: "outubro" },
  { key: 10, text: "Novembro", value: "novembro" },
  { key: 11, text: "Dezembro", value: "dezembro" },
];

const weekOptions = [
  { key: "a", text: "Primeiro dia do mês", value: null },
  { key: 1, text: "Segunda", value: "segunda" },
  { key: 2, text: "Terça", value: "terça" },
  { key: 3, text: "Quarta", value: "quarta" },
  { key: 4, text: "Quinta", value: "quinta" },
  { key: 5, text: "Sexta", value: "sexta" },
  { key: 6, text: "Sábado", value: "sábado" },
  { key: 7, text: "Domingo", value: "domingo" },
];

function App() {
  const [apidata, setApiData] = useState([]);
  const [click, setClick] = useState(false);

  //Shared State Setters
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [excludeWeekends, setexcludeWeekends] = useState(false);
  const [days, setDays] = useState(28);

  async function Generate() {
    let monthId;
    let wknd = 0;

    if (excludeWeekends) {
      wknd = 1;
    }

    WeekValidation(selectedDay);
    monthId = SetMonthId(selectedMonth);

    const response = await api.get(`/${monthId}`, {
      params: { firstday: selectedDay, days: days, wknd },
    });
    setApiData(response.data);
    setClick(true);
  }

  return (
    <div className="App">
      <div className="options-container">
        <div className="month-options">
          <DropDownMonth options={monthOptions} getMonth={setSelectedMonth} />
        </div>
        <div className="week-options">
          <DropDownWeek options={weekOptions} getWeek={setSelectedDay} />
        </div>

        <CheckboxOption getClick={setexcludeWeekends} />
        <button className="button" type="submit" onClick={Generate}>
          Gerar Planilha
        </button>
      </div>
      <Input getDays={setDays} selectedMonth={selectedMonth} />
      <ClickListener
        content={Table}
        click={click}
        data={apidata}
        monthSelected={selectedMonth}
      />
    </div>
  );
}

export default App;
