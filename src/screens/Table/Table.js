import React from "react";
import "./Table.css";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Aggregate,
} from "@syncfusion/ej2-react-grids";

import { DataManager, JsonAdaptor } from "@syncfusion/ej2-data";
import {
  Edit,
  EditSettingsModel,
  Toolbar,
  ToolbarItems,
} from "@syncfusion/ej2-react-grids";

const Table = (props, EditSettingsModel, ToolbarItems) => {
  const { data } = props;

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

  //Using json adaptor for table in data from api
  const dataSource = new DataManager({
    json: data,
    adaptor: new JsonAdaptor(),
  });

  return (
    <div className="main-container_6">
      <GridComponent
        dataSource={dataSource}
        allowPaging={false}
        editSettings={editOptions}
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
            allowEditing={false}
          />
          <ColumnDirective field="Entrada" headerText="Entrada" />
          <ColumnDirective field="Saída" headerText="Saída" />
          <ColumnDirective
            field="HorasExtras"
            headerText="Horas Extras(Minutos)"
            editType="numericedit"
            width="20%"
          />
          <ColumnDirective
            field="Observacoes"
            headerText="Observações"
            width="20%"
          />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, Aggregate]} />
      </GridComponent>
    </div>
  );
};

export default Table;
