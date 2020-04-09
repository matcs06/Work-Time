import React, { useState, useEffect } from "react";
import "./Table.css";

import "../../services/SetMonthId";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { DataManager, JsonAdaptor } from "@syncfusion/ej2-data";
import {
  Edit,
  EditSettingsModel,
  IGrid,
  Toolbar,
  ToolbarItems,
} from "@syncfusion/ej2-react-grids";

const Table = (props, EditSettingsModel, ToolbarItems) => {
  const { data } = props;

  var date = new Date();
  var year = date.getFullYear();

  const editOptions = (EditSettingsModel = {
    allowEditing: true,
    allowDeleting: true,
  });

  const toolbarOptions = (ToolbarItems = [
    "Edit",
    "Delete",
    "Update",
    "Cancel",
  ]);

  //Changing an array to a json strucute
  const dataSource = new DataManager({
    json: data,
    adaptor: new JsonAdaptor(),
  });

  return (
    <div className="main-container_6">
      <GridComponent
        dataSource={dataSource}
        allowPaging={true}
        editSettings={editOptions}
        pageSettings={{ pageSize: 16 }}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="Dias"
            headerText="Data"
            allowEditing={false}
            width="10%"
          />
          <ColumnDirective
            field="Semana"
            headerText="Dias da semana"
            editType="dropdownedit"
          />
          <ColumnDirective field="Entrada" headerText="Entrada" />
          <ColumnDirective field="Saída" headerText="Saída" />
          <ColumnDirective
            field="Horas Extras"
            headerText="Horas Extras(Minutos)"
            editType="numericedit"
            width="20%"
          />
          <ColumnDirective
            field="Observações"
            headerText="Observações"
            width="20%"
          />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Table;
