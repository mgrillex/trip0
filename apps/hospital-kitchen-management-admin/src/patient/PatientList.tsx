import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="availableMeals" source="availableMeals" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dietKind" source="dietKind" />
        <TextField label="entryDate" source="entryDate" />
        <TextField label="ID" source="id" />
        <TextField label="leavingDate" source="leavingDate" />
        <TextField label="patientId" source="patientId" />
        <TextField label="patientName" source="patientName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
